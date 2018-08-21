> Migration

--------------------------------------------
#### 0.1 (이전) 버전에서 0.2 버전으로 App 변경하기
--------------------------------------------

##### Binder API 객체 그룹화
아래 변경된 메서드 및 속성은 더이상 지원되지 않습니다.

* 다음 메서드들이 `link` 객체로 그룹화됨
        jj.link  --> jj.link.html
        jj.ebook --> jj.link.ebook
        jj.image --> jj.link.image
        jj.pdf   --> jj.link.pdf
        jj.audio --> jj.link.audio
        jj.video --> jj.link.video
        jj.flash --> jj.link.flash

* 다음 메서드들이 `native` 객체로 그룹화됨
        jj.close            --> jj.native.close
        jj.toggleFullscreen --> jj.native.toggleFullscreen
        jj.explorer         --> jj.native.explorer
        jj.download         --> jj.native.download
        jj.exe              --> jj.native.exe

* 다음 메서드들이 `event` 객체로 그룹화됨
        jj.addListener        --> jj.event.addListener
        jj.removeListener     --> jj.event.removeListener
        jj.removeAllListeners --> jj.event.removeAllListeners
        jj._callHandler       --> jj.event._callHandler
        jj.message            --> jj.event.message

* jj._parent 속성이 메서드로 변경됨
        jj._parent --> jj.parent()

* 링크 관련 메서드에 onClose 인자 없앰
`jj.link`, `jj.ebook`, `jj.image`, `jj.pdf`, `jj.audio`, `jj.video`, `jj.flash` 메서드에 `onClose` 콜백함수를 전달하던 것을
jj.link 객체로 그룹화 하면서 option 인자에 `onClose`, `onOpen` 항목으로 전달할 수 있도록 변경함
```
var option = {
    onOpen: function(win){},
    onClose: function(closeData, win){},
    parameter: '링크된 문서에 전달할 값'
};
window.jj.link.html('링크 주소', '_blank', option);
```

* close 이벤트 리스너 전달 인자 (순서)변경됨
(closeData 인자와 parent 인자의 전달되는 위치가 바뀌었음)
```
window.jj.event.addListener('close', function handler(closeData, parent){
        var parentID = (parent) ? parent.jj._id : '없음';
        console.log('창닫힘 리스너 : ' + closeData, '- parent 전달 : ', parentID);
});
```

