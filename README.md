# TEST NEXT.js Issue

튜토리얼 참고 : https://nextjs.org/learn/basics/assets-metadata-css/global-styles

배포완료 주소 : https://nextjs-sample-sigma-pink.vercel.app/

### Issue List

1. a태그와 Link태그 (새로고침 방지 )
2. img태그와 Image태그 ( 이미지 크기 조정 및 최적화 )
3. title 수정
4. styled-jsx ( "CSS-in-JS" 라이브러리 )
5. sass
6. Layout 구성 ( /components/layout/layout )
7. classnames 라이브러리 ( className 경우에 따라 변경 )
8. getStaticProps (SSR 핵심, nextjs v9.3 이후엔 사용 권장하지 않음)
9. gray-matter ( README.md 내부 내용을 json으로 가져와 화면에 출력 )
10. 동적경로 (파일 이름에 따른 경로생성)
11. remark 라이브러리 (렌더 마크다운, 파일내부 컨텐츠 화면에 출력)
12. 날짜형식지정
13. error 404 page 생성
14. API 요청
15. 배포
16. 타입스크립트로 변경

## 1. Link태그와 a태그

- a => 새로고침.
- Link => 새로고침되지 않음.

```
// 사용법
import Link from 'next/link'

<Link href="/intro/intro">
    <a>go to intro page</a>
</Link>
```

---

## 2. img태그와 Image태그

- img => 최적화 안됨
- Image => 최적화됨 (이미지 크기 조정 및 최적화)

- 저장경로 : public/images

```
// 사용법
import Image from 'next/image'

const YourComponent = () => (
  <Image
    src="/images/profile.jpg" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Your Name"
  />
)
```

---

## 3. <title> 수정

```
// 경로
import Head from 'next/head'

<Head>
    <title>DH NextJS</title>
    <link rel="icon" href="/favicon.ico" />
</Head>
```

---

## 4. styled-jsx ( "CSS-in-JS" 라이브러리 )

```
return (
    <>
        <div className="test">
        </div>

        <style jsx>{`
            .test {

            }
        `}</style>

    </>
)
```

---

## 5. sass

```
// 설치
npm install sass

scss파일은 _app.js에서import해야 먹힘.
```

---

## 6. Layout 구성 ( /components/layout/layout )

```
// 생성
export default function Layout({ children }) {
  return <div>{children}</div>
}
```

```
// 사용
import Layout from '../../components/layout'

<Layout>
    <Head>
    <title>First Post</title>
    </Head>
    <h1>First Post</h1>
    ...
</Layout>
```

## 7. classnames 라이브러리 ( className 경우에 따라 변경 )

```
// 설치
yarn add classnames

// 사용
import cn from 'classnames'

return (
  <div
    className={cn({
      [styles.success]: type === 'success',
      [styles.error]: type === 'error'
    })}
  >
    {children}
  </div>
)
```

## 8. getStaticProps (SSR 핵심)

참고 : https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation

- 이 안에서 axios등으로 미리 호출하면 빌드전에 데이터 호출 가능하다.

## 9. 동적경로 (파일이름에 따른 경로 생성)

1. 폴더 내의 모든 filename을 가져옴 ( /lib/posts => postsDirectory )
2. 파일의 확장자명을 빼고, 경로로 사용할 이름을 배열에 저장 ( /lib/posts => getAllPostIds )
3. /pages/posts/[id].js 에서 getStaticProps에 postData 저장
4. 같은 파일 내 Post 컴포넌트에서 가져온 postData 출력

- 확인용 링크
  http://localhost:3000/posts/ssg-ssr
  http://localhost:3000/posts/pre-rendering

그 외 동적경로 세부정보 확인 : https://nextjs.org/learn/basics/dynamic-routes/dynamic-routes-details

## 10. remark 라이브러리 (렌더 마크다운, 파일내부 컨텐츠 화면에 출력)

```
npm install remark remark-html
```

getPostData, getStaticProps, Post 업데이트

## 11. 날짜형식지정

```
// 설치
npm install date-fns

// 사용
import { parseISO, format } from 'date-fns'
export default function Date({ dateString }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}

<Date dateString={date} />
```

## 12. error 404 page 생성

pages/404/js

## 13. API 요청

[1] 경로 생성
/pages/api/hello.js 확인

req 문서 : https://nodejs.org/api/http.html#http_class_http_incomingmessage
res 문서 : https://nodejs.org/api/http.html#http_class_http_serverresponse

[2] getStaticProps에서 API 조회하기

- 브라우저가 아닌 Node 상에서 API 를 조회해야 하기 때문에, fetch 는 쓸수 없고, node-fetch 를 써야한다.

```
import fetch from ‘node-fetch’;
```

참고 : https://pks2974.medium.com/nextjs-%EB%A1%9C-static-site-%EB%A7%8C%EB%93%A4%EA%B8%B0-f9ab83f29e7

## 14. 배포

[1] git repository 배포

1. Vercel 계정 : https://vercel.com/signup
2. git repository 자동검색 됨, 배포할 프로젝트 import
3. 내용 작성 후 deploy버튼 클릭 => bulid => 배포완료 (visit버튼을 통해 확인)

[2] 기타 호스팅 옵션 배포방법 (그냥 기본인 build 폴더를 만들어서 해당 호스팅 위치에 넣는 방법임)

package.json

```json
{
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  }
}

1. npm run build
2. npm run start
3. build폴더 호스팅 폴더에 넣기
```

## 15. 타입스크립트로 변경

참고 : https://nextjs.org/learn/excel/typescript/create-tsconfig
