Package.describe({
  name: 'components-app-ui',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  var c = 'client',
      s = 'server',
      cs = [c, s];

  api.use([
    'rvn:light',
    'templating'
  ], c);

  api.use([
    'components-core'
  ], cs);

  api.addFiles([
    'components/layout.html',
    'components/layout.js',
    'components/head.html',
    'components/header.html',
    'components/header.js',
    'client.js'
  ], c);

  api.export('CE');
});
