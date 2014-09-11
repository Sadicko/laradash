define(['underscore', 'marionette', 'text!./layoutTemplate.html', './tutors/compositeView', './attributes/compositeView'], function(_, Marionette, template, TutorsView, AttrsView) {
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
      'change #lrsUser': 'changeLRSUser',
      'change #lrsPass': 'changeLRSPass'
    },
    regions: {
      tutors: '#tutors',
      attrs: '#attributes'
    },
    initialize: function(options) {
      return this.options = options;
    },
    onShow: function() {
      this.model.get('tutors').fetch({async: false});
      this.tutors.show(new TutorsView({
        collection: this.model.get('tutors')
      }));
      this.model.get('attrs').fetch({async: false});
      this.attrs.show(new AttrsView({
        collection: this.model.get('attrs')
      }));
    },
    save: function() {
      this.model.save();
      return alert('Orgnisation has been saved.');
    },
    changeName: changeText('name'),
    changeLRSUser: changeText('lrsUser'),
    changeLRSPass: changeText('lrsPass'),
  });
});
