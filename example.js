var SPTransAPI = require('./sptrans.js')

var sptrans = new SPTransAPI({
  app_key: '7ec6172b29856483524db5f1ff99a051fc6ec7041954990ac61d25e56b720570'
})

sptrans.searchRoutes('748', function(err,data){
  // console.log(data)

  sptrans.getRouteDetails('33627', function(err,data){
    // console.log(data)
  
    sptrans.getPositionsOnRoute('33627',function(err,data){
      // console.log(data)
    
      sptrans.getCorridors(function(err,data){
        // console.log(data)
        sptrans.searchStops('paulista', function(err,data){
          // console.log(data)
          sptrans.getRouteStops('34136', function(err,data){
            // console.log(data)
            sptrans.getEtaOnStopForRoute('480012890','34136', function(err,data){
              // console.log(data)    
              sptrans.getEtaForRoute('34136',function(err,data){
                // console.log(data)
                sptrans.getEtaForStop('480012890',function(err,data){
                  console.log(data)
                })                
                
              })
            })

          })
          
        })
        
      })
    })
  })
})