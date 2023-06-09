import { ReactIcon } from '@/components/card/ReactIcon';
import { JavaScriptIcon } from '@/components/card/JavaScriptIcon';

import styles from './ProjectDetails.module.scss';

export default function ProjectDetails({ project }) {
    return (
        <div>
            {project ? (
                <div className='container'>
                    <div className={styles.header}>
                        <div className={styles['header__text']}>
                            <h2 className={styles['header__text-title']}>{project.title}</h2>
                            <p>{project.description}</p>
                        </div>
                        <div className=''>
                            {project.isReact ? (
                                <ReactIcon width={300} height={300} />
                            ) : (
                                <JavaScriptIcon width={300} height={300} />
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
}
