import { Card } from '@/components/card/Card';
import styles from './Projects.module.scss';

export const Projects = ({ items }) => {
    return (
        <div className={styles.projects}>
            <h2 className={styles['projects__title']}>Projects</h2>
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
                        id={item.id}
                        type={item.type}
                    />
                ))}
            </div>
        </div>
    );
};
