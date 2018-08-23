# Flash에서 API 사용하기

+ [SWF 파일 링크걸기](#SWF 파일 링크걸기)
+ [SWF를 HTML 문서에 삽입하기](#SWF를 HTML 문서에 삽입하기)
+ [플래시에서 Binder API 사용하기](#플래시에서 Binder API 사용하기)
+ [jj.parameter 사용시 주의할 점](#jj.parameter 사용시 주의할 점)


<a name="SWF 파일 링크걸기"></a>

-------------------------------------------------------------
### SWF 파일 링크걸기
-------------------------------------------------------------

- 첫페이지를 swf 파일로 띄울 경우
콘텐츠 환경 설정 파일 (`/resource/config.json`) 에서 swf 파일 경로 또는 swf 파일이 삽입된 html 페이지 경로를 지정합니다.
```
// config.json 환경 설정 파일
{
    "main": "./index.html" 또는 "./index.swf"
}
```

- 링크를 통해 swf 파일을 열기 하는 경우
`jj.link.html()` 메서드 또는 `jj.link.flash()` 메서드를 이용합니다.
    ```
    // swf가 HTML에 의해 감싸진 경우
    jj.link.html('flash.html', '_blank');
    
    // swf를 바로 호출하는 경우
    jj.link.flash('flash.swf', '_blank');
    ```

<a name="SWF를 HTML 문서에 삽입하기"></a>

-------------------------------------------------------------
### SWF를 HTML 문서에 삽입하기
-------------------------------------------------------------

다음 HTML 코드를 참고하여 swf를 문서에 삽입합니다.

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Jik-ji-Binder Flash API DEMO</title>

	<style type="text/css" media="screen">
		html, body  { height:100%; }
		body { margin:0; padding:0; overflow:auto; text-align:center; }
		object:focus { outline:none; }
		#flashContent { display:none; }
	</style>
	<script> (아래 코드 삽입 부분) </script>
</head>
<body>

    <div id="flashContent"><p>Flash Player가 지원되지 않습니다.</p></div>

</body>
</html>
```

#### jj.newSWF() 메서드 사용
jj.newSWF() 메서드를 이용하여 swf를 문서에 삽입할 수 있습니다. 
`head` 태그에 다음 script를 모두 입력 합니다.
```
<script>
(function(){

    // 로드할 swf 파일 경로
    var contentURL = './index.swf';

    // SWF 생성 옵션 설정
    var config = {
        _flashContainerID : "flashContent",
        scale: "noScale",
        wmode : "window",
        bgcolor: "#FFFFFF",
        flashWidth: "1024",
        flashHeight: "768"
    };

    // flashVars : (key:value) 객체로 전달할것 (복합데이터는 안됨)
    var flashVars = jj.parameter;

    var loader = window.jj.newSWF();
    loader.create(contentURL, config, flashVars, onSwfCreated);

    //----------------------------------------
    // SWF 생성이 완료된 후 통신할 수 있음
    //----------------------------------------

    function onSwfCreated(){
        console.log('이제 플래시와 JavaScript 간 통신이 가능합니다.');
    }
})();
</script>
```

`jj.newSWF()`로 반환된 객체는 `create` 메서드를 통해 swf 파일을 문서에 로드 합니다.

- ##### loader.create(contentURL, config, flashVars, onSwfCreated)
    - contentURL [String] : 로드할 swf 파일 경로
    ```
    var contentURL = './index.swf';
    ```
    
    - config [Object] : SWF 생성 옵션 설정
        + _flashContainerID : swf Object가 삽입될 위치를 나태내는 태그 id
        + scale: `"showAll"`, `"exactFit"`, `"noBorder"`, `"noScale"`, default : `"showAll"`
        + wmode : `"window"`, `"opaque"`, `"transparent"`, default : `"window"`
        + bgcolor: 배경색, default : `"#FFFFFF"`
        + flashWidth: 너비, default : `"100%"`
        + flashHeight: 높이, default : `"100%"`
        ```
        var config = {
            _flashContainerID : "flashContent",
            scale: "noScale",
            wmode : "window",
            bgcolor: "#FFFFFF",
            flashWidth: "1024",
            flashHeight: "768"
        };
        ```
    - flashVars [Object]
    문서에 전달된 jj.parameter값을 swf (Actionscript3.0)에서 사용하려면 위 코드와 같이 flashVars에 값을 전달해 줍니다.
    단, flashVars에 전달되는 값은 함수및 함수가 포함된 객체는 지정할 수 없습니다. 이는 Actionscript와 통신 제약 사항입니다.
    ```
    var flashVars = jj.parameter;
    ```
    - onSwfCreated [Function]
    SWF 생성이 완료된 후 플래시와 JavaScript 간 통신이 가능한 시점(swf가 초기화 완료된 시점)에 호출될 콜백함수 입니다.
    <div style="color:red;">(주의) `onSwfCreated` 매개변수는 Binder API와 호환되는 코드가 swf에 삽입되어 있어야 호출됩니다.
    일반적인 swf에서는 호출되지 않습니다. 아래 내용을 참고하세요</div>

<a name="플래시에서 Binder API 사용하기"></a>

-------------------------------------------------------------
### 플래시에서 Binder API 사용하기
-------------------------------------------------------------

AS3.0의 ExternalInterface 클래스를 사용하여 ActionScript (AS) 와 Javascript (JS) 사이에 서로 통신할 수 있습니다.

#### Javascript와 Actionscript와 통신 제약 사항
JS와 AS 사이에는 함수는 매개변수로 전달할 수 없습니다. 따라서 매개 변수에 함수가 포함된 Binder API 메서드는 플래시에서 호출할 수 없습니다. 
AS에서 Binder API를 사용하는데에 다음 제약사항이 있습니다.

- <div style="color:red;">JS-AS 통신할때 매개변수로 함수를 넘겨줄 수 없음.</div>
- <div style="color:red;">매개변수에 함수가 포함된 메서드는 호출할 수 없음.</div>

#### JS에서 플래시와 통신이 가능한 시점
위와같이 HTML에서 swf를 삽입 하였거나 `jj.link.flash()` 메서드를 이용하여 swf를 호출한 경우 JS와 플래시간 통신이 가능해 집니다.
위 코드에서와 같이 `loader.create()` 메서드의 콜백 함수(`onSwfCreated`)가 호출된 후부터 JS에서 플래시의 함수를 호출할 수 있습니다.
통신을 위해서는 플래시를 제작할때 아래와 같은 사항을 준수해야 합니다. 

+ ##### AS 3.0에서 JS와 통신 설정
    swf가 로드가 완료되고 JS에서 호출할 플래시쪽 함수가 준비된 후에야 JS가 플래시쪽 함수를 호출할 수 있습니다.
    플래시에서는 JS 쪽에 이를 알리기 위해 JS가 호출할 함수를 준비한 후 다음 코드를 실행해야 합니다.
    보통 플래시 타임라인의 1프레임에 삽입하면 됩니다.

    [AS3.0 코드] 플래시 초기화
    ```
    // JS와 통신이 준비 되었음을 알림
    ExternalInterface.call("jjCall");
    ```
    이 구문은 JS에서 호출할 모든 AS 함수들을 `ExternalInterface.addCallback` 으로 등록한 뒤에 호출하는 것이 좋습니다. 
    그렇지 않으면 `onSwfCreated`에서 플래시 함수를 호출하려고 할때 아직 등록되지 않은 상태라서 해당 플래시 함수를 찾을 수 없게됩니다.
    서로 다른 도메인에서 swf가 삽입된 경우 다음 코드도 필요합니다
    ```
    import flash.system.Security;
    Security.allowDomain("*");
    ```
    
#### JS에서 AS로 함수 호출하기

- [AS3.0 코드] JS에서 AS3.0으로 호출할 함수 등록
    ```
    // 'function_in_flash' 이름으로 JS에게 함수를 공개함
    ExternalInterface.addCallback('function_in_flash', function(param:Object){
        return param + '2. AS에서 처리되어 값 반환함';
    });

    // Binder API를 사용할 수 있음을 알림
    ExternalInterface.call("jjCall");
    ```

- [JS 코드] JS에서 플래시 함수 호출
위에서 AS에 등록된 `function_in_flash` 함수 이름으로 호출 합니다.
    ```
    // JS --> AS 호출 테스트
    function onSwfCreated(){
        var result = jjFlash.toSWF('function_in_flash', '1. JS 로부터 전달된 값 --> ');
        console.log(result);

        // console 출력 결과
        // 1. JS 로부터 전달된 값 --> 2. AS에서 처리되어 값 반환함
    }
    ```

#### AS에서 JS로 함수 호출하기 (AS 3.0에서 Binder API 사용하기)
통신이 연결되었으면 플래시에서 Binder API를 사용할 수 있습니다.
```
// [AS 코드]
ExternalInterface.call("jjCall", {
    apiName: 'jj.link.html',
    params: ['../_html/popup.html', '_self', {width: 500, height: 500}]
});
```
- `apiName` : (String) Binder API의 메서드 이름
- `params` : (Array) Binder API의 메서드에 전달될 매개변수들

위 예제 코드는 JS에서 다음 코드를 호출한 것과 같은 동작을 합니다.
```
// [JS 코드]
jj.link.html('../_html/popup.html', '_self', {width: 500, height: 500});
```

<a name="jj.parameter 사용시 주의할 점"></a>

-------------------------------------------------------------
### jj.parameter 사용시 주의할 점
-------------------------------------------------------------
parent 창에서 링크 관련 메서드의 option 매개변수에 의해 전달된 값을 플래시에서 사용하고자 할 경우 다음 사항에 주의 해야 합니다.
- 플래시와의 전달값은 key:value 형식의 객체여야 합니다.
    ```
    // parent 창에서 링크 메서드의 option에 의해 전달된 값
    jj.parameter 형식 : {key:value, ...}
    ```

- 다음은 링크 API 호출하여 플래시에 값을 전달하는 방법을 보여줍니다.
    ```
    // [JS 코드]
    
    jj.link.html('flash.html', '_blank', {
        parameter:{
            paramName: '사용자 전달 값'
        }
    });

    // [AS 3.0 코드]
    
    // 플래시에서 전달값 접근
    var paramObj:Object = LoaderInfo(this.root.loaderInfo).parameters;
    // 또는,
    var paramObj:Object = LoaderInfo(this.stage.loaderInfo).parameters;

    // 전달값 (전달 객체구조 그대로 호출)
    var value = paramObj['paramName']; // "사용자 전달 값"
    ```

- 플래시에서는 다음 두가지 경우에는 플래시에 값이 전달되지 않습니다.
    + <div style="color:red;">원시값을 바로 전달하는 경우 (X)</div>
    ```
    // parameter 값은 key:value 형식의 객체여야함
    jj.flash('index.swf', '_blank', {
        parameter: '이 값은 플래시에 전달되지 않음'
    });
    ```
    + <div style="color:red;">복합데이터를 전달하는 경우 (X)</div>
    ```
    // 복합 데이터는 플래시에 전달되지 않음
    jj.flash('index.swf', '_blank', {
        parameter:{
            paramName: window
        }
    });
    ```
    window 객체가 전달되지 않는 이유는 window 객체 안에 함수를 포함하고 있기 때문이기도 하다.











