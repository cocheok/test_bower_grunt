module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg      : grunt.file.readJSON('package.json'),
        mochaTest: {
            test      : {
                options: {
                    reporter: 'spec'
                },
                src    : ['test/unit/**/*.js']
            },
            distTest      : {
                options: {
                    reporter: 'spec'
                },
                src    : ['test/dist/**/*.js']
            }
        },
        requirejs: {
            compile: {
                options: {
                    baseUrl            : "src",
                    include            : ['test'],
                    skipModuleInsertion: false,
                    mainConfigFile     : "require-config.js",
                    out                : "dist/test.min.js", // output file
                    optimize           : 'uglify2' // optimise js code
                }
            }
        },
        uglify   : {
            prod: {
                files: {
                    'build/test.min.js': ['dist/test.js']
                }
            }
        }
    });

    //Testear posta
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.registerTask('test', ['mochaTest:test']);

    //Buildear posta
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.registerTask('build', ['test', 'requirejs']);

    //uglify solo
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('uglify', ['uglify']);

};