var VERSION = '0.0.1'
  , _ = require('underscore')
  , request = require('request')
        
function Sptrans(options) {
  if (!(this instanceof Sptrans)) return new Sptrans(options);

  var self = this
  
  var defaults = {
    rest_base: 'http://api.olhovivo.sptrans.com.br/v0',
    app_key: null
  };
  
  this.options = _.extend(defaults, options);
  
  this.jar = request.jar()
  
  request({
    uri: self.options.rest_base + '/Login/Autenticar?token=' + self.options.app_key,
    method: "POST"
  }, function(error, response, body) {
    if (error) 
      throw new Error('There was an error while connecting to SPTrans API.')
    cookie = request.cookie(response.headers['set-cookie'][0])
    self.jar.add(response.headers['set-cookie'][0])
    console.log(self.jar)
  })
}
Sptrans.VERSION = VERSION;
module.exports = Sptrans;

Sptrans.prototype.search = function (term, params, callback){
  if (typeof params === 'function') {
    callback = params;
    params = null;
  }

  if ( typeof callback !== 'function' ) {
    throw new Error('FAIL: INVALID CALLBACK.');
    return this;
  }
  
  
}

// Sptrans.prototype.login = function(){
//   var self = this
//   
//   request({
//     uri: self.options.rest_base + '/Login/Autenticar?token=' + self.options.app_key,
//     method: "POST"
//   }, function(error, response, body) {
//     if (error) return false
//     cookie = request.cookie(response.headers['set-cookie'][0])
//     self.jar.add(cookie)
//     return true
//   })
//   return this
// }