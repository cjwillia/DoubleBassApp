cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.apache.cordova.dialogs/www/notification.js",
        "id": "org.apache.cordova.dialogs.notification",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.statusbar/www/statusbar.js",
        "id": "org.apache.cordova.statusbar.statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "file": "plugins/de.sitewaerts.cordova.documentviewer/www/sitewaertsdocumentviewer.js",
        "id": "de.sitewaerts.cordova.documentviewer.SitewaertsDocumentViewer",
        "clobbers": [
            "cordova.plugins.SitewaertsDocumentViewer",
            "SitewaertsDocumentViewer"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.apache.cordova.dialogs": "0.3.0",
    "org.apache.cordova.statusbar": "0.1.10",
    "de.sitewaerts.cordova.documentviewer": "0.2.0"
}
// BOTTOM OF METADATA
});