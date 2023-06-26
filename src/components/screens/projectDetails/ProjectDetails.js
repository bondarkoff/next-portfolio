import Head from 'next/head';
import Link from 'next/link';

import { CardTags } from '@/components/tags/Tags';
import { ReactIcon } from '@/components/assets/ReactIcon';
import { JavaScriptIcon } from '@/components/assets/JavaScriptIcon';
import { Footer } from '@/components/ui/footer/Footer';
import { Slider } from '@/components/slider/Slider';
import { ArrowIcon } from '@/components/assets/ArrowIcon';

import styles from './ProjectDetails.module.scss';
import { NPMIcon } from '@/components/assets/NPMIcon';

export default function ProjectDetails({ project, loading = false }) {
    const { title, description, functionality, stack, id, github, demo, isReact, isJS } = project;

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
            </Head>
            <div>
                {project ? (
                    <div className='projects-container'>
                        <div className={styles['header__nav']}>
                            <Link href='/' className={styles['header__text-link']}>
                                <ArrowIcon width={20} height={20} />
                                <p>Back to home</p>
                            </Link>
                            <div className='d-flex jcsb aic'>
                                {id <= 1 ? null : (
                                    <Link
                                        href={`/project/${parseInt(id) - 1}`}
                                        className={styles['header__text-previous']}>
                                        <ArrowIcon width={20} height={20} />
                                        <p>To the previous project</p>
                                    </Link>
                                )}
                                {id >= 6 ? null : (
                                    <Link
                                        href={`/project/${parseInt(id) + 1}`}
                                        className={styles['header__text-next']}>
                                        <p>To the next project</p>
                                        <ArrowIcon width={20} height={20} />
                                    </Link>
                                )}
                            </div>
                        </div>
                        <div className={styles.header}>
                            <div className={styles['header__text']}>
                                {loading ? (
                                    <div>Loading...</div>
                                ) : (
                                    <h2 className={styles['header__text-title']}>
                                        {title}
                                        <span className={styles['header__text-divider']}>-</span>
                                        <span className={styles['header__text-span']}>
                                            {isReact ? 'React' : isJS ? 'Js' : 'NPM'}
                                        </span>
                                    </h2>
                                )}
                                {loading ? (
                                    <div>Loading...</div>
                                ) : (
                                    <div className={styles['header__text-descr']}>
                                        <p className='mt-10'>{description}</p>
                                        <p className='mt-10'>{functionality}</p>
                                    </div>
                                )}
                                {stack ? (
                                    <div className='mt-3'>
                                        <CardTags stack={stack} />
                                    </div>
                                ) : (
                                    <div>Loading...</div>
                                )}
                                {loading ? (
                                    <div>Loading...</div>
                                ) : (
                                    <div className='d-flex aic'>
                                        {github ? (
                                            <a
                                                href={github}
                                                className={styles['header__text-btn']}
                                                target='_blank'>
                                                Github
                                            </a>
                                        ) : (
                                            <div>Loading...</div>
                                        )}
                                        {demo ? (
                                            <a
                                                href={demo}
                                                className={styles['header__text-btn']}
                                                target='_blank'>
                                                Demo
                                            </a>
                                        ) : (
                                            <div>Loading...</div>
                                        )}
                                    </div>
                                )}
                            </div>
                            {loading ? null : (
                                <div className={styles['header__logo']}>
                                    {isReact ? (
                                        <ReactIcon width={450} height={450} firstPath={'#AAAEB9'} />
                                    ) : isJS ? (
                                        <JavaScriptIcon
                                            width={450}
                                            height={450}
                                            firstPath={'#AAAEB9'}
                                        />
                                    ) : (
                                        <NPMIcon width={450} height={450} firstPath={'#AAAEB9'} />
                                    )}
                                </div>
                            )}
                        </div>
                        {loading ? <div>Loading...</div> : <Slider project={project} />}
                    </div>
                ) : (
                    <div>Loading...</div>
                )}
            </div>
            <Footer />
        </>
    );
}
