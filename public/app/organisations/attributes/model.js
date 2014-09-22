define(['relatedModel', './parts/collection'], function(RelatedModel, PartsCollection) {
  return RelatedModel.extend({
    defaults: {
      name: 'New Attribute'
    },
    relations: {
    	parts: PartsCollection
    }
  });
});
