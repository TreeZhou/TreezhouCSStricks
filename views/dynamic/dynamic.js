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
