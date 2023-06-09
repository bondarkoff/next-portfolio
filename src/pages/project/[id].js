import { useRouter } from 'next/router';
import axios from 'axios';
import { useEffect, useState } from 'react';

import ProjectDetails from '@/components/screens/projectDetails/ProjectDetails';

export default function ProjectPage() {
    const [project, setProject] = useState([]);

    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`http://localhost:3000/api/projects`);
                const foundProject = response.data.find(item => item.id === id);
                setProject(foundProject);
            } catch (error) {
                alert('Error while fetching project details. Check console for details.');
                console.log(error);
            }
        }
        fetchData();
    }, [id]);

    useEffect(() => {
        if (router.isReady) {
            setProject(id);
        }
    }, [router.isReady]);

    if (!project) return null;

    return <ProjectDetails project={project} />;
}
