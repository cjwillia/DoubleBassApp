// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */
    HomeView.prototype.template = Handlebars.compile($("#home-tpl").html());
    EquipmentSetupView.prototype.template = Handlebars.compile($("#equipment-setup-tpl").html());
    LeftHandView.prototype.template = Handlebars.compile($("#left-hand-tpl").html());
    RightHandView.prototype.template = Handlebars.compile($("#right-hand-tpl").html());
    ScalesView.prototype.template = Handlebars.compile($("#scales-tpl").html());
    
    router.addRoute('', function() {
        $("body").html(new HomeView().render().$el);
    });

    router.addRoute('equipment-setup', function() {
        $("body").html(new EquipmentSetupView().render().$el);
    });

    router.addRoute('left-hand', function() {
        $("body").html(new LeftHandView().render().$el);
    });

    router.addRoute('right-hand', function() {
        $("body").html(new RightHandView().render().$el);
    });

    router.addRoute('scales', function() {
        $("body").html(new ScalesView().render().$el);
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