define(['backbone', './parts/collection'], function(Backbone, PartsCollection) {
  return Backbone.Model.extend({
    defaults: {
      name: 'New Attribute'
    },

    initialize: function (data, opts) {
      var self = this;
      this.set({
        parts: new PartsCollection([], {
          parent: self
        }),
        cid: this.get('id') || this.cid
      });
    },

    parse: function (response) {
      var self = this;
      response.parts = new PartsCollection(response.parts, {
        parent: self
      });
      return response;
    }
  });
});
