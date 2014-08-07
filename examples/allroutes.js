var SPTransAPI = require('..');
var _ = require('underscore');
var sptrans = new SPTransAPI({
  api_key: '7ec6172b29856483524db5f1ff99a051fc6ec7041954990ac61d25e56b720570'
})

sptrans.getAllRoutes(function(err, data){
	console.log("CodigoLinha,Circular,Letreiro,Sentido,Tipo,DenominacaoTPTS,DenominacaoTSTP,Informacoes");
	_.each(data, function(row){
		console.log(row["CodigoLinha"] + "," +
			row["Circular"] + "," +
			row["Letreiro"] + "," +
			row["Sentido"] + "," +
			row["Tipo"] + "," +
			row["DenominacaoTPTS"] + "," +
			row["DenominacaoTSTP"] + "," +
			row["Informacoes"])
	});
})