import ContentLoader from 'react-content-loader';
import Image from 'next/image';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './Slider.module.scss';
import 'swiper/css';
import 'swiper/css/pagination';

export const Slider = ({ project, loading = false }) => {
    return (
        <>
            {project.image ? (
                <div className={styles.slider}>
                    <h2 className={styles['slider__title']}>Preview project</h2>
                    <div className={styles['slider__wrapper']}>
                        <Swiper
                            modules={[Pagination]}
                            spaceBetween={40}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            style={{
                                '--swiper-pagination-color': '#444',
                                '--swiper-pagination-bullet-inactive-color': '#aaaeb9',
                                '--swiper-pagination-bullet-inactive-opacity': '1',
                                '--swiper-pagination-bullet-size': '16px',
                                '--swiper-pagination-bullet-horizontal-gap': '6px',
                            }}>
                            <SwiperSlide>
                                <div className={styles['slider__item']}>
                                    <Image
                                        src={project.image[0]}
                                        alt={project.title}
                                        width={1300}
                                        height={660}
                                        className={styles['slider__item-img']}
                                        priority
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={styles['slider__item']}>
                                    <Image
                                        src={project.image[1]}
                                        alt='project'
                                        width={1300}
                                        height={660}
                                        priority
                                        className={styles['slider__item-img']}
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={styles['slider__item']}>
                                    <Image
                                        src={project.image[2]}
                                        alt='project'
                                        width={1300}
                                        height={660}
                                        priority
                                        className={styles['slider__item-img']}
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={styles['slider__item']}>
                                    <Image
                                        src={project.image[3]}
                                        alt='project'
                                        width={1300}
                                        height={660}
                                        priority
                                        className={styles['slider__item-img']}
                                    />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            ) : (
                <ContentLoader
                    speed={2}
                    width={1440}
                    height={873}
                    viewBox='0 0 1440 873'
                    backgroundColor='#333333'
                    foregroundColor='#aaaeb9'>
                    <rect x='0' y='0' rx='8' ry='8' width='950' height='48' />
                    <rect x='20' y='75' rx='6' ry='6' width='1300' height='660' />
                </ContentLoader>
            )}
        </>
    );
};
