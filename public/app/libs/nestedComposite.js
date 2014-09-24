define(['marionette'], function(Marionette) {
  return Marionette.CompositeView.extend({
    childViewContainer: '#models',
    events: {},
    initialize: function (options) {
      this.events['click #add'] = this.add;
      this.options = options;
      this.collection.fetch();
    },
    add: function () {
      this.collection.create({}, {wait: true});
    }
  });
});
