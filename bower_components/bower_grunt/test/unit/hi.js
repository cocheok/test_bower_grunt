var requirejs = require('requirejs'); //librería para usar el requirejs del cliente en nodejs
var should = require('should'); //librería de asserts

requirejs.config({
    baseUrl    : 'src',
    nodeRequire: require,
    paths      : {
        mathjs: '../bower_components/mathjs/dist/math'
    }
});
describe('src/test.js', function() {
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

