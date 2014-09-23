define([
  'underscore',
  'nestedComposite',
  './itemView',
  'text!./compositeTemplate.html'
], function(_, NestedComposite, ItemView, template) {
  return NestedComposite.extend({
    childView: ItemView,
    template: _.template(template)
  });
});
