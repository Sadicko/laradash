define([
  'marionette',
], function(Marionette) {
  var eachRelation = function (self, fn) {
    if (self.relations) {
      Object.keys(self.relations).forEach(fn);
    }
    return self.relations;
  };

  return Marionette.LayoutView.extend({
    events: {},
    initialize: function (options) {
      // Setup regions for collections.
      var self = this;
      eachRelation(self, function (relation) {
        self.addRegion(relation, '#' + relation);
      });
      self.events['click #save'] = self.save;

      this.options = options;
    },
    onShow: function () {
      // Load and show collections.
      var self = this;
      eachRelation(self, function (relation) {
        self.model.get(relation).fetch().success(function () {
          if (self[relation]) {
            self[relation].show(new self.relations[relation]({
              collection: self.model.get(relation)
            }));
          }
        }).error(function () {
          alert('Could not load ' + relation + '.');
          console.error(model, response, options);
        });
      });
    },
    save: function () {
      this.model.save().success(function (model, response, options) {
        alert('Saved successfully.');
      }).error(function (model, response, options) {
        alert('Could not save.');
        console.error(model, response, options);
      });
    },
    changeValue: function(e) {
      var changes = {};
      changes[e.currentTarget.id] = e.currentTarget.value;
      return this.model.set(changes);
    }
  });
});
