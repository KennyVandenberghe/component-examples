Template.componentsHeader.events({
  'click .logout': function(e, tpl) {
    e.preventDefault();
    Meteor.logout();
  }
});
