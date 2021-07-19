import React from 'react';
import Link from 'next/link'
import Layout, { siteTitle } from '../../components/layout/layout'
import Alert from '../../components/Alert/Alert'
import Head from 'next/head';

function intro() {
    return (
        <Layout>
            intro page
            
            <Alert type={"success"}>
                커스텀 팝업창 띄우기 !
            </Alert>

            {/* <Link href="/">
                <a>go home</a>
            </Link> */}
        </Layout>
    );
}

export default intro;
