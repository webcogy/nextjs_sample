import React from 'react';
import Link from 'next/link'

function intro() {
    return (
        <div className="intro">
            this is intro page,


            <Link href="/">
                <a>go home</a>
            </Link>
        </div>
    );
}

export default intro;
