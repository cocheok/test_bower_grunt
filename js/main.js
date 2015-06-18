require.config({
	paths: {
		jquery: '../bower_components/jquery/dist/jquery.min',
		underscore: '../bower_components/underscore/underscore-min',
		backbone: '../bower_components/backbone/backbone',
		test: '../bower_components/bower_grunt/dist/test.min'
	}
});


require(['view/VTest'], function(Test){
	var test = new Test();
});
