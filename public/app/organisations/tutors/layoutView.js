define([
  'underscore',
  'nestedLayout',
  'text!./layoutTemplate.html'
], function(_, NestedLayout, template) {
  return NestedLayout.extend({
    template: _.template(template),
    events: {
      'change #name': 'changeValue',
      'change #email': 'changeValue',
      'change #password': 'changeValue'
    },
  });
});
