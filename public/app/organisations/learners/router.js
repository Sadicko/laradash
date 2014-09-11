define(['beagle', './collection', './compositeView', './layoutView', './model'], function(beagle, Collection, CompositeView, LayoutView, Model) {
  return beagle.routes({
    '/edit/:learnerid': function(params, path) {
      return params.app.content.show(new LayoutView({
        model: params.learner
      }));
    }
  }, {
    'learnerid': function(id, params) {
      params.learner = params.collection.get(id);
      return id;
    }
  });
});
