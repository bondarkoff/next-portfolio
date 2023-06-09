import Head from 'next/head';

import { CardTags } from '@/components/tags/Tags';
import { ReactIcon } from '@/components/card/ReactIcon';
import { JavaScriptIcon } from '@/components/card/JavaScriptIcon';
import { Slider } from '@/components/slider/Slider';

import styles from './ProjectDetails.module.scss';
import Link from 'next/link';
import Image from 'next/image';

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
                                <Link href='/' className={styles['header__text-link']}>
                                    <Image
                                        src='/images/arrow.svg'
                                        width={20}
                                        height={20}
                                        alt='Back to home'
                                    />
                                    <p>Back to home</p>
                                </Link>
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
        </>
    );
}
