import Head from 'next/head';

import { Sidebar } from '@/components/ui/sidebar/Sidebar';

import styles from '@/styles/Home.module.scss';

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
                    <div className={styles.text}>
                        <h1 className={styles.title}>Bondarkoff</h1>
                        <p className={styles.description}>
                            Welcome to the extraordinary world of , a versatile and imaginative
                            artist who skillfully navigates the realms of product design,
                            photography and digital art. With a keen eye for detail and a relentless
                            pursuit of innovation, crafts captivating visual narratives, immersive
                            digital realms, and functional yet aesthetically pleasing products.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
