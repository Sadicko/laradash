define(['underscore', 'marionette', './model', 'text!./itemTemplate.html'], function(_, Marionette, Model, template) {
  return Marionette.ItemView.extend({
    model: Model,
    template: _.template(template),
    tagName: 'tr',
    events: {
      'click #delete': 'trash'
    },
    trash: function() {
      if (confirm('Are you sure?')) {
        return this.model.destroy();
      }
    }
  });
});
