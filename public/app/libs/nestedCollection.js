define(['backbone'], function(Backbone) {
  return Backbone.Collection.extend({
    initialize: function (data, opts) {
      // Sets the url using the parents and the nested url of the collection.
      // Allows the url to become `users/1/friends` for example.
      this.url = function () {
        if (opts.parent) {
          return opts.parent.url() + '/' + this.nestedUrl;
        } else {
          return null;
        }
      };
    }
  });
});
