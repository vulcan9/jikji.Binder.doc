
// legacy 문서 지원하기 위한 코드
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
	var isURL = (page.search(/(\.\/|http:|https:)/) > -1);
	if(!isURL){
		page = '/jik-ji-Binder/' + page.replace(/\.md$/, '');
	}
	if(!target || target === '_self'){
		window.location.href = page;
	}else{
		if(isURL && window.nw && window.nw.Shell){
			// 기본 브라우져로 열기
			window.nw.Shell.openExternal(page);
		}else{
			window.open(page, target);
		}
	}
}

// 한글 메뉴는 적용되지 않으므로 도적으로 생성해 준다.
// id="commonMenu"
$( document ).ready(function() {
	if(parent !== window && parent.currentVersion){
		$('#currentVersion').html(parent.currentVersion);
	}else{
		$('#currentVersion').remove();
	}

	var menu = [
		//{type: 'link', target: '', label: 'Home', url: '/'},
		{label: 'API Reference'},
		{type: 'link', target: '', label: 'version 0.5.x', url: 'ver/API.0.5.md'},
		{type: 'link', target: '', label: 'version 0.4.x', url: 'ver/API.0.4.md'},
		{type: 'link', target: '', label: 'version 0.3.x', url: 'ver/API.0.3.md'},
		{type: 'link', target: '', label: 'version 0.2.x', url: 'ver/API.0.2.md'},
		{label: 'Guide'},
		{type: 'link', target: '', label: 'Html에서 API 사용하기', url: 'guide/guideHtml.md'},
		{type: 'link', target: '', label: 'Flash에서 API 사용하기', url: 'guide/guideFlash.md'},
		{type: 'link', target: '', label: '녹음 기능 참고사항', url: 'guide/guideRecord.md'},
		{type: 'link', target: '', label: '분권, 통권 구분하여 링크 걸기', url: 'guide/guideBookbinding.md'},
		{type: 'link', target: '_blank', label: '새로운 APP ID 지정하기', url: 'https://github.com/vulcan9/jik-ji-Binder/wiki/Jik ji Binder 새로운 APP ID 지정하기 (xxx_cdbook_cd_appid 버전)'},
		{label: '추가/변경 사항'},
		{type: 'link', target: '', label: 'version 0.4', url: 'ver/release_0.4.md'},
		{type: 'link', target: '', label: 'version 0.3', url: 'ver/release_0.3.md'},
		{type: 'link', target: '', label: 'version 0.2', url: 'ver/release_0.2.md'},
		{label: 'Migration'},
		{type: 'link', target: '', label: 'version 0.2', url: 'ver/migration_0.2.md'},
		{type: 'link', target: '', label: 'version 0.1', url: 'ver/migration_0.1.md'},
		{label: 'Release Note'},
		{type: 'link', target: '', label: 'Native Version', url: 'ver/history.md'},
		{type: 'link', target: '', label: 'Web Version', url: 'ver/history_web.md'}
	];
	var dom = $('#commonMenu');
	for(var i=0; i<menu.length; ++i){
		var item = menu[i];
		var html;
		if(item.type){
			js = "javascript:void(" + item.type + "('" + item.url + "', '" + item.target + "'));";
			html = '<div class="tag-h3"><a href="' + js + '">' + item.label + '</a></div>';
		}else{
			html = '<div class="tag-h1">' + item.label + '</div>';
		}
		dom.append($(html));
	}
});
