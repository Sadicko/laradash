requirejs.config({
  shim: {
    underscore: {
      deps: [],
      exports: '_'
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    marionette: {
      deps: ['backbone'],
      exports: 'Marionette'
    }
  },
  paths: {
    jquery: '//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min',
    underscore: '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.2/underscore-min',
    backbone: '//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min',
    marionette: '//cdnjs.cloudflare.com/ajax/libs/backbone.marionette/2.0.2/backbone.marionette.min',
    text: '//cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text.min',
    beagle: './libs/beagle'
  }
});

require(['jquery', './app'], function($, App) {
  $(document).on('click', 'a', function(e) {
    var hash, href;
    href = e.currentTarget.getAttribute('href');
    if (href != null) {
      if (href[0] === '/') {
        e.preventDefault();
        return location.href += href;
      } else if (href[0] === '#') {
        e.preventDefault();
        hash = location.hash.split('/');
        hash.pop();
        return location.hash = '#' + hash.join('/') + href.slice(1);
      }
    }
  });
  return App.start();
});
