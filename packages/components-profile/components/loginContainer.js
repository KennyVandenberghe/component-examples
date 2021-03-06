Template.componentsLogin.onCreated(function(){
  Session.setDefault('showLogin', true);
});

Template.componentsLogin.helpers({
  showLogin: function() {
    return Session.get('showLogin');
  }
});

Template.componentsLogin.events({
  'click .register': function(e, tpl) {
    e.preventDefault();
    var email = $('[name=email]').val();
    var password = $('[name=password]').val();
    console.log(email, password);
    Accounts.createUser({
      email: email,
      password: password
    });
    Router.go('/');
  },
  'click .login': function(e, tpl){
    e.preventDefault();
    var email = $('[name=email]').val();
    var password = $('[name=password]').val();
    Meteor.loginWithPassword(email, password);
  },
  'click .switch': function(e, tpl){
    Session.set('showLogin', !Session.get('showLogin'));
  }
});
