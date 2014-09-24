define([
  'marionette',
], function(Marionette) {
  // Runs fn for each relation in self.
  var eachRelation = function (self, fn) {
    if (self.relations) {
      Object.keys(self.relations).forEach(fn);
    }
    return self.relations;
  };

  return Marionette.LayoutView.extend({
    modelSuccess: function (fn) {},
    events: {},
    initialize: function (options) {
      // Sets up regions for relations.
      var self = this;
      eachRelation(this, function (relation) {
        self.addRegion(relation, '#' + relation);
      });
      
      // Adds helper events.
      this.events['click #save'] = this.save;
      this.events['change input'] = this.changeValue;

      // Adds options.
      this.options = options;

      // Loads data.
      this.modelSuccess = this.model.fetch().success;
      this.modelSuccess(this.render)
    },
    onShow: function () {
      // Loads and shows relations.
      var self = this;
      this.modelSuccess(function () {
        eachRelation(self, function (relation) {
          self[relation].show(new self.relations[relation]({
            collection: self.model.get(relation)
          }));
        });
      });
    },

    // Defines callbacks for helper events.
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
      var prop = e.currentTarget.id;
      var collection = this.model.collection;
      var url = collection ? collection.nestedUrl : '';

      // Checks that prop belongs to model.
      // Allows for collectionname-prop.
      // Avoids changing properties that have the same name as nested model properties.
      if (prop.indexOf('-') === -1 || prop.split('-')[0] === url) {
        changes[prop] = e.currentTarget.value;
        this.model.set(changes);
      }
    }
  });
});
