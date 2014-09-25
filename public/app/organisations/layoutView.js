define([
  'nestedLayout',
  'text!./layoutTemplate.html',
  './tutors/compositeView',
  './attributes/compositeView',
  './learners/compositeView'
], function(NestedLayout, template, TutorsView, AttrsView, LearnersView) {
  return NestedLayout.extend({
    template: template,
    relations: {
      'tutors': TutorsView,
      'attrs': AttrsView,
      'learners': LearnersView
    }
  });
});
