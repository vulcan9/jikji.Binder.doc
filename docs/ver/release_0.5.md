# Release Note 0.5

--------------------------------------------
#### 0.5 버전에서 추가된 기능
--------------------------------------------

##### Web 실행 버전 포함
* 일반 브라우저에서 web으로 실행할 때에도 Binder API를 사용할 수 있도록
  API를 JS 라이브러리화 하여 포함 하였습니다..

* 일부 native 기능이 필요한 API는 포함되지 않습니다.
* HTML 문서에서 배포된 JS 파일(Binder API)을 head 태그에서 로딩하여 사용합니다.
```
<script type="text/javascript" src="jquery.min.js"></script>
<script type="text/javascript" src="binder_web.min.js"></script>
```

<div style="color:red;">web 버전을 브라우저에서 테스트할 때 반드시 서버에 업로드하여 웹서비스(`http` 프로토콜)를 호출하시기 바랍니다.</div>

--------------------------------------------
#### 버그
--------------------------------------------

* 다음 사이트에서 관리함
https://github.com/vulcan9/jik-ji-Binder/issues


