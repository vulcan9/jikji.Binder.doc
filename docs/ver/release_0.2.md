# Release Note 0.2

--------------------------------------------
#### 0.2 버전에서 추가된 기능
--------------------------------------------

##### 녹음 API 추가함
* `jj.record` 객체 참고 (<a href="javascript:jj.link.html('./index.html', '_self', {parameter: 'ver/API.md'});" >링크</a>)

##### SWF를 HTML에 삽입하는 Loader API 추가함
* swf를 문서에 삽입해주는 `jj.newSWF` API를 참고. (<a href="javascript:jj.link.html('./index.html', '_self', {parameter: 'guide/guideFlash.md'});" >링크</a>)
* Loader API를 이용하여 swf를 문서에 삽입할때 다음 스크립트를 로드하지 않아도 됨.
```
<script type="text/javascript" src="/viewer/flash/swfobject.js">사용안함</script>
<script type="text/javascript" src="/viewer/flash/jjFlash.js">사용안함</script>
```

##### window 관리 메서드 추가됨
- jj.getWindows (windowID) : 자신의 창(frame)에 있는 window 객체 또는 리스트
- jj.getRootWindow (frameID) : 창(frame) 안에서 컨텐츠 iframe을 가진 최상위 window 객체
- jj.eachWindows (callback) : 자신의 창(frame)에 있는 window 객체 리스트 순환하면서 callback 함수 실행

##### jj.link를 사용하지 않은 링크 연결도 정상 작동하도록 함
* window.open에 의한 링크 연결 허용
```
<button onclick="window.open('./index1.html', '_blank')">window.open에 의한 링크</button>
```
* `<a>` 태그에 의한 링크 연결 허용
```
<a href="./index1.html" target="_blank">a 태그에 의한 링크</a>
```
* window.location 객체에 의한 링크 허용

위 3가지 형태의 링크 연결도 jj.link 계열 메서드와 같은 기능으로 동작하지만,
Binder API를 사용하면 새로운 문서가 연결될때 문서가 열리는 창에 대한 옵션을 설정하거나 새로운 문서에 특정 값을 전달할 수가 있다.


--------------------------------------------
#### 버그
--------------------------------------------

* config.json 파일에서 fullscreen=true로 설정했을 경우 런타임에 toggle fullscreen API가 정상 동작하지 않는 버그 있음



