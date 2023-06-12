import { useState } from 'react';
import { CSSIcon } from '../assets/CSSIcon';
import { HTMLIcon } from '../assets/HTMLIcon';
import { JavaScriptIcon } from '../assets/JavaScriptIcon';
import { ReactIcon } from '../assets/ReactIcon';

import styles from './Skills.module.scss';

export default function Skills() {
    const [hovered, setHovered] = useState(null);

    const handleCardHover = index => {
        setHovered(index);
    };

    const handleCardLeave = () => {
        setHovered(null);
    };

    return (
        <section className={styles.skills} id='skills'>
            <h2 className={styles['skills__title']}>Skills</h2>
            <div className={styles['skills__wrapper']}>
                <div
                    className={`${
                        hovered
                            ? hovered === false || styles['skills__card-notHovered']
                            : styles['skills__card']
                    }`}
                    onMouseEnter={() => handleCardHover(1)}
                    onMouseLeave={handleCardLeave}>
                    <h3 className={styles['skills__card-title']}>HTML</h3>
                    <div className={styles['skills__card-img']}>
                        {hovered === 1 ? (
                            <HTMLIcon
                                width={150}
                                height={150}
                                firstPath={'#E34F26'}
                                secondPath={'#EF652A'}
                                thirdPath={'#FFF'}
                            />
                        ) : (
                            <HTMLIcon
                                width={150}
                                height={150}
                                firstPath={'#AAAEB9'}
                                secondPath={'#3333'}
                                thirdPath={'#FFF'}
                            />
                        )}
                    </div>
                    <p className={styles['skills__card-descr']}>
                        It is he who creates the framework of your site or application, and the
                        fifth version will allow me to create a more SEO-optimized structure of your
                        product
                    </p>
                </div>

                <div
                    className={`${
                        hovered
                            ? hovered === false || styles['skills__card-notHovered']
                            : styles['skills__card']
                    }`}
                    onMouseEnter={() => handleCardHover(2)}
                    onMouseLeave={handleCardLeave}>
                    <h3 className={styles['skills__card-title']}>CSS</h3>
                    <div className={styles['skills__card-img']}>
                        {hovered === 2 ? (
                            <CSSIcon
                                width={150}
                                height={150}
                                firstPath={'#1B73BA'}
                                secondPath={'#1C88C7'}
                                thirdPath={'#FFF'}
                            />
                        ) : (
                            <CSSIcon
                                width={150}
                                height={150}
                                firstPath={'#AAAEB9'}
                                secondPath={'#3333'}
                                thirdPath={'#FFF'}
                            />
                        )}
                    </div>
                    <p className={styles['skills__card-descr']}>
                        This style language allows me to create absolutely any look for your site or
                        application. Everything is limited only by your imagination!
                    </p>
                </div>
                <div
                    className={`${
                        hovered
                            ? hovered === false || styles['skills__card-notHovered']
                            : styles['skills__card']
                    }`}
                    onMouseEnter={() => handleCardHover(3)}
                    onMouseLeave={handleCardLeave}>
                    <h3 className={styles['skills__card-title']}>JavaScript</h3>
                    <div className={styles['skills__card-img']}>
                        {hovered === 3 ? (
                            <JavaScriptIcon width={150} height={150} firstPath={'#FFD600'} />
                        ) : (
                            <JavaScriptIcon width={150} height={150} firstPath={'#AAAEB9'} />
                        )}
                    </div>
                    <p className={styles['skills__card-descr']}>
                        This programming language allows you to bring anything to life: sliders,
                        windows, tooltips, tabs, receiving data from the server, and much more.
                    </p>
                </div>
                <div
                    className={`${
                        hovered
                            ? hovered === false || styles['skills__card-notHovered']
                            : styles['skills__card']
                    }`}
                    onMouseEnter={() => handleCardHover(4)}
                    onMouseLeave={handleCardLeave}>
                    <h3 className={styles['skills__card-title']}>React</h3>
                    <div className={styles['skills__card-img']}>
                        {hovered === 4 ? (
                            <ReactIcon width={150} height={150} firstPath={'#61DAFB'} />
                        ) : (
                            <ReactIcon width={150} height={150} firstPath={'#AAAEB9'} />
                        )}
                    </div>
                    <p className={styles['skills__card-descr']}>
                        React is a free and open-source front-end JavaScript library for building
                        user interfaces based on UI components.
                    </p>
                </div>
            </div>
        </section>
    );
}
