Package.describe({
  name: 'paypal:bootstrap-accessibility-plugin',
  summary: 'Accessibility Plugin for Bootstrap 3',
  version: '{{version}}'
});

Package.onUse(function(api) {
  api.use('ecmascript');
  api.use('jquery');
  api.use('twbs:bootstrap');
  api.addFiles([
    'plugins/css/bootstrap-accessibility.css',
    'plugins/js/bootstrap-accessibility.js'
  ], 'client');
});