import styles from './ProjectDetails.module.scss';

export default function ProjectDetails({ project }) {
    return (
        <div>
            {project ? (
                <div className='container'>
                    <div className={styles.header}>
                        <h2 className={styles['header__title']}>{project.title}</h2>
                    </div>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
}
