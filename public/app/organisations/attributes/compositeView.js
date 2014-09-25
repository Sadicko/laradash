define([
  'nestedComposite',
  './itemView',
  'text!./compositeTemplate.html'
], function(NestedComposite, ItemView, template) {
  return NestedComposite.extend({
    childView: ItemView,
    template: template
  });
});
