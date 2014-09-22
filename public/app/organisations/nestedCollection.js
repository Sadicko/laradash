define(['backbone'], function(Backbone) {
  return Backbone.Collection.extend({
    initialize: function (data, opts) {
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
