define(['marionette'], function(Marionette) {
  return Marionette.ItemView.extend({
    events: {},
    tagName: 'tr',
    initialize: function (options) {
      this.events['click #trash'] = this.trash;
      this.options = options;
    },
    trash: function() {
      if (confirm('Are you sure?')) {
        return this.model.destroy();
      }
    },
    changeValue: function(e) {
      var changes = {};
      changes[e.currentTarget.id] = e.currentTarget.value;
      return this.model.set(changes);
    }
  });
});
