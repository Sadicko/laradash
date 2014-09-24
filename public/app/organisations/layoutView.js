define([
  'underscore',
  'nestedLayout',
  'text!./layoutTemplate.html',
  './tutors/compositeView',
  './attributes/compositeView',
  './learners/compositeView'
], function(_, NestedLayout, template, TutorsView, AttrsView, LearnersView) {
  return NestedLayout.extend({
    template: _.template(template),
    relations: {
      'tutors': TutorsView,
      'attrs': AttrsView,
      'learners': LearnersView
    }
  });
});
