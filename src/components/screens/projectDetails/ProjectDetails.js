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
                            <div className={styles['header__text-descr']}>
                                <p className='mt-10'>{project.description}</p>
                                <p className='mt-10'>{project.function}</p>
                            </div>
                        </div>
                        <div className=''>
                            {project.isReact ? (
                                <ReactIcon width={450} height={450} />
                            ) : (
                                <JavaScriptIcon width={450} height={450} />
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
