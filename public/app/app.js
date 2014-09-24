define([
  'backbone',
  'marionette',
  'beagle',
  './organisations/router', 
  './organisations/collection'
], function(Backbone, Marionette, beagle, OrgsRouter) {
  var App = new Marionette.Application();

  App.addRegions({
    content: '#content'
  });

  App.addInitializer(function(options) {
    beagle.walk(OrgsRouter, {
      app: App,
      url: 'api'
    });
  });
  
  return App;
});
