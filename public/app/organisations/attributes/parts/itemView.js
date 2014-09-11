define(['underscore', 'marionette', './model', 'text!./itemTemplate.html'], function(_, Marionette, Model, template) {
  var changeText;
  changeText = function(prop) {
    return function(e) {
      var changes;
      changes = {};
      changes[prop] = e.currentTarget.value;
      return this.model.save(changes);
    };
  };
  return Marionette.ItemView.extend({
    model: Model,
    template: _.template(template),
    tagName: 'tr',
    events: {
      'click #delete': 'trash',
      'change #partName': 'changeName'
    },
    trash: function() {
      if (confirm('Are you sure?')) {
        return this.model.destroy();
      }
    },
    changeName: changeText('name')
  });
});
