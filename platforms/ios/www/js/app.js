// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */
    HomeView.prototype.template = Handlebars.compile($("#home-tpl").html());
    EquipmentSetupView.prototype.template = Handlebars.compile($("#equipment-setup-tpl").html());
    router.addRoute('', function() {
        $("body").html(new HomeView().render().$el);
    });

    router.addRoute('equipment-setup', function() {
        $("body").html(new EquipmentSetupView().render().$el);
    });
    
    router.start();

    /* --------------------------------- Event Registration -------------------------------- */

    // Modify alert for deviceready event to be native
    document.addEventListener('deviceready', function() {
        StatusBar.overlaysWebView(false);
        StatusBar.backgroundColorByHexString("#FFFFFF");
        StatusBar.styleDefault();
        if(navigator.notification) {
            window.alert = function(message) {
                navigator.notification.alert(
                    message,
                    null,
                    "Double Bass",
                    "OK"
                );
            }
        }
    }, false);

    /* ---------------------------------- Local Functions ---------------------------------- */

}());