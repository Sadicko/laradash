define(['underscore', 'marionette', 'text!./layoutTemplate.html', './parts/compositeView'], function(_, Marionette, template, PartsView) {
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
      'change #attrName': 'changeName'
    },
    regions: {
      parts: '#parts'
    },
    initialize: function(options) {
      return this.options = options;
    },
    onShow: function() {
      this.model.get('parts').fetch({async: false});
      return this.parts.show(new PartsView({
        collection: this.model.get('parts')
      }));
    },
    save: function() {
      this.model.save();
      return alert('Attribute has been saved.');
    },
    changeName: changeText('name')
  });
});
