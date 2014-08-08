# SPTrans.js

A NodeJS module for [SPTrans Olho Vivo API](http://www.sptrans.com.br/desenvolvedores/APIOlhoVivo.aspx).

## Usage 

Add sptrans.js to your package.json:

```
  "dependencies": {
    "sptrans": "codigo-urbano/sptrans.js",
    ...
```

Require the module: 

```
    var SPTransAPI = require('sptrans');
```

Get a client instance:

```
    var sptrans = new SPTransAPI({
      api_key: 'Your API Key'
    })
```

Start doing request, like this, which will print all routes data containinig the string '748' in their names:

```
    sptrans.searchRoutes('748', function(err,data){
      console.log(data);
    });
```


# Examples

Please check `examples` directory.


## Development

Clone this repository locally:

    git@github.com:codigo-urbano/sptrans.js.git

Add your SPTrans API key to `package.json`.

Write tests and run:

    npm test
