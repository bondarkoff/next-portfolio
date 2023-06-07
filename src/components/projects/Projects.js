import { Card } from './card/Card';
import styles from './Projects.module.scss';

export const Projects = () => {
    return (
        <div className={styles.projects}>
            <h2 className={styles['projects__title']}>Projects</h2>
            <div className={styles['projects__wrapper']}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
};
