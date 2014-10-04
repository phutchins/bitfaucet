module.exports.controller = function(app) {
  app.get('/error', function(req, res) {
    res.render('error');
  });
}
