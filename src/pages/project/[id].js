import { useRouter } from 'next/router';
import axios from 'axios';
import { useEffect, useState } from 'react';

import ProjectDetails from '@/components/screens/projectDetails/ProjectDetails';

export default function ProjectPage() {
    const [project, setProject] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`${window.location.origin}/api/projects`);
                const foundProject = response.data.find(item => item.id === id);
                setIsLoading(false);
                setProject(foundProject);
            } catch (error) {
                alert('Error while fetching project details. Check console for details.');
                console.log(error);
            }
        }
        fetchData();
    }, [id]);

    useEffect(() => {
        if (router.isReady && id) {
            setProject(id);
        }
    }, [router.isReady, id]);

    if (!project) return null;

    return <ProjectDetails project={project} loading={isLoading} />;
}
