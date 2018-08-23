# jik-ji-Binder

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
    alert('jik-ji-Binder에서 실행해야 합니다.');
  }
}
</script>


### License

Jik-ji Binder에 사용된 NW.JS 는 MIT 라이센스를 따릅니다.<br>
LICENSE 파일을 확인하세요.
```
* NW.JS
node-webkit's code uses the MIT license.
https://github.com/nwjs/nw.js
```
