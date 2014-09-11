define(['beagle', './collection', './compositeView', './layoutView', './model'], function(beagle, Collection, CompositeView, LayoutView, Model, AttrsRouter, UsersRouter) {
  return beagle.routes({
    '/edit/:attrid': function(params, path) {
      return params.app.content.show(new LayoutView({
        model: params.attr
      }));
    }
  }, {
    'attrid': function(id, params) {
      params.attr = params.collection.get(id);
      return id;
    }
  });
});
