var PDFViewer = function() {

	this.initialize = function(viewer) {
		this.viewer = viewer;
		return this;
	}

    this.displayPdf = function(pdf, onClose) {
    	var deferred = $.Deferred();
        var type = "application/pdf";
        var options = {
            title: pdf.name
        }

        function missingApp(appId, installer) {
	    	if(confirm("Do you want to install the free PDF Viewer application " + appId + " for Android?")) {
	    		installer(function() {
	    			if(confirm("App installed! View document?")) {
	    				this.viewer.viewDocument(pdf.path, type, options, onShow, onClose, missingApp, onError);
	    			}
	    		});
	    	}
        }

        function onShow() {
        	deferred.resolve();
        }

        function onImpossible() {
        	deferred.reject("Cannot open PDFs on this device.");
        }

        function onError() {
        	deferred.reject("There was an error, sorry. Please try again.");
        }

        function display() {
            this.viewer.viewDocument(pdf.path, type, options, onShow, onClose, missingApp, onError);
        }

        this.viewer.canViewDocument(pdf.path, type, options, display, missingApp, onImpossible, onError);
        return deferred.promise();
    }

}