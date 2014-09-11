define(['backbone', './tutors/collection', './attributes/collection'], function(Backbone, TutorsCollection, AttrsCollection) {
  return Backbone.Model.extend({
    defaults: {
      name: 'New Organisation',
      lrsUser: '',
      lrsPass: ''
    },

    initialize: function (data, opts) {
      var self = this;
      this.set({
        tutors: new TutorsCollection([], {
          parent: self
        }),
        attrs: new AttrsCollection([], {
          parent: self
        }),
        cid: this.get('id') || this.cid
      });
    },

    parse: function (response) {
      var self = this;
      response.tutors = new TutorsCollection(response.tutors, {
        parent: self
      });
      response.attrs = new AttrsCollection(response.attrs, {
        parent: self
      });
      return response;
    }
  });
});
