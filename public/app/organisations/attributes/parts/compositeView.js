define(['underscore', 'marionette', './itemView', 'text!./compositeTemplate.html'], function(_, Marionette, ItemView, template) {
  return Marionette.CompositeView.extend({
    childView: ItemView,
    template: _.template(template),
    childViewContainer: '#models',
    events: {
      'click #add': 'add'
    },
    add: function() {
      return this.collection.create({}, {wait: true});
    }
  });
});
