import Head from 'next/head';

import { ReactIcon } from '@/components/card/ReactIcon';
import { JavaScriptIcon } from '@/components/card/JavaScriptIcon';

import styles from './ProjectDetails.module.scss';
import { CardTags } from '@/components/tags/Tags';

export default function ProjectDetails({ project }) {
    return (
        <>
            <Head>
                <title>{project.title}</title>
                <meta name='description' content={project.description} />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
            </Head>
            <div>
                {project ? (
                    <div className='container'>
                        <div className={styles.header}>
                            <div className={styles['header__text']}>
                                <h2 className={styles['header__text-title']}>{project.title}</h2>
                                <div className={styles['header__text-descr']}>
                                    <p className='mt-10'>{project.description}</p>
                                    <p className='mt-10'>{project.functionality}</p>
                                </div>
                                {project.stack ? (
                                    <CardTags stack={project.stack} />
                                ) : (
                                    <div>Loading...</div>
                                )}
                            </div>
                            <div>
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
        </>
    );
}
