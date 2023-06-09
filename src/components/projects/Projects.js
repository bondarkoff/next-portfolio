import { Card } from '@/components/card/Card';
import { ProjectsContentLoader } from './ProjectsContentLoader';

import styles from './Projects.module.scss';

export const Projects = ({ items, loading = false }) => {
    return (
        <section className={styles.projects} id='projects'>
            <h2 className={styles['projects__title']}>Projects</h2>
            {loading ? (
                <ProjectsContentLoader />
            ) : (
                <div className={styles['projects__wrapper']}>
                    {items.map(item => (
                        <Card
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            subtitle={item.subtitle}
                            stack={item.stack}
                            demo={item.demo}
                            image={item.image}
                            github={item.github}
                            react={item.isReact}
                            js={item.isJS}
                            id={item.id}
                            type={item.type}
                        />
                    ))}
                </div>
            )}
        </section>
    );
};
