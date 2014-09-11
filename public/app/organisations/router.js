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
  var newOrg, organisations;
  organisations = new Collection();
  organisations.fetch({
    error: function () {
      alert('Could not load organisations.');
    },
    async: false
  });
  newOrg = null;

  return beagle.routes({
    '': function(params, path) {
      return params.app.content.show(new CompositeView({
        collection: organisations
      }));
    },
    'edit/:orgid': function(params, path) {
      return params.app.content.show(new LayoutView({
        model: params.org
      }));
    },
    'edit/:orgid/attributes': function(params, path) {
      params.collection = params.org.get('attrs');
      return AttrsRouter(params, path);
    },
    'edit/:orgid/tutors': function(params, path) {
      params.collection = params.org.get('tutors');
      return TutorsRouter(params, path);
    },
    'edit/:orgid/learners': function(params, path) {
      params.collection = params.org.get('learners');
      return LearnersRouter(params, path);
    }
  }, {
    'orgid': function(id, params) {
      params.org = organisations.get(id);
      return id;
    }
  });
});
