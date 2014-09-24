define([
  'underscore',
  'nestedLayout',
  'text!./layoutTemplate.html'
], function(_, NestedLayout, template) {
  return NestedLayout.extend({
    template: _.template(template),
  });
});
