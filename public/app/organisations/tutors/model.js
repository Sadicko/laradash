define(['relatedModel'], function(RelatedModel) {
  return RelatedModel.extend({
    defaults: {
      name: 'New Tutor',
      email: 'ex@mple.com',
      password: ''
    }
  });
});
