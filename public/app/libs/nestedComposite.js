define(['marionette'], function(Marionette) {
  return Marionette.CompositeView.extend({
    childViewContainer: '#models',
    events: {},
    initialize: function (options) {
      // Adds helper events.
      this.events['click #add'] = this.add;

      // Adds options.
      this.options = options;

      // Loads data.
      this.collection.fetch();
    },

    // Defines callbacks for helper events.
    add: function () {
      this.collection.create({}, {wait: true});
    }
  });
});
