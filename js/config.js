/**
 * Created by Grenia on 19.04.2016.
 */
require.config({
    baseUrl: 'js',

    // loading all libs
    paths: {
        'jquery': '../node_modules/jquery/dist/jquery.min',
        'matchHeight' : '../node_modules/jquery-match-height/dist/jquery.matchHeight-min'
    },
    // shim all libraries
    shim: {

        'jquery': {
            exports: 'jquery'
        },
        "matchHeight" : {
            deps :['jquery']
        }
    },
    priority: ['jquery']
}); requirejs(["app"]);