import Head from 'next/head'
import React, { FC } from 'react'

type HeadProps = {
    title?: string
    description?: string
}

const SEO: FC<HeadProps> = ({ title, description }) => {
    return (
        <Head>
            <title>{title || 'Home'} | Nipatiitti</title>
            <meta name="description" content={description || 'Niilo Jaakkola homepage and portfolio'} />
        </Head>
    )
}

export default SEO
