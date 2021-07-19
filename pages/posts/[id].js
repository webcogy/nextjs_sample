import Layout from '../../components/layout/layout'
import Head from 'next/head'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date/date'
import utilStyles from '../../styles/utils.module.css'

export async function getStaticPaths() {
    const paths = getAllPostIds() // 동적경로를 위해 모든 파일 경로 이름 담아서 리턴
    return {
        paths,
        fallback: false
    }
}

export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    )
}

// 동적 경로를 위해 파일경로를 담은 getPostData를 가져옴.
/**
 * 테스트 링크
    http://localhost:3000/posts/ssg-ssr
    http://localhost:3000/posts/pre-rendering
 */

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}