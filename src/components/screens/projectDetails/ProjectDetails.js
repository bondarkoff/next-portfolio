import Head from 'next/head';
import Link from 'next/link';

import { CardTags } from '@/components/tags/Tags';
import { ReactIcon } from '@/components/assets/ReactIcon';
import { JavaScriptIcon } from '@/components/assets/JavaScriptIcon';
import { Footer } from '@/components/ui/footer/Footer';
import { Slider } from '@/components/slider/Slider';
import { ArrowIcon } from '@/components/assets/ArrowIcon';

import styles from './ProjectDetails.module.scss';

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
                                <div className='d-flex jcsb aic'>
                                    <Link href='/' className={styles['header__text-link']}>
                                        <ArrowIcon width={20} height={20} />
                                        <p>Back to home</p>
                                    </Link>
                                    <div className='d-flex jcsb aic'>
                                        {project.id <= 1 ? null : (
                                            <Link
                                                href={`/project/${parseInt(project.id) - 1}`}
                                                className={styles['header__text-previous']}>
                                                <ArrowIcon width={20} height={20} />
                                                <p>To the previous project</p>
                                            </Link>
                                        )}
                                        {project.id >= 4 ? null : (
                                            <Link
                                                href={`/project/${parseInt(project.id) + 1}`}
                                                className={styles['header__text-next']}>
                                                <p>To the next project</p>
                                                <ArrowIcon width={20} height={20} />
                                            </Link>
                                        )}
                                    </div>
                                </div>
                                <h2 className={styles['header__text-title']}>{project.title}</h2>
                                <div className={styles['header__text-descr']}>
                                    <p className='mt-10'>{project.description}</p>
                                    <p className='mt-10'>{project.functionality}</p>
                                </div>
                                {project.stack ? (
                                    <div className='mt-3'>
                                        <CardTags stack={project.stack} />
                                    </div>
                                ) : (
                                    <div>Loading...</div>
                                )}
                                <div className='d-flex aic'>
                                    {project.github ? (
                                        <a
                                            href={project.github}
                                            className={styles['header__text-btn']}
                                            target='_blank'>
                                            Github
                                        </a>
                                    ) : null}
                                    {project.demo ? (
                                        <a
                                            href={project.demo}
                                            className={styles['header__text-btn']}
                                            target='_blank'>
                                            Demo
                                        </a>
                                    ) : null}
                                </div>
                            </div>
                            <div>
                                {project.isReact ? (
                                    <ReactIcon width={450} height={450} />
                                ) : (
                                    <JavaScriptIcon width={450} height={450} />
                                )}
                            </div>
                        </div>
                        <Slider project={project} />
                    </div>
                ) : (
                    <div>Loading...</div>
                )}
            </div>
            <Footer />
        </>
    );
}
