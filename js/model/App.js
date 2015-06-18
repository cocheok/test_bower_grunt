define(['underscore',
        'backbone',
        'test'
], function(_, backbone, Test) {
    var App = Backbone.Model.extend({

        constructor: function() {
        },

        /*
         Parameters: user: Username
         pass: Password
         Return: Boolean
         */
        hi  : function() {
            var test = new Test();
            return test.hi();
        },
        sqrt: function(number) {
            var test = new Test();
            return test.sqrt(number);
        }

    });

    return App;

});
