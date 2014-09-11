define(['backbone'], function(Backbone) {
  return Backbone.Model.extend({
    defaults: {
      name: 'New Part'
    },
    initialize: function () {
    	this.set({cid: this.get('id') || this.cid});
    }
  });
});
