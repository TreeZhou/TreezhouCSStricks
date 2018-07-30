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
	router.push({
	url: "/static",
	render: function(){
		return $("#tpl_static").html();
	}
});
	router.push({
	url: "/loading",
	render: function(){
		return $("#tpl_loading").html();
	}
});
	router.push({
	url: "/dynamic",
	render: function(){
		return $("#tpl_dynamic").html();
	}.bind(this),
	bind:function(){
		$('a[data-test]').click(function() {
			var anim = $(this).attr('data-test');
			minidemo(anim);
		});

		var wait;
		function minidemo(x) {
			$('#timing').removeClass();
			window.setTimeout(function() {
				$('#timing').addClass(x);
			}, 1);

			clearTimeout(wait);
			wait = window.setTimeout(function() {
				$('#timing').removeClass()
			}, 1500);
		}
	}
});

	router.push({
	url: "/others",
	render: function() {
		return $("#tpl_others").html();
	}.bind(this),
	bind: function() {

	}
});

	router.setDefault("/").init();

})
