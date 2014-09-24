define(['marionette'], function(Marionette) {
  return Marionette.ItemView.extend({
    events: {},
    tagName: 'tr',
    initialize: function (options) {
      this.events['click #trash'] = this.trash;
      this.events['change input'] = this.changeValue;
      this.options = options;
    },
    trash: function() {
      if (confirm('Are you sure?')) {
        return this.model.destroy();
      }
    },
    changeValue: function(e) {
      var changes = {};
      var prop = e.currentTarget.id.split('-').pop();

      changes[prop] = e.currentTarget.value;
      this.model.save(changes);
    }
  });
});
