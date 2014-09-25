define([
  'nestedItemView',
  './model',
  'text!./itemTemplate.html'
], function(NestedItemView, Model, template) {
  return NestedItemView.extend({
    model: Model,
    template: template,
  });
});
