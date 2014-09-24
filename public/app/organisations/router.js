define([
  'beagle',
  './collection',
  './compositeView',
  './layoutView',
  './model',
  './attributes/router',
  './tutors/router',
  './learners/router'
], function(beagle, Collection, CompositeView, LayoutView, Model, AttrsRouter, TutorsRouter, LearnersRouter) {
  var collection = new Collection();

  return beagle.routes({
    // List.
    '*': function(params, path) {
      if (path.indexOf('edit') === -1) {
        collection.url = params.url + '/' + collection.nestedUrl;
        params.app.content.show(new CompositeView({
          collection: collection
        }));
      }
    },

    // Item.
    'edit/:id': function(params, path) {
      params.app.content.show(new LayoutView({
        model: new Model({}, {
          url: params.url
        })
      }));
    },

    // Relations.
    'edit/:id/attributes/*': AttrsRouter,
    'edit/:id/tutors/*': TutorsRouter,
    'edit/:id/learners/*': LearnersRouter
  }, {
    'id': function(id, params) {
      params.url += '/' + collection.nestedUrl + '/' + id;
      return id;
    }
  });
});
