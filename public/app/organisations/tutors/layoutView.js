define([
  'nestedLayout',
  'text!./layoutTemplate.html'
], function(NestedLayout, template) {
  return NestedLayout.extend({
    template: template,
  });
});
