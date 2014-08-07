var SPTransAPI = require('..');

var sptrans = new SPTransAPI({
  api_key: '7ec6172b29856483524db5f1ff99a051fc6ec7041954990ac61d25e56b720570'
})

sptrans.getAllRoutes(function(err, data){
	console.log(data);
})