import axios from 'axios';
import { useEffect, useState } from 'react';

import About from '@/components/about/About';
import Skills from '@/components/skills/Skills';
import { Projects } from '@/components/projects/Projects';
import { Footer } from '@/components/ui/footer/Footer';
import { Header } from '@/components/ui/header/Header';
import { Sidebar } from '@/components/ui/sidebar/Sidebar';
import { HomeContentLoader } from './HomeContentLoader';

export default function Home() {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const itemsResponse = await axios.get('api/projects');

                setIsLoading(false);
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
            {/* <Sidebar /> */}
            <div className='container'>
                <Header loading={isLoading} />
                <main>
                    {isLoading ? (
                        <HomeContentLoader />
                    ) : (
                        <Projects items={projects} loading={isLoading} />
                    )}
                    {/* <Skills loading={isLoading} />
                    <About loading={isLoading} /> */}
                </main>
                <Footer loading={isLoading} />
            </div>
        </>
    );
}
