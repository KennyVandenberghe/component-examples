Template.componentsList.onCreated(function(){
    list = new Rvn.mdlList({
    items: [
      {
        title: 'first record'
      },
      {
        title: 'first record',
        icon: 'person'
      },
      {
        title: 'first record',
        icon: 'person',
        action: {
          icon: 'person',
          url: '/'
        }
      },
      {
        title: 'first line',
        subTitle: 'second line',
        icon: 'person',
        action: {
          icon: 'person',
          url: '/'
        }
      }
    ]
  });
});
Template.componentsList.helpers({
  listContext: function() {
    return {
      mdlList: list
    };
  }
});
