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
  var organisations = new Collection();
  var orgsFetch = organisations.fetch().error(function () {
    alert('Failed to load organisations');
  }).success;

  return beagle.routes({
    '': function(params, path) {
      orgsFetch(function () {
        params.app.content.show(new CompositeView({
          collection: organisations
        }))
      });
    },
    'edit/:orgid': function(params, path) {
      orgsFetch(function () {
        params.app.content.show(new LayoutView({
          model: params.org
        }));
      });
    },
    'edit/:orgid/attributes': function(params, path) {
      orgsFetch(function () {
        params.collection = params.org.get('attrs');
        AttrsRouter(params, path);
      });
    },
    'edit/:orgid/tutors': function(params, path) {
      orgsFetch(function () {
        params.collection = params.org.get('tutors');
        TutorsRouter(params, path);
      });
    },
    'edit/:orgid/learners': function(params, path) {
      orgsFetch(function () {
        params.collection = params.org.get('learners');
        LearnersRouter(params, path);
      });
    }
  }, {
    'orgid': function(id, params) {
      orgsFetch(function () {
        params.org = organisations.get(id);
      });
      return id;
    }
  });
});
