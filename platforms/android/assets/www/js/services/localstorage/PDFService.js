var PDFService = function() {

    this.initialize = function() {
        var deferred = $.Deferred();
        // Store PDF links in localstorage
        window.localStorage.setItem("pdfs", JSON.stringify(
            [
                {id: 1, name: "Equipment", path:"assets/pdfs/equipment-setup/EquipmentandSetup.pdf"}
            ]
        ));
        deferred.resolve();
        return deferred.promise();
    }

    this.addViewer = function(viewer) {
        this.viewer = viewer;
    }

    this.displayPdf = function(id, callback) {
        // The callback is executed when the PDF is displayed.
        // The returned promise is resolved when the PDF is closed.
        var deferred = $.Deferred();
        function onClose() {
            deferred.resolve();
        }
        function pdfFail(msg) {
            deferred.reject(msg);
        }
        var v = this.viewer;
        this.findById().done(function(pdf) {
            if(typeof v.displayPdf !== "undefined") {
                var promise = v.displayPdf(pdf, onClose);
                promise.done(callback);
                promise.fail(pdfFail);
            }
            else {
                deferred.reject(v);
            }
        });
        return deferred.promise();
    }

    this.findById = function(id) {

        var deferred = $.Deferred(),
            pdfs = JSON.parse(window.localStorage.getItem("pdfs")),
            pdf = null,
            l = pdfs.length;

        for (var i = 0; i < l; i++) {
            if (pdfs[i].id === id) {
                pdf = pdfs[i];
                break;
            }
        }

        deferred.resolve(pdf);
        return deferred.promise();
    }

    // I didn't write this. probably will never use it
    this.findByName = function (searchKey) {
        var deferred = $.Deferred(),
            pdfs = JSON.parse(window.localStorage.getItem("pdfs")),
            results = pdfs.filter(function (element) {
                var name = element.name;
                return name.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
            });
        deferred.resolve(results);
        return deferred.promise();
    }

}