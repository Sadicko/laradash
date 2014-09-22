define(['backbone'], function(Backbone) {
  var assignRelations = function (self, response, empty) {
    if (typeof self.relations === 'object') {
      Object.keys(self.relations).forEach(function (relation) {
        var value = empty ? null : response[relation];
        response[relation] = new self.relations[relation](value, {
          parent: self
        });
      });
    }

    return response;
  };

  return Backbone.Model.extend({
    initialize: function (data, opts) {
      var self = this;
      var changes = {};

      assignRelations(self, changes, true);
      changes['cid'] = this.get('id') || this.cid;
      self.set(changes);
    },

    parse: function (response) {
      var self = this;
      assignRelations(self, response, false);
      return response;
    }
  });
});
