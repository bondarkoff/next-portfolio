import Head from 'next/head';

import { Sidebar } from '@/components/ui/sidebar/Sidebar';
import { About } from '@/components/about/About';

export default function Home() {
    return (
        <>
            <Head>
                <title>Next Portfolio</title>
                <meta name='description' content='Bondarkoff Next Portfolio' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
            </Head>
            <div className=''>
                <Sidebar />
                <div className='container'>
                    <About />
                </div>
            </div>
        </>
    );
}
