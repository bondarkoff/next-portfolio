import axios from 'axios';
import { useEffect, useState } from 'react';

import { Projects } from '@/components/projects/Projects';
import { Footer } from '@/components/ui/footer/Footer';
import { Header } from '@/components/ui/header/Header';
import { Sidebar } from '@/components/ui/sidebar/Sidebar';
import About from '@/components/about/About';
import Image from 'next/image';
import { HTMLIcon } from '@/components/assets/HTMLIcon';
import { JavaScriptIcon } from '@/components/assets/JavaScriptIcon';
import { ReactIcon } from '@/components/assets/ReactIcon';
import { CSSIcon } from '@/components/assets/CSSIcon';
import Skills from '@/components/skills/Skills';

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
            <Sidebar />
            <div className='container'>
                <Header />
                <main>
                    <Projects items={projects} />
                    <About />
                    <Skills />
                </main>
                <Footer />
            </div>
        </>
    );
}
