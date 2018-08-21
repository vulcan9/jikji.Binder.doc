> 분권, 통권

-------------------------------------------------------------
분권, 통권 구분하여 링크 걸기
-------------------------------------------------------------

#### `분권` 링크
하나의 epub을 한권으로 처리하여 보여줍니다.
분권인 경우에는 `bookBinding` 값을 `false` 로 설정해 줍니다.
(`bookBinding` 값은 기본값이 `false`이므로 생략해도 됩니다.)
```
jj.link.ebook('/resource/ebook/epub/?page=3&bookBinding=false', '_blank');
// 또는
jj.link.ebook('/resource/ebook/epub/', '_blank', {page:3, bookBinding:false});
// 또는
jj.link.ebook('/resource/ebook/epub/', '_blank', {page:3});
```

위 경로인 경우 폴더 구조는 다음과 같습니다.
![Alt text](./img/link_ebook1.jpg)

#### `통권` 링크
여러 epub을 묶어서 한권처럼 보여 줍니다.
통권인 경우에는 `bookBinding` 값을 `true` 로 설정해 주어야 합니다.
통권은 파일 구조가 분권과 약간 다릅니다.
- `cdbook.xml`, `cdbook-toc.xml` 파일이 필요합니다.
- xml과 같은 폴더에 압축해지한 각각의 epub 컨텐츠 폴더를 만듭니다.
- 링크 경로는 xml이 위치한 파일 경로를 사용합니다.

```
jj.link.ebook('/resource/ebook/?page=3&bookBinding=true', '_blank');
// 또는
jj.link.ebook('/resource/ebook/', '_blank', {page:3, bookBinding:true});
```

위 경로인 경우 폴더 구조는 다음과 같습니다.
![Alt text](./img/link_ebook2.jpg)

