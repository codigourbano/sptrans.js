var 
    should = require('should'),
    SPTrans = require('../index.js'), 
    api_key = require('../api_key'),
    assert = require('assert'),
    replay = require('replay');

// replay.mode = 'record';

describe('Bus routes API requests', function(){
  before(function() {
    this.sptrans = new SPTrans({
      api_key: api_key
    });
  });

  describe('when searches "748" for routes', function(){
    it('should return correct number of routes', function(done){
      this.sptrans.searchRoutes('748', function(err,data){
        assert.equal(err, null);
        assert.equal(data.length, 14);
        done();
      });
    });
  });
  
  describe('when get positions for route id 412', function(){
    it('should return a valid hash of positions', function(done){
      this.sptrans.getPositionsOnRoute('412', function(err,data){
        assert.equal(err, null);
        assert(Array.isArray(data['vs']));
        done();
      });
    });
  });
});