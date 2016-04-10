var elixir = require('laravel-elixir');

elixir(function(mix) {
    mix.sass('./assets/sass/main.scss');
    mix.browserify('./components/app.js');
})
