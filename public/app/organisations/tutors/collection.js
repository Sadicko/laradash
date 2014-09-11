define(['backbone', './model'], function(Backbone, Model) {
  return Backbone.Collection.extend({
    model: Model,
    initialize: function (data, opts) {
    	this.url = function () {
    		return opts.parent.url() + '/tutors';
    	};
    }
  });
});
