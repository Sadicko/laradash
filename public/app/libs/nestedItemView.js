define(['marionette'], function(Marionette) {
  return Marionette.ItemView.extend({
    events: {},
    tagName: 'tr',
    initialize: function (options) {
      // Adds helper events.
      this.events['click #trash'] = this.trash;
      this.events['change input'] = this.changeValue;

      // Adds options.
      this.options = options;
    },

    // Defines callbacks for helper events.
    trash: function() {
      if (confirm('Are you sure?')) {
        return this.model.destroy();
      }
    },
    changeValue: function(e) {
      var changes = {};
      var prop = e.currentTarget.id.split('-').pop(); // Allows for collectionname-prop.

      changes[prop] = e.currentTarget.value;
      this.model.save(changes);
    }
  });
});
