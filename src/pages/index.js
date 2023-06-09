import Head from 'next/head';

import Home from '@/components/screens/home/Home';

export default function HomePage() {
    return (
        <>
            <Head>
                <title>Next Portfolio</title>
                <meta name='description' content='Bondarkoff Next Portfolio' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
            </Head>
            <Home />
        </>
    );
}
