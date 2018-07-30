$(function(){
	$("#navpanel").html($("#tpl_navpanel").html());

	var router = new Router({
		container: '#container'
	});
	router.push({
		url: "/",
		render: function(){
			return $("#tpl_static").html();
		}
	});
	require("./static/static.js");
	require("./loading/loading.js");
	require("./dynamic/dynamic.js");
	require("./others/others.js");

	router.setDefault("/").init();

})
