var jj = (function(jj){
	if(jj) return;
	jj = {
		link: {
			//jj.link.html('./index.html', '_blank', {parameter: 'ver/release_0.4.md'})
			html: function(index, target, obj){
				var page = '/jik-ji-Binder/' + obj.parameter;
				window.open(page, (target || '_self'));
			}
		}
	};
	return jj;
})(window.jj);