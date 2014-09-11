define([
  'backbone',
  './tutors/collection',
  './attributes/collection',
  './learners/collection'
], function(Backbone, TutorsCollection, AttrsCollection, LearnersCollection) {
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
        learners: new LearnersCollection([], {
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
      response.learners = new LearnersCollection(response.learners, {
        parent: self
      });
      return response;
    }
  });
});
