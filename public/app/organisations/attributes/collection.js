define(['nestedCollection', './model'], function(NestedCollection, Model) {
  return NestedCollection.extend({
    model: Model,
    nestedUrl: 'attrs'
  });
});
