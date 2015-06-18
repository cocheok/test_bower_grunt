var requirejs = require('requirejs'); //librería para usar el requirejs del cliente en nodejs
var should = require('should'); //librería de asserts

requirejs.config({
    baseUrl    : 'dist',
    nodeRequire: require,
    paths      : {
        test: 'test.min'
    }
});
describe('test.min.js', function() {
    var Test;
    before(function(done) {

        requirejs(['test'], function(_Test) {
                Test = _Test;
                done();
            }
        );
    });
    it('#hi', function() {
        var test   = new Test();
        var result = test.hi();
        result.should.equal("Demo Bower+Grunt por grupo 3");
    });

});

