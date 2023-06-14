import ContentLoader from 'react-content-loader';
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
                    <div className='container'>
                        <div className={styles.header}>
                            <div className={styles['header__text']}>
                                <div className='d-flex jcsb aic'>
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

                                {loading ? (
                                    <ContentLoader
                                        speed={2}
                                        width={950}
                                        height={90}
                                        viewBox='0 0 950 90'
                                        backgroundColor='#333333'
                                        foregroundColor='#aaaeb9'
                                        uniqueKey='title'>
                                        <rect x='0' y='0' rx='8' ry='8' width='950' height='90' />
                                    </ContentLoader>
                                ) : (
                                    <h2 className={styles['header__text-title']}>{title}</h2>
                                )}
                                {loading ? (
                                    <ContentLoader
                                        speed={2}
                                        width={950}
                                        height={178}
                                        viewBox='0 0 950 178'
                                        backgroundColor='#333333'
                                        foregroundColor='#aaaeb9'
                                        className='mt-15'
                                        uniqueKey='description'>
                                        <rect x='0' y='0' rx='8' ry='8' width='950' height='178' />
                                    </ContentLoader>
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
                                    <ContentLoader
                                        speed={2}
                                        width={950}
                                        height={30}
                                        viewBox='0 0 950 30'
                                        backgroundColor='#333333'
                                        foregroundColor='#aaaeb9'
                                        className='mt-10'
                                        uniqueKey='stack'>
                                        <rect x='0' y='0' rx='8' ry='8' width='100' height='30' />
                                        <rect x='110' y='0' rx='8' ry='8' width='100' height='30' />
                                        <rect x='220' y='0' rx='8' ry='8' width='100' height='30' />
                                        <rect x='330' y='0' rx='8' ry='8' width='100' height='30' />
                                        <rect x='440' y='0' rx='8' ry='8' width='100' height='30' />
                                    </ContentLoader>
                                )}
                                {loading ? (
                                    <ContentLoader
                                        speed={2}
                                        width={950}
                                        height={40}
                                        viewBox='0 0 950 40'
                                        backgroundColor='#333333'
                                        foregroundColor='#aaaeb9'
                                        className='mt-5'
                                        uniqueKey='buttons'>
                                        <rect x='0' y='0' rx='6' ry='6' width='150' height='40' />
                                        <rect x='160' y='0' rx='6' ry='6' width='150' height='40' />
                                    </ContentLoader>
                                ) : (
                                    <div className='d-flex aic'>
                                        {github ? (
                                            <a
                                                href={github}
                                                className={styles['header__text-btn']}
                                                target='_blank'>
                                                Github
                                            </a>
                                        ) : null}
                                        {demo ? (
                                            <a
                                                href={demo}
                                                className={styles['header__text-btn']}
                                                target='_blank'>
                                                Demo
                                            </a>
                                        ) : null}
                                    </div>
                                )}
                            </div>
                            {loading ? (
                                <ContentLoader
                                    speed={2}
                                    width={450}
                                    height={450}
                                    viewBox='0 0 450 450'
                                    backgroundColor='#333333'
                                    foregroundColor='#aaaeb9'
                                    uniqueKey='image'>
                                    <rect x='0' y='0' rx='100' ry='100' width='450' height='450' />
                                </ContentLoader>
                            ) : (
                                <div>
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
                        <Slider project={project} loading={loading} />
                    </div>
                ) : (
                    <div>Loading...</div>
                )}
            </div>
            <Footer />
        </>
    );
}
