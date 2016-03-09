Template.componentsSnackbar.events({
  'click .show-snackbar': function(e, tpl) {
     CE.mdlSnackbar.show('Message', 'action');
  }
});
