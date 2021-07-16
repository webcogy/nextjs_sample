# TEST NEXT.js Issue

### Issue List

1. a태그와 Link태그 (새로고침 방지 )
2. img태그와 Image태그 ( 이미지 크기 조정 및 최적화 )
3. title 수정
4. styled-jsx ( "CSS-in-JS" 라이브러리 )
5. sass
6. Layout 구성 ( /components/layout/layout )

### Link태그와 a태그

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

### img태그와 Image태그

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

### <title> 수정

```
// 경로
import Head from 'next/head'

<Head>
    <title>DH NextJS</title>
    <link rel="icon" href="/favicon.ico" />
</Head>
```

---

### styled-jsx ( "CSS-in-JS" 라이브러리 )

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

### sass

```
// 설치
npm install sass

scss파일은 _app.js에서import해야 먹힘.
```

---

### Layout 구성 ( /components/layout/layout )

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
