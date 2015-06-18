var PDFLoadingView = function(id, service, onOpen, onClose, onFail) {

	this.initialize = function() {
		this.$el = $("<div/>");
		this.pdf_id = id;
		this.render();
	}

	this.render = function() {
		this.$el.html(this.template());
		var promise = service.displayPdf(id, onOpen)
		promise.done(onClose);
		promise.fail(onFail);
		return this;
	}

	this.initialize(id);
}