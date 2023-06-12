import axios from 'axios';
import { useEffect, useState } from 'react';

import About from '@/components/about/About';
import Skills from '@/components/skills/Skills';
import { Projects } from '@/components/projects/Projects';
import { Footer } from '@/components/ui/footer/Footer';
import { Header } from '@/components/ui/header/Header';
import { Sidebar } from '@/components/ui/sidebar/Sidebar';

export default function Home() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const itemsResponse = await axios.get('api/projects');
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
            <Sidebar />
            <div className='container'>
                <Header />
                <main>
                    <Projects items={projects} />
                    <Skills />
                    <About />
                </main>
                <Footer />
            </div>
        </>
    );
}
