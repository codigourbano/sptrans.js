var VERSION = '0.0.1',
  _ = require('underscore'),
  request = require('request').defaults({jar: true})
        
function Sptrans(options) {
  if (!(this instanceof Sptrans)) return new Sptrans(options);

  var self = this;
  
  var defaults = {
    rest_base: 'http://api.olhovivo.sptrans.com.br/v0',
    api_key: null
  };

  self.lines = [];
  
  self.options = _.extend(defaults, options);
  
}
Sptrans.VERSION = VERSION;


/*
 * Autenthicate at SPTrans
 */
 
Sptrans.prototype.autenthicate = function (callback){
  var self = this

  request({
    uri: self.options.rest_base + '/Login/Autenticar?token=' + self.options.api_key,
    method: "POST"
  }, function(error, response, body) {
    if (error) callback(error)
    callback()
  })
}

/*
 * Search routes
 */
 
Sptrans.prototype.searchRoutes = function (term, callback){
 this.get('/Linha/Buscar?termosBusca='+term,callback)
}

/*
 * Get route details
 */
Sptrans.prototype.getRouteDetails = function (id, callback){
  this.get('/Linha/CarregarDetalhes?codigoLinha='+id,callback)
} 


/*
 * Search stops
 */

Sptrans.prototype.searchStops = function (term, callback){
  this.get('/Parada/Buscar?termosBusca='+term,callback)
} 

/*
 * Get route stops
 */

Sptrans.prototype.getRouteStops = function (id, callback){
  this.get('/Parada/BuscarParadasPorLinha?codigoLinha='+id,callback)
}

/*
 * Get corridors
 */

Sptrans.prototype.getCorridors = function (callback){
  this.get('/Corredor',callback)
}

/*
 * Get corridors stops
 */

Sptrans.prototype.getCorridorsStops = function (id, callback){
  this.get('/Parada/BuscarParadasPorCorredor?codigoCorredor='+id,callback)
}

/*
 * Get bus positions on route
 */

Sptrans.prototype.getPositionsOnRoute = function (id, callback){
  this.get('/Posicao?codigoLinha='+id,callback)
}

/*
 * Get ETAs on stop for route
 */

Sptrans.prototype.getEtaOnStopForRoute = function (stop_id, route_id, callback){
  this.get("/Previsao?codigoParada="+stop_id+"&codigoLinha="+route_id,callback)
}

/*
 * Get all ETAs for route
 */

Sptrans.prototype.getEtaForRoute = function (route_id, callback){
  this.get("/Previsao/Linha?codigoLinha="+route_id,callback)
}

/*
 * Get all ETAs for stop
 */

Sptrans.prototype.getEtaForStop = function (stop_id, callback){
  this.get("/Previsao/Parada?codigoParada="+stop_id,callback)
}

/*
 * Get
 */
 
Sptrans.prototype.get = function (url, callback){
  if (typeof params === 'function') {
    callback = params;
    params = null;
  }

  if ( typeof callback !== 'function' ) {
    throw new Error('FAIL: INVALID CALLBACK.');
    return this;
  }
  
  var self = this
  
  var doRequest = function(){
    request({
      method: "GET",
      uri: self.options.rest_base + url
    }, function(error, response, body) {
      if (error) callback(error)
      callback(null, JSON.parse(body) || {})
    })    
  }
  
  if (!self.jar) {
    self.autenthicate(function(err){
    doRequest()
    })
  } else {
    doRequest()
  }
  return this
}

module.exports = Sptrans;