define([
    'jquery',
    'underscore',
    'backbone',
    'model/App'
], function($, _, Backbone, App) {

    var VTest = Backbone.View.extend({

        constructor: function() {

            this.setTestEvent();

        },

        setTestEvent: function() {


            $("#sqrt-button").click(function() {
                try {
                    var app    = new App();
                    var number = parseInt(document.getElementById("sqrt-number").value);

                    var result = app.sqrt(number);
                    if (!result.im) {
                        alert("La raiz cuadrada de " + number + " es " + result);
                    } else {
                        alert("La raiz cuadrada de " + number + " es " + result.im + "i");
                    }
                } catch (e) {
                    alert("Error: " + JSON.stringify(e));
                }
            });
            $("#hi-button").click(function() {
                try {
                    var app = new App();
                    alert(app.hi());

                } catch (e) {
                    alert("Error: " + JSON.stringify(e));
                }
            });
        }

    });
    return VTest;
});
