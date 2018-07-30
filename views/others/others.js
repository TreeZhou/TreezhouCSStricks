router.push({
	url: "/others",
	render: function() {
		return $("#tpl_others").html();
	}.bind(this),
	bind: function() {

	}
});