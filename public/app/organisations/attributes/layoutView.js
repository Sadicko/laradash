define([
  'underscore',
  'nestedLayout',
  'text!./layoutTemplate.html',
  './parts/compositeView'
], function(_, NestedLayout, template, PartsView) {
  return NestedLayout.extend({
    template: _.template(template),
    events: {
      'change #attrName': 'changeValue'
    },
    relations: {
      parts: PartsView
    }
  });
});