# API Reference
<web>
web 버전 사용에 대한 내용은 <a href="javascript:void(jj.link.html('./index.html', '_blank', {parameter: 'ver/release_0.4.md'}));">Release Note(ver 0.4)</a> 문서를 참고 하세요.
</web>

+ [콘텐츠의 설정](#콘텐츠의 설정)
+ [window.jj 객체](#window.jj 객체)
    + [window.jj의 속성](#window.jj의 속성)
        + jj._global <partialweb></partialweb> - 비공개
        + jj._id <notweb></notweb> - 비공개
        + jj._frame_id <notweb></notweb> - 비공개
        + jj.parameter
    + [window.jj의 메서드](#window.jj의 메서드)
        + jj.parent () : window 객체
        + jj.opener () : window 객체
        + jj.getRootWindow (frameID) : window 객체
        + jj.getContainerWindow (frameID) : window 객체
        + jj.getWindows (windowID) : window 객체 또는 리스트 <notweb></notweb>
        + jj.eachWindows (callback) : Boolean <notweb></notweb>
        + jj.newSWF (interfaceFunctionName) : Loader 객체
+ [window.jj.link 객체](#window.jj.link 객체)
    + jj.link.html (url, target, option)
    + jj.link.ebook (url, target, option)
    + jj.link.image (url, target, option)
    + jj.link.pdf (url, target, option)
    + jj.link.audio (url, target, option)
    + jj.link.video (url, target, option)
    + jj.link.flash (url, target, option)
+ [window.jj.event 객체](#window.jj.event 객체)
    + jj.event.addListener (eventType, handler)
    + jj.event.removeListener (eventType, handler)
    + jj.event.removeAllListeners (eventType)
    + jj.event.message (targetWindow, data)
+ [window.jj.native 객체](#window.jj.native 객체)
    + jj.native.close (closeData)
    + jj.native.toggleFullscreen ()
    + jj.native.explorer (pathString) <notweb></notweb>
    + jj.native.exe (pathString) <notweb></notweb>
    + jj.native.download (pathString, callback)
    + jj.native.zipDownload (config, callback) <notweb></notweb>
    + jj.native.zip (config, callback) <notweb></notweb>
+ [window.jj.io 객체](#window.jj.io 객체) <notweb></notweb>
    + jj.io.read (pathString, callback)
    + jj.io.write (pathString, content, callback)
    + jj.io.copy (sourcePath, destPath, callback)
    + jj.io.remove (pathString, callback)
+ [window.jj.record 객체](#window.jj.record 객체) <notweb></notweb>
    + jj.record.isRunning () : Boolean
    + jj.record.start (success, fail, option)
    + jj.record.stop ()

-------------------------------------------------------------
jik-ji Binder (이하 binder)는 자유로운 `콘텐츠 이동`을 위한 링크 기능 및 페이지 `Viewer` 객체를 제공합니다.
Binder API는 콘텐츠가 로드될때 자동으로 생성되므로 문서내의 어떤 `<script>`태그 안에서도 사용할 수 있습니다.
대략적인 기능은 다음과 같습니다.

- 새창에서 콘텐츠 열기 및 하이퍼 링크
- Image, Video, Audio 파일 연결
- swf 파일 열기 (flash player 설치 필요 없음)
- pdf 파일 열기 (pdf reader 설치 필요 없음)
- ebook 열기 (ebook 뷰어 내장됨)
- exe 파일 실행
- 다양한 확장자의 파일을 기본 응용 프로그램으로 열기
- 폴더 열기
- 파일 복사
- FullScreen 기능
- window 창 제어 기능 (크기, 위치...)
- 열려있는 window 창끼리 통신 및 제어
- 녹음 기능

<web>웹 페이지에서 API를 사용하려면 다음 JS파일을 로드하여야 합니다.
</web>
```
<script type="text/javascript" src="jquery.min.js"></script>
<script type="text/javascript" src="binder_web.min.js"></script>
```

<a name="콘텐츠의 설정"></a>

-------------------------------------------------------------
### 콘텐츠의 설정
-------------------------------------------------------------

콘텐츠 파일은 다음 경로에 넣어 둡니다.
```
/bin/resource 폴더
```
위 경로와 같이 resource 폴더 아래에 콘텐츠 파일을 넣어두었다면 다음과 같은 경로로 API에서 사용할 수 있습니다.
`/bin` 폴더를 루트(`/`) 폴더로 인식하기 때문에 `/bin` 폴더명은 생략해야 합니다. 

```
예) /bin/resource 폴더 아래 content01/index.html 파일이 있는 경우

// "/resource" 루트 경로 표기는  /bin/resource폴더를 가르킨다.
"/resource/content01/index.html"

// 현재 HTML 에서 상대 경로
"./content01/index.html", "../content01/index.html", "content01/index.html"
```
    
따라서, API 호출할때 다음과 같이 적용할 수 있습니다.
```
예) index.html 파일을 새창에서 열기

window.jj.link.html('./content01/index.html');
window.jj.link.html('/resource/content01/index.html');
```

#### 콘텐츠 환경 설정 파일
resource 폴더에 위치한 환경 설정 파일에 첫번째 로드할 콘텐츠를 지정합니다.
환경 설정 파일 이름은 config.json 이며, 다음 경로에 설치합니다.
```
/resource/config.json
```
환경 설정 파일에는 `jj.link.html()` 메서드의 옵션값을 모두 지정할 수 있습니다.
```
// config.json 환경 설정 파일
{
    "main": "./index.html",
    "width": 800,
    "height": 600,
    "maximize": true,
    "resizable": true
}
```
- main : 첫번째로 보여줄 콘텐츠 페이지 (resource 폴더에서 상대 경로). html 또는 swf 파일 경로를 지정.
- 나머지 값들은 `jj.link.html()` 메서드 참고

<a name="window.jj 객체"></a>

-------------------------------------------------------------
### window.jj 객체
-------------------------------------------------------------

binder의 모든 API는 window.jj 객체를 통해 접근할 수 있습니다.
window.jj 객체는 페이지가 로드될때 자동으로 생성 됩니다. 따라서 html 페이지에서 binder가 제공하는 API를 사용할 수 있습니다.
다음 스크립트와 같이 jj 객체를 사용합니다.

```
/* jj 또는 (target window 객체).jj */
console.log(jj);
```

<a name="window.jj의 속성"></a>

#### window.jj의 속성
-------------------------------------------------------------

- ###### jj._global <partialweb></partialweb> - 비공개
Root Window 창이 가진 전역 데이터를 각 창에서 _global 속성으로 참조합니다.
    - isDevelopment <notweb></notweb> : (Boolean) 디버깅 모드인지 판별
    - path : (Object) 경로 데이터
    - config <notweb></notweb> : (Object) resource에 대한 환경 설정 파일 데이터 (`config.json` 파일 내용)
    - manifest <notweb></notweb> : (Object) Application에 대한 정보

- ###### jj._id <notweb></notweb> - 비공개
자신의 창에 대한 정보를 구별하는 식별자.

- ###### jj._frame_id <notweb></notweb> - 비공개
자신이 속한 Window 객체에 대한 식별자

- ##### jj.parameter
링크 관련 메서드를 호출할때 지정한 option에 parameter 항목이 설정되면, 이 값을 새창에서 jj.parameter 로 참조할 수 있습니다.
```
// 새문서 호출하기
jj.link.html('링크 주소', '_blank', {parameter:'전달값'});
```
로드되는 새문서에서는 이 값을 받을 수 있습니다. parameter로 전달되는 값은 문자열 뿐만아니라 Object도 전달할 수 있습니다.
```
// parent 창에서 링크 메서드의 option에 의해 전달된 값
// '전달값'이 출력됨
console.log(jj.parameter);
```

<a name="window.jj의 메서드"></a>

#### window.jj의 메서드
-------------------------------------------------------------

- ##### jj Binder window 객체

- ##### jj.parent() : window 객체
자신을 링크 호출한 window 객체. 만약 `parent` 창이 이미 닫혔거나 또는 IFrame을 가리키고 있는 경우 message를 정확하게 전달하기 위해서 다음 코드를 참고하세요.
```
// parent window가 이미 닫힌 경우임
if(!jj.parent()) return;
```
```
// parent에 iframe이 있는 경우일 수도 있다.
var frameID = jj.parent().jj._frame_id;
var target = jj.getRootWindow(frameID);
if(target) jj.event.message(target, 'POPUP 창닫힘');
```

- ##### jj.opener() : window 객체
자신이 속한 창을 호출한 부모창의 root window 객체. 만약 `opener` 창이 이미 닫혔거나 또는 IFrame을 가리키고 있는 경우 message를 정확하게 전달하기 위해서 다음 코드를 참고하세요.
```
if(jj.opener()) jj.event.message(jj.opener(), 'POPUP 창닫힘');
```

- ##### jj.getRootWindow(frameID) : window 객체
frameID를 가진 창(frame) 안에서 컨텐츠를 로드하는 iframe을 가진 최상위 window 객체.
frameID는 찾고자하는 window 객체의 `jj._frame_id` 값과 같습니다. 생략하면 자신의 jj._frame_id 값이 사용됩니다.
```
// [Window 창] 인스턴스 관리 map
var win = jj.getRootWindow(jj._frame_id);
// 자신이 속한 창을 찾을 경우에는 생략 가능
var win = jj.getRootWindow();
```

- ##### jj.getContainerWindow(frameID) : window 객체
frameID를 가진 창(frame) 안에서 컨텐츠를 로드하는 iframe의 window 객체 (iframe.contentWindow).
frameID는 찾고자하는 window 객체의 `jj._frame_id` 값과 같습니다. 생략하면 자신의 jj._frame_id 값이 사용됩니다.
```
// [Window 창] 인스턴스 관리 map
var win = jj.getContainerWindow(jj._frame_id);
// 자신이 속한 창을 찾을 경우에는 생략 가능
var win = jj.getContainerWindow();
```

- ##### jj.getWindows(windowID) : window 객체 또는 리스트 <notweb></notweb>
자신의 창(frame)에 있는 window 객체 또는 리스트.
windowID는 찾고자하는 window 객체의 `jj._id` 값과 같습니다. 생략하면 자신의 jj._id 값이 사용됩니다.
```
// 데이터 관리 map
var map = jj.getWindows();
var info = map[jj._id];
// window 객체 참조
var winObj = info.window;
```
다음과 같이 단축하여 사용할 수도 있습니다.
```
var info = jj.getWindows(jj._id);
// window 객체 참조
var winObj = info.window;
```

- ##### jj.eachWindows(callback) : Boolean <notweb></notweb>
자신의 창(frame)에 있는 window 객체 리스트(`jj.getWindows`)를 순환하면서 callback 함수를 실행 합니다.
callback 함수가 true를 리턴하면 바로 loop 종료됩니다.
```
// callback 함수 형식
function callback(win){
        return false;
}
```

- ##### jj.newSWF(interfaceFunctionName) : Loader 객체
Flash 사용 Guide 문서 참고. (<a href="javascript:jj.link.html('./index.html', '_self', {parameter: 'guide/guideFlash.md'});" >링크</a>)

<a name="window.jj.link 객체"></a>

-------------------------------------------------------------
### window.jj.link 객체
-------------------------------------------------------------

링크 관련 메서드를 이용하여 컨텐츠를 호출하면 일반 브라우저가 아닌 Binder 안에서 새창 또는 자신의 창으로 컨텐츠가 열립니다.
`jj.link.html` 메서드를 제외한 나머지 메서드들은 해당 콘텐츠 형식에 대한 내장된 뷰어를 통해 컨텐츠를 보여줍니다.

- ##### jj.link.html(url, target, option)
웹 페이지(html) 컨텐츠를 호출합니다.
```
jj.link.html('./content01/index.html', '_blank', option);
```
`target`을 지정하지 않은 경우 경우에 따라 다음 두가지 방식으로 동작합니다.
    + 링크 주소가 http:// 로 시작되는 경우 `OS의 기본 브라우저`에서 열립니다.
    + 상대경로를 포함한 나머지 경우에는 새창에서 열립니다. 
    
- ##### jj.link.ebook(url, target, option)
ebook 컨텐츠를 내장된 epub 뷰어를 통해 호출합니다. ( `target`을 생략한 경우 새창에서 열립니다. )
통권 ebook과 분권(default) ebook을 구별하여 호출할 수 있는데 `bookBinding` 구분자를 파라메터로 넘겨주면 됩니다.
경로 뒤에 붙는 url query 문의 key/value 값은 option 객체에 포함시켜 전달할 수 있습니다.
(<a href="javascript:jj.link.html('./index.html', '_blank', {parameter: 'guide/guideBookbinding.md'});" >분권, 통권 폴더 구조 보기</a>)

    ```
    // epub 파일을 압축 해지한 폴더 경로를 넘겨줍니다. (/resource/ebook/)
    // 마지막에 폴더 경로 뒤 슬래시("/")는 반듯시 붙여 줍니다.
    jj.link.ebook('/resource/ebook/?page=3', '_blank', option);

    // 페이지 지정 인자를 옵션에 포함시켜 전달할 수도 있습니다.
    jj.link.ebook('/resource/ebook/', '_blank', {page:3, bookBinding:false});

    // 통권인 경우 : &bookBinding=true 를 설정해 주어야 함
    jj.link.ebook('/resource/ebook/?page=3&bookBinding=true', '_blank');
    ```


- ##### jj.link.image(url, target, option)
이미지(.png, .jpg, .gif) 파일을 내장된 뷰어를 통해 호출합니다. ( `target`을 생략한 경우 새창에서 열립니다. )
```
jj.link.image('./content01/이미지.png', '_blank', option);
```

- ##### jj.link.pdf(url, target, option)
pdf 파일을 내장된 뷰어를 통해 호출합니다. ( `target`을 생략한 경우 새창에서 열립니다. )
```
jj.link.pdf('./content01/학습자료.pdf', '_blank', option);
```

- ##### jj.link.audio(url, target, option)
Audio(.mp3) 파일을 내장된 뷰어를 통해 호출합니다. ( `target`을 생략한 경우 새창에서 열립니다. )
```
jj.link.audio('./content01/sound.mp3', '_blank', option);
```

- ##### jj.link.video(url, target, option)
Video(.mp4) 파일을 내장된 뷰어를 통해 호출합니다. ( `target`을 생략한 경우 새창에서 열립니다. )
```
jj.link.video('./content01/강의.mp4', '_blank', option);
```

- ##### jj.link.flash(url, target, option)
플래시(.swf) 파일을 내장된 뷰어를 통해 호출합니다. ( `target`을 생략한 경우 새창에서 열립니다. )
```
jj.link.flash('./content01/game.swf', '_blank', option);
```

**매개변수 설명**
링크 관련 메서드에 적용되는 인자는 모두 동일한 형식입니다.
- url [String]
    + 링크 연결할 컨텐츠의 경로
- target [String] (생략하면 `기본 브라우저`에서 열기)
    + _self : 자신에 창(IFrame)에서 콘텐츠 열기
    + _top : 자신에 창(window)에서 콘텐츠 열기
    + _blank : 새창에서 콘텐츠 열기
    + *`window id`* : 윈도우창 아이디를 직접 지정하면 열려있는 해당 아이디를 가진 창에서 링크가 열립니다.
- option [Object] (생략 가능)
    + width : (Number) 창 너비 지정
    + height : (Number) 창 높이 지정
    + fullscreen <notweb></notweb> : (Boolean) 창이 열릴때 fullscreen 모드로 열립니다.
    + maximize <notweb></notweb> : (Boolean) 창이 열릴때 스크린 최대 크기로 열립니다.
    + minimize <notweb></notweb> : (Boolean) 창이 열릴때 작업 표시줄에만 표시됩니다.
    + parameter : (Object) 새창으로 열릴 경우 새로운 창에 값을 전달합니다.
    + onOpen(win) : (Function) 새창이 열렸을때 콜백 함수를 전달합니다.
    + onClose(data, win) : (Function) 새창이 닫힐때 콜백 함수를 전달합니다.

각 매개변수는 다음과 같은 형식으로 적용됩니다.
```
jj.link.html('./content01/index.html', '_blank', {
    width: 800,
    height: 600,
    parameter: '새문서가 로드될때 전달되는 값',
    onOpen: function(openWin){
        // "전달값 : 새문서가 로드될때 전달되는 값" 출력됨
        console.log('전달값 : ', openWin.jj.parameter);
    },
    onClose: function(closeData, closeWin){
        // 닫히는 window의 API에 접근 : closeWin.jj
        alert('닫히는 창 : ' + closeWin.jj._id + ' (콜백 실행 창 : ' + jj._id + ')');
    }
});
```

**외부 링크(Http, Https) 연결 제한**
<box>ver 0.4.270 이후 배포 버전부터 크롬 보안 업데이트로 인해 Http 링크 연결에 제한이 있습니다.
Binder에서는 ver 0.4.271 버전부터 외부 링크(Http, Https) 연결을 다시 지원하도록 했지만,
`a` tag로 링크를 설정한 경우 `target=_self` 인 경우에는 페이지를 표시할 수 없습니다.
</box>

<a name="window.jj.event 객체"></a>

-------------------------------------------------------------
### window.jj.event 객체
-------------------------------------------------------------

#### 이벤트 관리 메서드

- ##### jj.event.addListener(eventType, handler)
등록 가능한 `eventType`은 다음과 같습니다.
    + close : 창이 닫힐 때 발생
```
(target window).jj.event.addListener('close', function handler(closeData, parentWindow){});
```
    + message : 자신의 창에 message가 전달 되었을때 발생
```
jj.event.addListener('message', function handler(receiveData, sendingWindow){});
```
- ##### jj.event.removeListener(eventType, handler)
해당 type으로 등록한 이벤트 핸들러를 제거 합니다.
```
jj.event.removeListener('이벤트 타입', handler);
```

- ##### jj.event.removeAllListeners(eventType)
해당 type으로 등록된 모든 이벤트 핸들러를 제거 합니다.
```
jj.event.removeAllListeners('이벤트 타입');
```

#### window 상호 통신 메서드
- ##### jj.event.message(targetWindow, data)
창끼리 통신을 할때 이 함수를 사용합니다.
message를 받는 window에서는 `message` 이벤트를 등록하여 값을 전달 받습니다..
```
jj.event.message('메세지를 전달받을 window', '전달 데이터 (Object)');
```
child (A) window에서 parent (B) window에게 message를 보냅니다.
```
// A window 코드
jj.event.message(jj.parent(), '전달 데이터 (Object)');
```
A window에서 보낸 message를 B window에서 이벤트를 통해 받습니다.
```
// B Window 코드
jj.event.addListener('message', function handler(receiveData, sendingWindow){
        // receiveData 값은 "전달 데이터 (Object)"
        // sendingWindow 는 A window가 된다.
});
```

<a name="window.jj.native 객체"></a>

-------------------------------------------------------------
### window.jj.native 객체
-------------------------------------------------------------

- ##### jj.native.close(closeData)
해당 window 창을 닫습니다. `close` 이벤트가 발생하며  closeData는 이벤트 핸들러와 링크 관련 메서드의 콜백 함수에 전달됩니다.
팝업으로 띄운 창이 아니면 메서드는 동작하지 않습니다.
```
jj.native.close('전달 데이터 (Object)');
```

- ##### jj.native.toggleFullscreen()
FullScreen 화면으로 전환하거나 원상태로 복원 합니다.
```
// fullscreen 화면 전환. (esc 키를 누르면 원상태로 복귀함)
jj.native.toggleFullscreen();
```

- ##### jj.native.explorer(pathString) <notweb></notweb>
해당 경로의 파일(폴더)의 위치를 탐색기(explorer)를 열어 보여줍니다.
```
jj.native.explorer('경로 (String)');
```

- ##### jj.native.exe(pathString) <notweb></notweb>
exe 파일을 실행 합니다. ppt와 같이 확장자가 exe가 아닌 경우 해당 확장자에 대한 기본 응용프로그램을 이용하여 실행 합니다.
```
jj.native.exe('경로 (String)');
```

- ##### jj.native.download(pathString, callback)
해당 경로의 파일을 실행할 것인지 아니면 저장(또는 복사) 할 것인지를 묻는 다운로드 창을 열고 선택된 사항을 실행합니다.
```
jj.native.download('경로 (String)', function(response, data){
    console.log(response, ': ', data);
});
```

    + pathString (String)
    + callback (Function) <notweb></notweb>
        + response : (String) 다운로드 창 선택 결과로 `'open'`, `'save'`, `'cancel'`, `'error'` 값중 하나가 전달 됩니다.
        + data : (Object) response 값에 따라 다음과 같이 전달 됩니다.
            - 'open' : 열기한 파일 경로
            - 'save' : 파일 다이얼로그 창에서 선택한 파일 저장 경로
            - 'cancel' : 전달값 없음
            - 'error' : 에러 내용 (에러가 발생한 경우)
    + <web>서버 mime 지원 여부에 따라 다운로드창 또는 실행창이 열릴 수 있습니다.</web>

- ##### jj.native.zipDownload(config, callback) <notweb></notweb>
지정된 파일들을 zip 파일로 묶어 다운로드 합니다.
```
jj.native.zipDownload({
    root: '/resource'
    source: [
        './data/파일1.pdf',
        '/resource/data/파일2.doc',
        '/resource/폴더'
    ]
}, function(err, zip){
    console.log('다운로드된 압축파일 경로 : ', zip);
});
```

    + config (Object)
        + zip : (String) 압축 파일(.zip)이 저장(다운로드)될 경로입니다. 생략하면 파일 다이얼로그 창이 뜹니다.
        + defaultName : `zip` 속성을 설정하지 않아 압축 파일 저장 경로를 얻기위해 파일 다이얼로그 창이 뜰때 기본으로 표시될 압축 파일 이름을 지정합니다. (기본값:'download.zip')
        + root : `source`에 지정된 파일 또는 폴더가 압축될때 `root` 속성에 설정된 경로가 zip 파일 내에서 최상위 폴더로 설정됩니다.
        + source : 압축 파일에 포함시킬 파일 또는 디렉토리 경로 배열 입니다.
        `source`에 지정된 모든 요소들의 경로는 `root` 경로의 하위 경로여야 합니다.
    + callback (Function)
        + err : (String) 에러가 발생했을때 전달되는 에러 내용입니다..
        + zip : (String) 압축 파일이 저장(다운로드)된 경로입니다. 취소되었으면 `undefined` 값을 가집니다.

- ##### jj.native.zip(config, callback) <notweb></notweb>
지정된 파일들을 zip 파일로 압축 합니다.
```
jj.native.zip({
    root: '/resource'
    source: [
        './data/파일1.pdf',
        '/resource/data/파일2.doc',
        '/resource/폴더'
    ]
}, function(err, zip){
    console.log('생성된 압축파일 경로 : ', zip);
});
```

    + config (Object)
        + zip : (String) 압축 파일(.zip)이 저장(다운로드)될 경로입니다. 생략하면 파일 다이얼로그 창이 뜹니다.
        + defaultName : `zip` 속성을 설정하지 않아 압축 파일 저장 경로를 얻기위해 파일 다이얼로그 창이 뜰때 기본으로 표시될 압축 파일 이름을 지정합니다.
        + root : `source`에 지정된 파일 또는 폴더가 압축될때 `root` 속성에 설정된 경로가 zip 파일 내에서 최상위 폴더로 설정됩니다.
        + source : 압축 파일에 포함시킬 파일 또는 디렉토리 경로 배열 입니다.
        `source`에 지정된 모든 요소들의 경로는 `root` 경로의 하위 경로여야 합니다.
    + callback (Function)
        + err : (String) 에러가 발생했을때 전달되는 에러 내용입니다..
        + zip : (String) 압축 파일이 저장(다운로드)된 경로입니다. 취소되었으면 `undefined` 값을 가집니다.


<a name="window.jj.io 객체"></a>

-------------------------------------------------------------
### window.jj.io 객체 <notweb></notweb>
-------------------------------------------------------------

`jj.io`에 속한 API들은 `user` 폴더로 경로 접근이 제한됩니다.
- 경로를 지정할때 공통적으로 다음 제약을 받습니다.

    + Binder 구조 내에서 manifest.json 파일에 지정된 `app` 폴더의 하위폴더(`user` 폴더)가 논리적인 root 가 됩니다.
    + `/sample/file.json` 으로 `pathString` 경로를 지정 하였다면 실제 경로는 다음과 같습니다.
     ```
     manifest.json 에 "app-folder": "app" 으로 지정되어 있다면 (default값 : app),
     * 파일 실제 경로 : app/user/sample/file.json
     ```
    + 상대경로로 지정할 수 없습니다.
    ```
    (x) './folder/file.txt', '../folder/file.txt'
    (o) 'folder/file.txt'
    (o) '/folder/file.txt'
    (o) 'user://folder/file.txt'
    ```
- **경로 표기 방법**
`user` 폴더 이하의 리소스에 접근 하고자 할때 경로 표기는 다음과 같이 합니다.
    + `user` 폴더명은 생략하고 표기 합니다.
    + 예) `~/app/user/folder/file.ext` 를 표기할때
    -  방법 1 : `/folder/image.jpg`
    -  방법 2 : `folder/image.jpg`
    -  방법 3 : `user://folder/image.jpg`
    `window.jj.io` 객체에 속한 메서드들은 모두 `user`를 root로 강제하기 때문에 `방법1`, `방법2`로 호출해도 무방 하지만, 다른 메서드에서 `user`폴더에 접근 할려면 `방법3` 방식으로 경로를 표기해 주어야 합니다.
    ```
    jj.link.image('user://folder/image.jpg');
    ```

다음 API들은 모두 위에서 설명한 경로 표기 방식을 따릅니다.

- ##### jj.io.read(pathString, callback) <notweb></notweb>
`pathString` 경로(`user` 폴더 하위 경로)에 파일을 읽습니다.
```
jj.io.read(pathString, function(err, content){
    if(err) return alert(err);
    // 파일 읽기 성공 : content
});
```

    + `content` : 읽어들인 파일 내용 입니다.
        - 읽기, 쓰기 동작은 `utf-8`로 인코딩/디코딩 됩니다.
        - 문자열만 읽고 쓸 수 있습니다.

- ##### jj.io.write(pathString, content, callback) <notweb></notweb>
`pathString` 경로(`user` 폴더 하위 경로)에 파일을 기록합니다.
```
jj.io.write(pathString, content, function(err){
    if(err) return alert(err);
    // 파일 쓰기 성공!
});
```

    + `content` : 쓰기할 파일 내용 입니다.
        - 읽기, 쓰기 동작은 `utf-8`로 인코딩/디코딩 됩니다.
        - 문자열만 읽고 쓸 수 있습니다.

- ##### jj.io.copy (sourcePath, destPath, callback) <notweb></notweb>
`sourcePath` 경로의 파일을 `destPath` 경로로 복사 합니다.
복사될 경로에 파일이 있으면 덮어쓰기 됩니다.
```
jj.io.copy(sourcePath, destPath, function(err){
    if(err) return alert(err);
    // 파일 복사 성공! : destPath
});
```

    + `sourcePath` : 복사될 파일 원본 위치(경로) 입니다.
        - 복사할 로컬 파일 경로 입니다.
        - 절대 경로로 표기 합니다.
    + `destPath` : 파일이 복사될 위치(경로) 입니다.
        - 경로는 `user` 폴더 하위 경로입니다.
        - 위에서 설명한 3가지 표기 방법중 하나로 표기 합니다.

- ##### jj.io.remove (pathString, callback) <notweb></notweb>
`pathString` 경로(`user` 폴더 하위 경로)의 파일을 삭제합니다.
```
jj.io.remove(pathString, function(err){
    if(err) return alert(err);
    // 파일 삭제 성공
});
```

<a name="window.jj.record 객체"></a>

-------------------------------------------------------------
### window.jj.record 객체 <notweb></notweb>
-------------------------------------------------------------
자세한 내용은 Guide 문서를 참고하세요. (<a href="javascript:jj.link.html('./index.html', '_self', {parameter: 'guide/guideRecord.md'});" >링크</a>)

- ##### jj.record.isRunning() : Boolean <notweb></notweb>
현재 녹음중인 상태인지 여부를 알려줍니다. (true 이면 녹음중인 상태임)

- ##### jj.record.start(success, fail, option) <notweb></notweb>
녹음을 시작합니다.
    + option (Object) - 생략 가능
        + time : (Number) 녹음 제한 시간 (second). 기본값 600초
        + path : (Object) 녹음 파일이 저장될 저장 경로. 기본값은 "temp 폴더/record/~" 
        
    ```
    // 제한시간10분, 녹음 파일 경로를 지정하는 경우
    jj.record.start(success, fail, {
        time: 60*10
        path: 'F:/녹음 폴더/temp.mp3'
    });
    ```
    
    + success - 녹음이 성공적으로 종료 됬을때 호출되는 콜백함수
    ```
    function success(stdout){
        var msg = '';
        if(std.indexOf('FILE=') == 0){
            // stdout : 성공 메세지 (저장 파일 경로).
            var savePath = std.substring(5);
            savePath = savePath.replace(/\\/g, '/');
            savePath = savePath.replace(/(\n|\r)/g, '');
            msg = ' * 저장 파일 경로 : ' + savePath;
        }else{
            // stdout : 예외처리 메세지.
            msg = ' * ' + std;
        }
        console.log(msg);
    }
    ```
    
    + fail - 녹음 과정중에 에러가 발생했을때 호출되는 콜백함수
    ```
    function fail(stderr){
        // stderr : 에러 메세지.
        var msg = '[error] ' + err;
        console.log(msg);
    }
    ```

- ##### jj.record.stop() <notweb></notweb>
녹음을 중지합니다. `jj.record.start()`에서 전달한 콜백함수 (success, fail)가 호출되어 녹음 결과가 전달됩니다.



