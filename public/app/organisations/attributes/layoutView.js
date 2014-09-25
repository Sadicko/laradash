define([
  'nestedLayout',
  'text!./layoutTemplate.html',
  './parts/compositeView'
], function(NestedLayout, template, PartsView) {
  return NestedLayout.extend({
    template: template,
    relations: {
      parts: PartsView
    }
  });
});