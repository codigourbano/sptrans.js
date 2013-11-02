var request = require('request')
  , jar = request.jar()
  , cookie
  , basePath = 'http://api.olhovivo.sptrans.com.br/v0'
  
function authenticate(done) {
  request({
    uri: basePath + '/Login/Autenticar?token=7ec6172b29856483524db5f1ff99a051fc6ec7041954990ac61d25e56b720570',
    method: "POST"
  }, function(error, response, body) {
    if (error) return false
    cookie = request.cookie(response.headers['set-cookie'][0])
    jar.add(cookie)
    done()
  })
}

function searchRoutes(search) {
  request({
    uri: basePath + '/Linha/Buscar?termosBusca=' + search,
    method: "GET",
    jar: jar
  }, function(error, response, body) {
    if (error) return false
    console.log(body)
  })
}

function getRouteUnits(id) {
  request({
    uri: basePath + '/Posicao?codigoLinha=' + id,
    method: "GET",
    jar: jar
  }, function(error, response, body) {
    if (error) return false
    console.log(body)
  })
}

authenticate(function(){
  getRouteUnits(841)
  // console.log(true)
})