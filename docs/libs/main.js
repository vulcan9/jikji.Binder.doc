
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
	if(page.search(/(\.\/|http:|https:)/) < 0){
		page = '/jik-ji-Binder/' + page.replace(/\.md$/, '');
	}
	if(!target || target === '_self'){
		window.location.href = page;
	}else{
		window.open(page, target);
	}
}

// 한글 메뉴는 적용되지 않으므로 도적으로 생성해 준다.
// id="commonMenu"
(function(){
	var menu = [
		{type: 'link', target: '', label: 'Home', url: '/'},
		{label: 'API'},
		{type: 'link', target: '', label: 'API Reference 0.5.x', url: 'ver/API.md'},
		{type: 'link', target: '', label: 'API Reference 0.4.x', url: 'ver/API.0.4.md'},
		{type: 'link', target: '', label: 'API Reference 0.3.x', url: 'ver/API.0.3.md'},
		{type: 'link', target: '', label: 'API Reference 0.2.x', url: 'ver/API.0.2.md'},
		{label: 'Guide'},
		{type: 'link', target: '', label: 'Html에서 API 사용하기', url: 'guide/guideHtml.md'},
		{type: 'link', target: '', label: 'Flash에서 API 사용하기', url: 'guide/guideFlash.md'},
		{type: 'link', target: '', label: '녹음 기능 참고사항', url: 'guide/guideRecord.md'},
		{type: 'link', target: '', label: '분권, 통권 구분하여 링크 걸기', url: 'guide/guideBookbinding.md'},
		{type: 'link', target: '_blank', label: '새로운 APP ID 지정하기', url: 'https://github.com/vulcan9/jik-ji-Binder/wiki/Jik-ji-Binder-%EC%83%88%EB%A1%9C%EC%9A%B4-APP-ID-%EC%A7%80%EC%A0%95%ED%95%98%EA%B8%B0'},
		{label: 'Release'},
		{type: 'link', target: '', label: 'Release Note (ver 0.4)', url: 'ver/release_0.4.md'},
		{type: 'link', target: '', label: 'Release Note (ver 0.3)', url: 'ver/release_0.3.md'},
		{type: 'link', target: '', label: 'Release Note (ver 0.2)', url: 'ver/release_0.2.md'},
		{label: 'Migration'},
		{type: 'link', target: '', label: 'Migration (ver 0.2)', url: 'ver/migration_0.2.md'},
		{type: 'link', target: '', label: 'Migration (ver 0.1)', url: 'ver/migration_0.1.md'}
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
})();
/*
<div style="padding-bottom: 0.3em;border-bottom: 1px solid #eaecef;">
  <div class="tag-h1"><a href="javascript:void(link('/'));">Home</a></div>
  <div class="tag-h1">API</div>
  <div class="tag-h3"><a href="javascript:void(link('ver/API.md'));">API Reference 0.5.x</a></div>
  <div class="tag-h3"><a href="javascript:void(link('ver/API.0.4.md'));">API Reference 0.4.x</a></div>
  <div class="tag-h3"><a href="javascript:void(link('ver/API.0.3.md'));">API Reference 0.3.x</a></div>
  <div class="tag-h3"><a href="javascript:void(link('ver/API.02.md'));">API Reference 0.2.x</a></div>
  <div class="tag-h1">Guide</div>
  <div class="tag-h3"><a href="javascript:void(link('guide/guideHtml.md'));">Html에서 API 사용하기</a></div>
  <div class="tag-h3"><a href="javascript:void(link('guide/guideFlash.md'));">Flash에서 API 사용하기</a></div>
  <div class="tag-h3"><a href="javascript:void(link('guide/guideRecord.md'));">녹음 기능 참고사항</a></div>
  <div class="tag-h3"><a href="javascript:void(link('guide/guideBookbinding.md'));">분권, 통권 구분하여 링크 걸기</a></div>
  <div class="tag-h3"><a href="javascript:void(link('https://github.com/vulcan9/jik-ji-Binder/wiki/Jik-ji-Binder-%EC%83%88%EB%A1%9C%EC%9A%B4-APP-ID-%EC%A7%80%EC%A0%95%ED%95%98%EA%B8%B0'));">새로운 APP ID 지정하기</a></div>
  <div class="tag-h1">Release</div>
  <div class="tag-h3"><a href="javascript:void(link('ver/release_0.4.md'));">Release Note (ver 0.4)</a></div>
  <div class="tag-h3"><a href="javascript:void(link('ver/release_0.3.md'));">Release Note (ver 0.3)</a></div>
  <div class="tag-h3"><a href="javascript:void(link('ver/release_0.2.md'));">Release Note (ver 0.2)</a></div>
  <div class="tag-h1">Migration</div>
  <div class="tag-h3"><a href="javascript:void(link('ver/migration_0.2.md'));">Migration (ver 0.2)</a></div>
  <div class="tag-h3"><a href="javascript:void(link('ver/migration_0.1.md'));">Migration (ver 0.1)</a></div>
</div>
*/