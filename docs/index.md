# jikji.Binder

`jik-ji Binder`는 Web 기술(HTML, CSS, Javascript)을 사용하여 Desktop 어플리케이션을 만들수 있도록 도와주는 도구입니다.

### Demo

<ul>
  <li><a href="javascript:void(demo('/resource/html/index.html'));">Html Demo (Jik-ji Binder 새창)</a></li>
  <li><a href="javascript:void(demo('/resource/flash/index.html'));">Flash Demo (Jik-ji Binder 새창)</a></li>
</ul>


<script>
function demo(url){
  if(parent!==window && parent.jj){
    parent.jj.link.html(url, 'demo_window', {});
  }else{
    alert('jikji.Binder에서 실행해야 합니다.');
    if(window.nw){
        window.nw.App.addOriginAccessWhitelistEntry('https://vulcan9.github.io/', 'chrome-extension', location.host, true);
    }
  }
}
</script>

### How to use?

1. 배포된 파일을 기준으로 `app/resource` 폴더를 찾습니다.
2. `app/resource` 폴더 내용물중 `config.json` 파일을 제외한 모든 파일을 삭제합니다.
3. `app/resource/index.html`을 만들고 다음 내용을 작성합니다.
    ```html
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>새로운 시작</title>
        <script>
        (function(){
           if(window.jj){
               // splash 창 닫기
               var opener = window.jj.opener();
               if(opener && opener.closeSplash) opener.closeSplash(window);
           }
        })()
        </script>
    </head>
    <body>
        <h1>Hello World~!</h1>
    </body>
    </html>
    ```     
4. `config.json` 파일에서 main 속성값을 다음과 같이 수정합니다.
    ```
        "main": "./index.html",
    ```

5. `app/resource` 폴더의 `index.html` 페이지로부터 원하는 application을 구성합니다.
6. `launcher.exe` 를 실행합니다.

### License

Jik-ji Binder에 사용된 NW.JS 는 MIT 라이센스를 따릅니다.<br>
LICENSE 파일을 확인하세요.
```
* NW.JS
node-webkit's code uses the MIT license.
https://github.com/nwjs/nw.js
```
