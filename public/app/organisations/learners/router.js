define([
  'beagle',
  './collection',
  './layoutView',
  './model'
], function (beagle, Collection, LayoutView, Model) {
  var collection = new Collection();

  return beagle.routes({
    'edit/:id': function(params, path) {
      params.app.content.show(new LayoutView({
        model: new Model({}, {
          url: params.url
        })
      }));
    }
  }, {
    'id': function(id, params) {
      params.url += '/' + collection.nestedUrl + '/' + id;
      return id;
    }
  });
});
