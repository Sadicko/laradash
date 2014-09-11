define(['marionette', './collection', './compositeView', './layoutView', './model'], function(Marionette, Collection, CompositeView, LayoutView, Model) {
  return Marionette.Controller.extend({
    organisations: new Collection([{}]),
    initialize: function() {},
    list: function() {
      return this.options.app.content.show(new CompositeView({
        collection: this.organisations
      }));
    },
    "new": function() {
      return this.options.app.content.show(new LayoutView({
        model: new Model(),
        collection: this.organisations
      }));
    }
  });
});
