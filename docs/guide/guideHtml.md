> Html에서 API 사용하기

+ [window 창끼리 통신 방법](#window 창끼리 통신 방법)

<a name="window 창끼리 통신 방법"></a>

-------------------------------------------------------------
### window 창끼리 통신 방법
-------------------------------------------------------------

자신의 창이 닫힐때 부모 창에게 메세지를 전달하는 예제를 통해 창 사이에 통신하는 방법을 알아봅니다.

#### 1. message 메소드를 이용한 방법

- parent 창 (팝업을 띄우는 창)에서 작성할 코드
```
// 자신의 창에 전달된 메세지를 받기 위해 이벤트를 등록 합니다.
jj.event.addListener('message', function handler(receiveData, sendingWindow){
        // receiveData 값은 "전달 데이터"
        // sendingWindow 는 메세지를 보낸 window가 된다.
});
// 그리고 새창을 엽니다.
jj.link.html('새창 주소', '_blank');
```
- child 창 (팝업)에서 작성할 코드
```
// 부모 창에게 메세지를 전달 합니다.
jj.event.message(jj.opener(), '전달 데이터');
// 그리고 자신의 창을 닫습니다.
jj.native.close();
```

#### 2. jj.link 객체의 메소드에 콜백함수를 (onOpen, onClose 옵션) 전달하는 방법

`jj.link` 객체의 링크 관련 메서드의 콜백 옵션을 통한 통신 방법은 현재 open 과 close 동작이 일어날때만 가능합니다.

- parent 창 (팝업을 띄우는 창)에서 작성할 코드
```
// 새창을 열면서 콜백 함수를 등록합니다.
jj.link.html('새창 주소', '_blank', {
    onClose: function(closeData, closeWin){
        // closeData == '전달 데이터'
    }
});
```

- child 창 (팝업)에서 작성할 코드

    + case 1 : 직접 창을 닫으면서 데이터를 전달하는 경우
    ```
    // 예를 들면 버튼 클릭시 닫기를 호출
    jj.native.close('전달 데이터');
    ```

    + case 2 : 자신의 창이 닫힐때 부모창에 메세지를 전달하는 경우 
    ```
    jj.event.addListener('close', function(closeData, openerWindow){
        // opener 창이 이미 닫힌 경우임
        if(!openerWindow) return;
        
        jj.event.message(openerWindow, '전달 데이터');
    });
    ```
    
case 1 이 버튼 클릭과 같은 특정 행위에 대해서만 값을 전달할 수 있다면,  
case 2 경우는 windwow 창의 닫기 버튼을 포함한 모든 닫기 명령에 대하여 값을 전달할 수 있으므로 case1 보다 더 일반적으로 사용할 수 있는 방법이다.

#### 3. jj 객체에 직접 접근하는 방법

- parent 창 (팝업을 띄우는 창)에서 작성할 코드
```
// 부모창에 전역 함수를 정의 합니다.
window["parent_method"] = function(data){
    // data == '전달 데이터'
};
// 그리고 새창을 엽니다.
jj.link.html('새창 주소', '_blank');
```

- child 창 (팝업)에서 작성할 코드
```
// 부모창에 정의된 함수를 직접 호출 합니다.
var openerWindow = jj.opener();
if(openerWindow) openerWindow["parent_method"] ('전달 데이터');
// 그리고 자신의 창을 닫습니다.
jj.native.close();
```
