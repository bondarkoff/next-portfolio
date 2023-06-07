import Head from 'next/head';

export default function Home() {
    return (
        <>
            <Head>
                <title>Next Portfolio</title>
                <meta name='description' content='Bondarkoff Next Portfolio' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
            </Head>
            <main>
                <div className='container'>
                    <div>Hello World</div>
                </div>
            </main>
        </>
    );
}
