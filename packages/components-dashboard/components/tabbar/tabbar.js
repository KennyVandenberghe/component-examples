Template.componentsTabbar.onCreated(function(){
  tabbar = new Rvn.mdlTabbar({
    items: [
      {
        title: 'tab 1',
        slug: 'tab-1',
        key: 0
      },
      {
        title: 'tab 2',
        slug: 'tab-2',
        key: 1
      },
      {
        title: 'tab 3',
        slug: 'tab-3',
        key: 2
      },
      {
        title: 'tab 4',
        slug: 'tab-4',
        key: 3
      },
    ]
  });
});

Template.componentsTabbar.helpers({
  tabbarContext: function(){
    return {
      mdlTabbar: tabbar
    };
  }
});
