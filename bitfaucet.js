var Maki = require('maki');
var bitfaucet = new Maki();

var bitcoin = require('bitcoin');

var Passport = require('maki-sessions');
var passport = new Passport({});

bitfaucet.use( passport );

var Faucet = bitfaucet.define('Faucet', {
  attributes: {
    name:    { type: String , default: 'Default' , required: true , max: 80 },
    balance: { type: Number , default: 0 , required: true },
    host:    { type: String , default: 'localhost', required: true , max: 120 },
    port:    { type: Number , default: 8332, required: true },
    user:    { type: String , default: 'default', max: 40 },
    pass:    { type: String , default: 'default', max: 40 },
    timeout: { type: Number , default: 30000 }
  },
  methods: {
    btcClient: function() {
      var faucet = this;
      return new bitcoin.Client( faucet );
    }
  }
});

var Pour = bitfaucet.define('Pour', {
  name: 'Pour',
  attributes: {
    _faucet: { type: require('mongoose').SchemaTypes.ObjectId , required: true },
    address: { type: String , max: 80 },
    amount:  { type: String , max: 80 },
    ip:      { type: String , private: true , max: 16 },
    date:    { type: Date , default: Date.now , restricted: true },
    txid:    { type: String },
    comment: { type: String },
    status:  { type: String , enum: [
      'pending',
      'broadcast',
      'failed'
    ], default: 'pending', required: true }
  },
  handlers: {
    'html': {
      create: function( req , res , next) {
        req.flash('success', 'Pour created successfully!');
        return res.redirect('/');
      }
    }
  }
});

var Index = bitfaucet.define('Index', {
  name: 'Index',
  routes: {
    query: '/'
  },
  templates: {
    query: 'index'
  },
  requires: {
    'Faucet': {
      filter: {}
    }
  },
  static: true,
  internal: true
})

Faucet.post('get', function( faucet , next ) {
  faucet.btcClient().getBalance('*', 1, function(err, balance, resHeaders) {
    if (err) return console.log(err);
    faucet.balance = balance;
    faucet.save(function(err) {
      next( err , 'faucet stuff' );
    });
    
  });
});

Pour.pre('create', function( next ) {
  var pour = this;
  console.log('TODO: implement ratelimiter.  pre-save() called.', pour );
  next();
});

Pour.on('create', function( pour ) {
  pour.populate({
    path: '_faucet',
    model: 'Faucet'
  }, function(err, pour) {
    if (!pour._faucet) return;

    pour._faucet.btcClient().sendToAddress( pour.address , parseFloat(pour.amount) , function(err, txid) {
      if (err) {
        console.error(err);
        Pour.update( pour._id , {
          status: 'failed'
        } , function(err) {
          console.log('could not commit failure to database');
        });
      } else {
        Pour.update( pour._id , {
          status: 'broadcast',
          txid: txid
        } , function(err) {
          
        });
      }
    });
  });
});

bitfaucet.start();
