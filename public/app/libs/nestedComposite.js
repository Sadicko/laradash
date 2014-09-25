define([
  'marionette',
  './nestedItemView'
], function(Marionette, NestedItemView) {
  return Marionette.CompositeView.extend({
    // Adds utility methods (these should not override Marionette methods).
    _initHelperEvents: function () {
      this.events['click #add'] = this.add;
    },
    _initializeTemplate: NestedItemView.prototype._initializeTemplate,

    // Extends Marionette.
    childViewContainer: '#models',
    events: {},
    initialize: function (options) {
      this.options = options;
      this._initializeTemplate();
      this._initHelperEvents();
      this.collection.fetch();
    },

    // Defines callbacks for helper events.
    add: function () {
      this.collection.create({}, {wait: true});
    }
  });
});
