# SPTrans.js

A NodeJS module for [SPTrans Olho Vivo API](http://www.sptrans.com.br/desenvolvedores/APIOlhoVivo.aspx).

## Usage examples

First:

    var sptrans = new SPTransAPI({
      api_key: 'Your API Key'
    })
    
Search for routes like '748', returning an array of routes:

    sptrans.searchRoutes('748', function(err,data){
      console.log(data);
    });

## Development

Clone this repository locally:

    git@github.com:codigo-urbano/sptrans.js.git

Add your SPTrans API key to `package.json`.

Write tests and run:

    npm test