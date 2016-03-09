Template.componentsActionHeader.onCreated(function(){
  header = new Rvn.mdlHeader({
    openIcon: {
        icon: 'add'
      },
      closeIcon: {
        icon: 'clear'
      }
  });
});
Template.componentsActionHeader.helpers({
  headerContext: function() {
    return {
      mdlHeader: header
    };
  }
});
