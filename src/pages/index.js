import Head from 'next/head';

import { Sidebar } from '@/components/ui/sidebar/Sidebar';
import { Header } from '@/components/ui/header/Header';
import { Projects } from '@/components/projects/Projects';
import { Footer } from '@/components/ui/footer/Footer';

export default function Home() {
    return (
        <>
            <Head>
                <title>Next Portfolio</title>
                <meta name='description' content='Bondarkoff Next Portfolio' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
            </Head>
            <Sidebar />
            <div className='container'>
                <Header />
                <main>
                    <Projects />
                </main>
                <Footer />
            </div>
        </>
    );
}
