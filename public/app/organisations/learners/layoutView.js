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
      'change #identifier': 'changeIdentifier',
    },
    initialize: function(options) {
      return this.options = options;
    },
    save: function() {
      this.model.save();
      return alert('Learner has been saved.');
    },
    changeName: changeText('name'),
    changeIdentifier: changeText('identifier')
  });
});
