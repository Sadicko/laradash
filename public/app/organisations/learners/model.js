define(['backbone'], function(Backbone) {
  return Backbone.Model.extend({
    defaults: {
      name: 'New Learner',
      email: 'ex@mple.com'
    },
    initialize: function () {
    	this.set({cid: this.get('id') || this.cid});
    }
  });
});
