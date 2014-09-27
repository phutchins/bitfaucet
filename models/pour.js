// model: pour
var
  mongoose = require('mongoose'),
  pourSchema = new mongoose.Schema({
    ip: { type: String },
    pour_date: { type: Date, default: Date.now },
    pour_ammount: { type: Number, default: 0 },
    comment: { type: String }]
  }),
  Pour = mongoose.model('Pour', pourSchema);

module.exports = Pour;
