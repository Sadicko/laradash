define(['beagle', './collection', './compositeView', './layoutView', './model'], function(beagle, Collection, CompositeView, LayoutView, Model, AttrsRouter, UsersRouter) {
  return beagle.routes({
    '/edit/:tutorid': function(params, path) {
      return params.app.content.show(new LayoutView({
        model: params.tutor
      }));
    }
  }, {
    'tutorid': function(id, params) {
      params.tutor = params.collection.get(id);
      return id;
    }
  });
});
