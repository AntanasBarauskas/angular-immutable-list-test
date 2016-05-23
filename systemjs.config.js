(function(global) {
    const config = {
        defaultJSExtensions: true,
        map: {
            'rxjs': 'node_modules/rxjs',
            '@angular': 'node_modules/@angular',
            'immutable': 'node_modules/immutable/dist/immutable.js'
        },
        packages: {
            '@angular/core': { main: 'index' },
            '@angular/compiler': { main: 'index' },
            '@angular/common': { main: 'index' },
            '@angular/http': { main: 'index' },
            '@angular/router': { main: 'index' },
            '@angular/router-deprecated': { main: 'index' },
            '@angular/platform-browser': { main: 'index' },
            '@angular/platform-browser-dynamic': { main: 'index' },
            'rxjs': { main: 'Rx' },
            'app': { main: 'main' }
        }
    };

    System.config(config);
})(this);