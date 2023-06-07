import Head from 'next/head';

export default function Home() {
    return (
        <>
            <Head>
                <title>Next Portfolio</title>
                <meta name='description' content='Bondarkoff Next Portfolio' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
            </Head>
            <div className=''>
                <div className='container'>
                    <div className='text'>
                        <h1 className='title'>Bondarkoff</h1>
                        <p className='description'>
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
