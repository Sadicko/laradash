define(['backbone'], function(Backbone) {
  return Backbone.Model.extend({
    defaults: {
      name: 'New Tutor',
      email: 'ex@mple.com',
      password: ''
    },
    initialize: function () {
    	this.set({cid: this.get('id') || this.cid});
    }
  });
});
