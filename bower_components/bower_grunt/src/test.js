/*
 Class: Demo
 Description: Demo class
 */
define(["mathjs"], function(math) {
    function Test() {
    }


    Test.prototype.hi   = function() {
        return "Demo Bower+Grunt por grupo 3";
    };
    Test.prototype.sqrt = function(number) {
        return math.sqrt(number);
    };

    return Test;

});
