define([
  'underscore',
  'nestedLayout',
  'text!./layoutTemplate.html',
  './parts/compositeView'
], function(_, NestedLayout, template, PartsView) {
  return NestedLayout.extend({
    template: _.template(template),
    relations: {
      parts: PartsView
    }
  });
});