(function(jj){
	if(jj) return;
	window.jj = {
		link: {
			//jj.link.html('./index.html', '_blank', {parameter: 'ver/release_0.4.md'})
			html: function(index, target, obj){
				link(obj.parameter, target);
			}
		}
	};
})(window.jj);

function link(page, target){
	if(page.search(/(\.\/|http:|https:)/) < 0){
		page = '/jik-ji-Binder/' + page.replace(/\.md$/, '');
	}
	if(!target || target === '_self'){
		window.location.href = page;
	}else{
		window.open(page, target);
	}
}