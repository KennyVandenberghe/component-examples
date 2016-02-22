Template.componentsLayout.helpers({
  showMask: function(){
    return Session.get('showMask');
  }
});

Template.componentsLayout.events({
  'click .logout': function(e, tpl){
    e.preventDefault();
    Meteor.logout();
  }
});
