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
    it('#sqrt -4', function() {
        var test   = new Test();
        var result = test.sqrt(-4);
        result.im.should.equal(2);
        result.re.should.equal(0);
    });
    it('#sqrt 4', function() {
        var test   = new Test();
        var result = test.sqrt(4);
        result.should.equal(2);

    });
});

