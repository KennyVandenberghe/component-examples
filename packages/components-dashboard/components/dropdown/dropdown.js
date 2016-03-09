Template.componentsDropdown.onCreated(function(){
  dropdown = new Rvn.mdlDropdown({
    items: [
      {
        title: 'record-1'
      },
      {
        title: 'record-2'
      },
      {
        title: 'record-3'
      },
      {
        title: 'record-4'
      }
    ]
  });
});

Template.componentsDropdown.helpers({
  dropdownContext: function(){
    return {
      mdlDropdown: dropdown
    };
  }
});
