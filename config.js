module.exports = {
    src: {
        /* bootstrap: 'node_modules/bootstrap/dist/css/bootstrap.css',*/
        // normalize: 'node_modules/normalize.css/normalize.css',

        sass: [
            'node_modules/normalize.css/normalize.css',
          /*  'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',*/
            'src/style/main.sass'
        ],

        js: [
            'node_modules/jquery/dist/jquery.js',
            'node_modules/bootstrap/dist/js/bootstrap.min.js',
            /*'node_modules/angular/angular.js',*/
            'bower_components/angular/angular.js',
            'bower_components/angular-route/angular-route.js',
            'src/js/**/*.js'
        ],

        html: 'src/html/*.html'
    },

    dest: {
        css: 'build/css',
        js: 'build/js'
    },

    maps: '../maps',

    sassConfig: {
        outputStyle: 'compressed'
    },

    browserSyncConfig: {
        server: {
            baseDir: "./",
            index: "index.html"
        },
        notify: true
    },

    watchSass: 'src/style/**/*.sass',

    autoprefixer: [
        'last 2 versions',
        '> 1%',
        'ie 9'
    ]


};
