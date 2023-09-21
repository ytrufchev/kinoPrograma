cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-splashscreen.SplashScreen",
      "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
      "pluginId": "cordova-plugin-splashscreen",
      "clobbers": [
        "navigator.splashscreen"
      ]
    },
    {
      "id": "monaca-plugin-monaca-core.monaca",
      "file": "plugins/monaca-plugin-monaca-core/www/monaca.js",
      "pluginId": "monaca-plugin-monaca-core"
    },
    {
      "id": "cordova-plugin-admobpro.AdMob",
      "file": "plugins/cordova-plugin-admobpro/www/AdMob.js",
      "pluginId": "cordova-plugin-admobpro",
      "clobbers": [
        "window.AdMob"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-splashscreen": "5.0.2",
    "cordova-custom-config": "5.1.0",
    "monaca-plugin-monaca-core": "3.2.1",
    "cordova-plugin-extension": "1.5.4",
    "cordova-plugin-admobpro": "2.49.0"
  };
});