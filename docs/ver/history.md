
#### ver 0.5.3
------------------------------

* Jik-ji Editor HTML Element 랜더링 지원
* Ebook viewer 교체

#### ver 0.5.1
------------------------------

* "window.open(url)" api 사용시 url에 붙은 해시(앵커)값이 전달 안되는 버그 수정

#### ver 0.4.278
------------------------------
##### 배포 : 2018.04.12

* fixed : iframe에서 다음값을 참조하지 못하는 경우 발생 (end.js)
  - process, document.body.oncontextmenu
  - window.process, window.document.body 로 체크
* fixed : 풀스크린 배경색 div 체크후 변경하도록 함

#### ver 0.4.275
------------------------------

* 배포시 async 패키지 추가함 (zip 과정에 필요함)

* 화질이 떨어지는 문제

```
브라우져에서 페이지를 랜더링할때 cpu를 사용할지 gpu를 사용할지 설정할 수 있는데
디바이스에서 탑재된 브라우저에서도 초기에는 cpu 사용을 기본 설정으로 사용하다가 
정적 화면보다 애니메이션을 위한 빠른 연산 속도를 더 중요하게 여겨지면서 최근에는 gpu 랜더링을 기본 설정으로 출시됨.

gpu 랜더링은 빠른 연산덕분에 애니메이션과 비디오에서 끊김현상없이 화면을 재생해줌.(대신 aliasing 현상이 발생함)
따라서 바인더에서도 이를 위해 gpu를 사용을 기본으로 설정함 (--disable-gpu --force-cpu-draw 옵션 삭제함)
cpu와 gpu 랜더링은 각각 장단점이 있고 이를 동적으로 설정하는 방법으로 병행하여 사용할 수 있는 방법은 없음.
```

* 플래시 설정 화면이 나타나는 문제

```
크롬 보안정책이 내장 플래시도 허용하지 않는걸로 바뀌었음
nwJS에서 설정되는 플래시 플러그 버전이 보안 이슈로 업데이트됨
크롬 최신버전 적용 및 플래시플레이어 버전 업데이트로 처음 플래시 플레이어가 설정되는 시간이 조금 느려진것같음
이전 버전에서도 이 과정은 똑같이 있었으나 PC 성능에 따라 보이기도 안보이기도 했었음
```

#### ver 0.4.273
------------------------------

* cd 버전에서 splash 안닫히는 문제
 - socket 포트를 1024 이하로 설정해야함 (637로 fix)
* 일부 버전 HTTPS (SSL) 링크 열기 안되는 현상 수정 (옵션 설정 안되 있었음)

#### ver 0.4.272
------------------------------

* 압축 API 추가
- jj.native.zip
* 파일 압축 다운로드 기능 추가
- jj.native.zipDownload
* 파일 다이얼로그창 닫힐때 이벤트 제거

* 하위 버전과 실행시 profile 충돌나는 문제 해결
- router, splash app 아이디를 버전별로 구분

* --disable-gpu --force-cpu-draw 플래그 삭제

#### ver 0.4.271
------------------------------

* HTTP - HTTPS (SSL) 링크 열기 허용
- NwJS 버전 업데이트 (0.26.5)에 따라 Http 링크 연결에 제한이 생겼음. 이를 해결함
  Refused to display 'https://...' in a frame because it set 'X-Frame-Options' to 'sameorigin'.
  GET https://... net::ERR_BLOCKED_BY_RESPONSE
- a tag에 의한 링크(_self)를 제외한 다른 링크 허용됨
- 옵션 설정됨
```
  (--allow-running-insecure-content --ignore-certificate-errors --ignore-urlfetcher-cert-requests)
```

* NwJS 버전 업데이트 (0.26.5)에서 변경된 "잘못된 페이지" redirect 주소 적용

#### ver 0.4.270
------------------------------
##### 배포 : 2017.11.28

* NwJS 버전 업데이트 (0.26.5)
* ffmpeg 버전 업데이트 (0.26.5)
* Flash Player 버전 업데이트 (27.0.0.183)

#### ver 0.4.264
------------------------------
##### 배포 : 2017.11.2

* 도움말 페이지 표시안되는 현상 수정
* 도움말 업데이트
- 배포된 결과물에서 새로운 APP ID 지정하기


#### ver 0.4.261
------------------------------
##### 배포 : 2017.10.31

* 에러 발생시 alert 창 띄우지 않음

#### ver 0.4.260
------------------------------
2017.10.03
* _blank 링크 클릭시 manifest 재 설정
- app의 초기 frame, transparent 설정 때문에 title bar 가 안나타나는 현상이 발생함

* 특수교육원 특수교과서 전자 저작물 빌드
- spetxtb2017

#### ver 0.4.257
------------------------------
##### 배포 : 2017.04.26

CD용 appID 6개 배포됨
- 2015TNN_70N_CD1
- 2015TNN_70N_CD2
- 2015TNN_70N_CD3
- Y16M12D03SC1
- Y16M12D03SC2
- Y16M12D03SC3

* CD용 중복 실행 오류 체크
* splash 적용된 CD 패키징 코드 추가

#### ver 0.4.243
------------------------------
##### 배포 : 2017.04.21

* CD용 패키징할때 splash 화면 적용
  - 2가지 방법 있음

#### ver 0.4.239
------------------------------
##### 배포 : 2017.04.14
Jik-ji-Binder_0.4.239_cdbook
Jik-ji-Binder_0.4.239_cdbook.web
Jik-ji-Binder_0.4.239_cdbook.cd

#### ver 0.4.236
------------------------------
2017.04.11
* #28번 이슈 해결
  - cd 실행형 빌드 유형 추가함

* #26번 이슈 해결
  - WEB 버전 팝업 root 경로 로직 수정

#### ver 0.4.192
------------------------------
##### 배포 : 2017.01.31
* WEB 버전 플래시 샘플 추가

2017.01.23
* API 문서에 web 지원 여부 표기

#### ver 0.4.189
------------------------------
##### 배포 : 2017.01.12

#### ver 0.4.188
------------------------------

2016.12.06
* 플래시 플러그인으로 인해 최초 한번 깜빡이는 cmd 창을 필요한 시점까지 지연시킴
  - 구조 변경으로 인해 swfobject가 매 창마다 실행되는 것을 수정함

2016.12.07
* 크롬 버그 : webfont 적용 안됨
  - fix : 폰트가 적용 랜더링을 다시 하기위해 텍스트를 삽입함
  - binder 소스에는 적용되지 않았으나 컨텐츠에서 개별적으로 처리한 내용
  - ui.html
```
    //document.body.style.opacity = 0;
    //var html = document.head.innerHTML;
    document.addEventListener('DOMContentLoaded', function() {
        var span = document.createElement('span');
        span.style.fontFamily = 'MSGothic';
        span.textContent = 'a';
        //span.textContent = 'いま なんじですか';
        span.style.position = 'absolute';
        span.style.top = 0;
        span.style.visibility = "hidden";
        document.body.appendChild(span);
        /*
        setTimeout(function(){
            document.head.innerHTML = html;
            document.body.style.opacity = 1;
        }, 1000);
        */
    });
```

#### ver 0.4.186
------------------------------

* 페이지가 로드될때 nw, process 등이 설정되지 않은경우 페이지 리로드 시킴

#### ver 0.4.182
------------------------------

* 팝업창에서 마우스 오른쪽 버튼을 누른 후 팝업을 닫으면
  그 다음 팝업창 부터는 어떤 페이지도 로드되지 않는 현상 수정
 - 오른쪽 마우스(context menu) 막음

#### ver 0.4.162
------------------------------

* 코드 초기화 진행중 빠르게 창이 닫히면 iframe에서 참조할 jj api를 못찾을 수도 있음
  - 정말 빨리 자식창을 닫아야함

#### ver 0.4.152
------------------------------

* swf 호출스크립트 오류 대신 "SWF 객체와 통신이 설정되지 않았습니다." 라는 alert창을 띄움

#### ver 0.4.150
------------------------------

* http 호출에 대해 blank나 다른 페이지로 이동할때 domain이 바뀌는 현상 방지
  - 페이지 로딩 문제 발생 방지 (http://~blank.html 을 찾게되어 무한 로딩됨)
  - http 호출에 대하여 창 리스트에서 관리 하지 않음

#### ver 0.4.148
------------------------------

* 로드된 iframe의 title이 타이틀바에 표시되는것을 방지
  - 부모 frame의 title 표시를 유지

* #23번 이슈 해결
  - 개발자용 화면 표시 제거

* #22번 이슈 해결
 - Jik-ji Binder 실행시, 하단 작업 표시줄에서 우클릭시 나타나는 문구 변경

* #20번 이슈 해결
 - 팝업 열고 닫기를 반복하면 백그라운드 프로세스(nwjs)의 메모리 사용량이 점점 늘어나는 이슈
 - 리팩토링 진행함 (--mixed-context 옵션 사용안함)

* #19번 이슈 해결
 - 가끔 페이지 연결 못하고 blank 화면 나타나는 현상 제거

2016.11.21
* iframe에서 src='' 지정으로 페이지 이동하면 이후 close 에러발생하는 버그 수정
  - blank 페이지 관련

* ebook 뷰어 업데이트
  - ebook_japan_20161121_release_ver1.zip

#### ver 0.3.103
------------------------------
* 창이 열리는 도중 닫기 버튼을 누르면 에러 발생 해결

#### ver 0.3.101
------------------------------
##### 배포 : 2016.11.18
* jj API에 opener() 추가
* #17번, #18번 이슈 다시 처리 (완료)
  - removeListener 로직에 문제 있었음

#### ver 0.3.98
------------------------------
##### 배포 : 2016.11.17
* web 뷰어 추가
  - 외부 http 링크를 web 뷰어에서 보여주도록 처리
  - 바로 처리할 경우 window name 관리등 여러 문제 발생함

* #16번 이슈 처리
  - 플래시 로드전 호출되는 플래시 함수 무시
* #17번, #18번 이슈 처리
  - windowID 제거 보정 (코드 inject_js_end.js) 로직에 의해 id가 제거될때 jj 객체 지움

#### ver 0.3.89
------------------------------
##### 배포 : 2016.11.11
* #15번 이슈 해결됨
 - html이 모두 로딩되기 전에 이 페이지에 클릭을 여러번 하게 되면 간헐적으로 에러 표시됨.
* #14번 이슈 해결됨
 - ebook에서 팝업 아이콘을 빠르게 2~3번 클릭시 BLANK 페이지 표시되는 현상.

#### ver 0.3.86
------------------------------
##### 배포 : 2016.11.02

2016.10.28
* #10번 이슈 재검토
  - chromium 매개변수로 "--disable-remote-fonts" 다시 사용하지 않음
  - 프린트 미리보기 상태일때 창 닫기 하면 프린트 종료하라는 메세지 보여줌
* epub viewer 업데이트
  - 임시 교체

#### ver 0.3.78
------------------------------
##### 배포 : 2016.10.25

2016.10.25
* nwJS 업데이트 (0.18.2)
  - ffmpeg.dll 버전은 0.17.3을 사용해야함 (배포된 0.18.2는 동작 안됨)

* #11번 이슈 해결됨
  - close 이벤트 핸들러에서 이벤트 전파 중지 기능 수정됨

* #10번 이슈 해결됨
  - nwJS 0.18.1 이상 버전으로 업데이트. (Chromium to 54.0.2840.71)
  - chromium 매개변수로 "--disable-remote-fonts" 전달함

#### ver 0.3.45
------------------------------
##### 배포 : 2016.10.13

2016.10.13
* epub viewer 업데이트
  - 20161013_ebook.zip

#### ver 0.3.44
------------------------------
##### 배포 : 2016.10.12

2016.10.12
* epub viewer 업데이트
  - 20161011_ebook.zip

#### ver 0.3.43
------------------------------
##### 배포 : 2016.10.10

2016.10.10
* ebook 뷰어에서 note exe 실행 경로 문제 해결
  - 현재 실행중인 html 경로 알아내는 로직에서 '?'이하 쿼리문 붙어있는 경우 처리함
* http:// 경로를 이용한 리소스 접근 방식 허용
* epub viewer 업데이트
  - 20161010_ebook.zip

2016.10.05
* html로 링크된 문서에 title이 지정되지 않은 경우 기본값(app 이름)으로 표기하지 않음
* 복사, 삭제 API 추가

#### ver 0.3.32
------------------------------
##### 배포 : 2016.09.30

2016.09.30
* 도메인이 다른 주소를 링크한 경우 발생되는 SecurityError 처리
* 분권, 통권 문서화 및 샘플 추가
* epub viewer 업데이트
  - 20160930_배포없이 파일만 업데이트됨.zip

2016.09.29
* config.json에서 fullscreen:true 설정한 경우 fullscreen toggle 기능 오류 수정
* 동적으로 epub 경로 지정 되도록 수정
* 분권, 통권 보기 기능 추가

#### ver 0.3.14
------------------------------
##### 배포 : 2016.09.27

* Binder API 추가
 - 파일 읽기, 쓰기

* epub viewer 업데이트
  - 뷰어 버전 이름 : 교사용 CD 뷰어
  - 20160927_ebook_noAPI.zip

#### ver 0.3.8
------------------------------
##### 배포 : 2016.09.xx

* 주) ebook 뷰어에서 제거되지 않은 코드(서버측 api 호출)로 인해 미리보기 에러 발생하고 있으므로
외부 배포하지 말것

2016.09.26
* 다른 도메인의 페이지가 새창으로 링크된 경우 새창 옵션 적용되지 않는 현상 수정

2016.09.23
* 다중 실행 기능 추가함 (app 아이디로 구분)
* cdbook 버전 추가함

#### ver 0.2.82
------------------------------
##### 배포 : 2016.09.19

2016.09.19
* epub viewer 업데이트
  - 뷰어 버전 이름 : 교사용 CD 뷰어
  - 20160919_ebook.zip
* nwJS 버전 업데인트 (0.17.3)

#### ver 0.2.79
------------------------------

2016.09.13
* JJ API에 getContainerWindow 메서드 추가
* epub viewer 업데이트
  - 뷰어 버전 이름 : 교사용 CD 뷰어
  - 20160912_KViewer.zip

#### ver 0.2.75
------------------------------
##### 배포 : 2016.09.01

* 링크 객체의 target 매개변수에서 다음을 명확히 구분지음
    + _self : 자신에 창(IFrame)에서 콘텐츠 열기
    + _top : 자신에 창(window)에서 콘텐츠 열기
* 창이 닫힐때 발생되는 다음 에러문제 해결
    + "TypeError: Cannot read property 'impl' of undefined"
    + http 새창 열기할때 API 적용하지 않음

#### ver 0.2.68
------------------------------
##### 배포 : 2016.08.08

* 녹음 API 에서 녹음 경로 지정할 수 있도록 함
* 녹음 기능 샘플 추가 (flash 버전)

#### ver 0.2.65
------------------------------
##### 배포 : 2016.07.22

* uncaught Exception 처리 추가함
* 배포 버전에서 스크립트 오류나는 경우 alert 창으로 알림

#### ver 0.2.52
------------------------------
##### 배포 : 2016.07.18

* 배포 버전에서 플래시 보안 설정 경로가 잘못되어서 플래시가 반응이 업는 현상 수정

#### ver 0.2.40
------------------------------

* launcher.exe 업데이트
* Doc 문서 추가
* Resource 폴더에 기본 컨텐츠로 Demo 샘플을 설치해 놓음
* 지세한 내용은 launcher.exe 실행 후 메뉴에서 Doc 문서 참고

#### ver 0.2.23
------------------------------

* flash 로드하는 jj.newSWF API 추가
* flash 로드할때 스크립트 로드하지 않아도 됨
```
    <script type="text/javascript" src="/viewer/flash/swfobject.js"></script>
    <script type="text/javascript" src="/viewer/flash/jjFlash.js"></script>
```

* flash에서 Binder API를 사용하는 샘플 추가함

#### ver 0.2.16
------------------------------

* Minor 버전 업데이트 0.2.x

* jj API 객체 그룹화

- 다음 메서드들이 link 객체로 그룹화됨
```
        jj.link --> jj.link.html
        jj.ebook --> jj.link.ebook
        jj.image --> jj.link.image
        jj.pdf --> jj.link.pdf
        jj.audio --> jj.link.audio
        jj.video --> jj.link.video
        jj.flash --> jj.link.flash
```

- 다음 메서드들이 native 객체로 그룹화됨
```
        jj.close --> jj.native.close,
        jj.toggleFullscreen --> jj.native.toggleFullscreen,
        jj.explorer --> jj.native.explorer,
        jj.download --> jj.native.download,
        jj.exe --> jj.native.exe
```

- 다음 메서드들이 event 객체로 그룹화됨
```
        jj.addListener --> jj.event.addListener,
        jj.removeListener --> jj.event.removeListener,
        jj.removeAllListeners --> jj.event.removeAllListeners,
        jj._callHandler --> jj.event._callHandler,
        jj.message --> jj.event.message
```

* 녹음 API 추가 (jj.record 객체 참고)

#### ver 0.1.80
------------------------------

* jj._parent 삭제
  - jj._parentID 및 jj.parent() 로 분리됨
* window 관리 메서드 추가됨
* 링크 관련 메서드에 onClose 인자 없앰
* close 이벤트 리스너 전달 인자 (순서)변경됨
* window 링크 구조 변경됨
  - 링크 타겟 옵션으로 _top 추가됨
* window.open, <a> 태그, window.location 객체에 의한 링크 허용 (테스트 필요함)
  - 옵션 설정만 하지 못하고 jj.link()와 기능 같음
* 윈도우 관리 안정화
  - IFrame을 타겟팅하여 페이지 설정 가능
* fullscreen 기능에 대하여 esc 키 작동되도록함
  - IFrame 과 상태 공유하여 toggle 기능이 안정적으로 작동하도록 수정함
* 잘못된 페이지에 의한 Process kill 취약점 보완
  - blank 페이지로 리다이렉팅 되도록 수정
  - 외부 http 링크 접근에 대하여 스크립트 관여(injection) 하지 않음.

##### 배포 : 2016.06.28
다음 사항으로 인해 nwjs 0.15.2에 세팅해 놓음
* nwJS 0.14.5 이슈
  - blank 페이지 이후 창닫히지 않음
  - 구조 불안정

* nwJS 0.15.2 이슈
  - flash 플러그인 로드 안되는 mwJS 버그 있음(로드 되지 않음) - 버그 수정 기다려야함
  - pdf 로드되지 않고 blank 페이지로 이동되는 버그 있음
  - 구조 안정적. process 종료 이슈

------------------------------

```
(Windows XP, Windows Vista 지원 중단)

Chrome has ended support for WinXP.
Please use NW.js LTS version (0.14.x) which is using the last Chrome version M50 supporting WinXP.
See http://nwjs.io/blog/v0.14.7/ for release notes for 0.14.7.
```