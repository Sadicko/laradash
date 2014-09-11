define(['backbone', 'marionette', 'beagle', './organisations/router'], 
  function(Backbone, Marionette, beagle, OrgsRouter) {
  var App;
  App = new Marionette.Application();
  App.addRegions({
    content: '#content'
  });
  App.addInitializer(function(options) {
    beagle.walk([OrgsRouter], {
      app: App
    });
  });
  return App;
});
