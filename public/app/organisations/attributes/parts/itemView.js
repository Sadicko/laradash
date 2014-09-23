define([
  'underscore',
  'nestedItemView',
  './model',
  'text!./itemTemplate.html'
], function(_, NestedItemView, Model, template) {
  return NestedItemView.extend({
    model: Model,
    template: _.template(template),
    events: {
      'change #partName': 'changeValue'
    }
  });
});
