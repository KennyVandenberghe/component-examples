Template.componentsDashboard.onCreated(function(){
  actionPicker = new Rvn.mdlActionPicker({
    mainItem:
      {
        title: 'Lege brief',
        url: '#',
        openIcon: 'description',
        closedIcon: 'add',
        color: '#64B242'
      },

    subItems: [
      {
        title: 'Antwoordstrookje',
        url: '#',
        icon: 'message',
        color: '#12AE9A'
      },
      {
        title: 'Fotoalbum',
        url: '#',
        icon: 'camera',
        color: '#5016B8'
      },
      {
        title: 'Bijlage',
        url: '#',
        icon: 'attachment',
        color: '#B216B8'
      },
      {
        title: 'Open',
        url: '#',
        icon: 'folder',
        color: '#000000'
      }
    ]
  });
});
Template.componentsDashboard.helpers({
  actionPickerContext: function() {
    return {
      mdlActionPicker: actionPicker
    };
  }
});
