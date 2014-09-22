define(['relatedModel'], function(RelatedModel) {
  return RelatedModel.extend({
    defaults: {
      name: 'New Learner',
      identifier: 'ex@mple.com'
    }
  });
});
