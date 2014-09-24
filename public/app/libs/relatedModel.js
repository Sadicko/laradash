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
      var changes = {};
 
      if (opts.url) {
        this.url = function () {
          return opts.url;
        };
      }
      
      assignRelations(this, changes, true);
    },

    parse: function (response) {
      assignRelations(this, response, false);
      return response;
    }
  });
});
