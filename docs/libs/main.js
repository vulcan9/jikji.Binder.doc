(function(jj){
	if(jj) return;
	window.jj = {
		link: {
			//jj.link.html('./index.html', '_blank', {parameter: 'ver/release_0.4.md'})
			html: function(index, target, obj){
				var page = '/jik-ji-Binder/' + obj.parameter.replace(/\.md$/, '');
				if(!target || target === '_self'){
					window.location.href = page;
				}else{
					window.open(page, target);
				}
			}
		}
	};
})(window.jj);