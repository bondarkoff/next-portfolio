import { useEffect, useState } from 'react';
import axios from 'axios';
import Head from 'next/head';

import { Sidebar } from '@/components/ui/sidebar/Sidebar';
import { Header } from '@/components/ui/header/Header';
import { Projects } from '@/components/projects/Projects';
import { Footer } from '@/components/ui/footer/Footer';

export default function Home() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const itemsResponse = await axios.get('http://localhost:3000/api/projects');
                setProjects(itemsResponse.data);
            } catch (error) {
                alert('Error while loading data. Details in console.');
                console.log(error);
            }
        }
        fetchData();
    }, []);

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
                    <Projects items={projects} />
                </main>
                <Footer />
            </div>
        </>
    );
}
