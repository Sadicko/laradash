define(['marionette'], function(Marionette) {
  return Marionette.CompositeView.extend({
    childViewContainer: '#models',
    events: {},
    initialize: function (options) {
      this.events['click #add'] = self.add;
      this.options = options;
    },
    add: function () {
      this.collection.create({}, {wait: true});
    }
  });
});
