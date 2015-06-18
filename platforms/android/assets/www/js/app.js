// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */
    var service = new PDFService();
    HomeView.prototype.template = Handlebars.compile($("#home-tpl").html());
    EquipmentSetupView.prototype.template = Handlebars.compile($("#equipment-setup-tpl").html());
    LeftHandView.prototype.template = Handlebars.compile($("#left-hand-tpl").html());
    RightHandView.prototype.template = Handlebars.compile($("#right-hand-tpl").html());
    ScalesView.prototype.template = Handlebars.compile($("#scales-tpl").html());
    PDFLoadingView.prototype.template = Handlebars.compile($("#pdf-loading-tpl").html())
    
    service.initialize().done(function(){

        router.addRoute('', function() {
            $("body").html(new HomeView().render().$el);
        });

        router.addRoute('equipment-setup', function() {
            $("body").html(new EquipmentSetupView(service).render().$el);
        });

        router.addRoute('left-hand', function() {
            $("body").html(new LeftHandView(service).render().$el);
        });

        router.addRoute('right-hand', function() {
            $("body").html(new RightHandView(service).render().$el);
        });

        router.addRoute('scales', function() {
            $("body").html(new ScalesView(service).render().$el);
        });

        router.addRoute('viewer/:id', function(id) {
            var onOpen = function() {
                $("body").html("opened");
            }
            var onClose = function() {
                $("body").html("closed");
            }
            var onFail = function() {
                $("body").html("failed");
            }
            console.log("pdf loading");
            $("body").html(new PDFLoadingView(id, service, onOpen, onClose, onFail));
        });
    
        router.start();        
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
        var pdf = cordova.plugins.SitewaertsDocumentViewer;
        var viewer = new PDFViewer();
        viewer.initialize(pdf);
        service.addViewer(viewer);

    }, false);

    /* ---------------------------------- Local Functions ---------------------------------- */

}());