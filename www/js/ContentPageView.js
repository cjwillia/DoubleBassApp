var ContentPageView = function() {
	
	this.initialize = function() {
		this.$el = $("<div/>");
		this.render();
	}

	this.render = function(c) {
		this.$el.html(this.template());
		this.$el.append(c);
		return this;
	}

	this.initialize();
}