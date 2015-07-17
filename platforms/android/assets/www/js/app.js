// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */
    HomeView.prototype.template = Handlebars.compile($("#home-tpl").html());
    EquipmentSetupView.prototype.template = Handlebars.compile($("#equipment-setup-tpl").html());
    LeftHandView.prototype.template = Handlebars.compile($("#left-hand-tpl").html());
    RightHandView.prototype.template = Handlebars.compile($("#right-hand-tpl").html());
    ScalesView.prototype.template = Handlebars.compile($("#scales-tpl").html());
    ContentPageView.prototype.template = Handlebars.compile($("#content-page-tpl").html());

    var service = new MemoryService();
    
    service.initialize().done(function(){
        setRoutes(router);       
    });

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