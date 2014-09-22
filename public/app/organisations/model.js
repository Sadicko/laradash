define([
  'relatedModel',
  './tutors/collection',
  './attributes/collection',
  './learners/collection'
], function(RelatedModel, TutorsCollection, AttrsCollection, LearnersCollection) {
  return RelatedModel.extend({
    defaults: {
      name: 'New Organisation',
      lrsUser: '',
      lrsPass: ''
    },

    relations: {
      tutors: TutorsCollection,
      attrs: AttrsCollection,
      learners: LearnersCollection
    }
  });
});
