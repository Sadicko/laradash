define(['underscore', 'marionette', 'text!./layoutTemplate.html'], function(_, Marionette, template) {
  var changeText;
  changeText = function(prop) {
    return function(e) {
      var changes;
      changes = {};
      changes[prop] = e.currentTarget.value;
      return this.model.set(changes);
    };
  };
  return Marionette.LayoutView.extend({
    template: _.template(template),
    events: {
      'click #save': 'save',
      'change #name': 'changeName',
      'change #email': 'changeEmail',
      'change #password': 'changePassword'
    },
    initialize: function(options) {
      return this.options = options;
    },
    save: function() {
      this.model.save();
      return alert('Tutor has been saved.');
    },
    changeName: changeText('name'),
    changeEmail: changeText('email'),
    changePassword: changeText('password')
  });
});
