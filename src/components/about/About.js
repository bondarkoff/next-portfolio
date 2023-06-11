import { useState } from 'react';
import Image from 'next/image';

import { GithubIcon } from '../assets/GithubIcon';
import { GmailIcon } from '../assets/GmailIcon';
import { LinkedinIcon } from '../assets/LinkedinIcon';
import { TelegramIcon } from '../assets/TelegramIcon';

import styles from './About.module.scss';

export default function About() {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className={styles.about}>
            <div className={styles['about__text']}>
                <h2 className={styles['about__text-title']}>About me</h2>
                <p className='mt-10'>
                    Greetings! My name is <span>Yehor Bondarkov</span> and I am a{' '}
                    <span>Junior Frontend Developer</span> who is passionate about creating
                    beautiful and practical digital experiences. Besides sites, I love{' '}
                    <span>travelling</span>, <span>cars</span> and <span>games</span>. Self-learner
                    certified by Udemy.
                </p>
                <div className=''>
                    <a className={styles['about__text-link']} href='#'>
                        Download my CV
                    </a>
                </div>
                <div className='mt-20 d-flex flex-row aic'>
                    <a
                        href='https://www.linkedin.com/in/yehor-bondarkov/'
                        target='_blank'
                        className={styles['about__text-contact']}>
                        <LinkedinIcon width={50} height={50} />
                    </a>
                    <a
                        href='https://github.com/bondarkoff'
                        target='_blank'
                        className={styles['about__text-contact']}>
                        <GithubIcon width={50} height={50} />
                    </a>
                    <a
                        href='https://t.me/bondarkoveg'
                        target='_blank'
                        className={styles['about__text-contact']}>
                        <TelegramIcon width={50} height={50} />
                    </a>
                    <a
                        href='mailto:yehor.bondarkoff@gmail.com'
                        target='_blank'
                        className={styles['about__text-contact']}>
                        <GmailIcon width={50} height={50} />
                    </a>
                </div>
            </div>

            <div
                className={styles['about__wrapper']}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <div
                    className={`${styles['about__wrapper-first']} ${styles['image-container']}`}
                    style={{ opacity: isHovered ? 0 : 1 }}>
                    <Image
                        src='/images/image-1.jpg'
                        width={500}
                        height={500}
                        alt='Picture'
                        className='image-1'
                    />
                </div>
                <div
                    className={`${styles['about__wrapper-second']} ${styles['image-container']}`}
                    style={{
                        opacity: isHovered ? 1 : 0,
                        transform: isHovered ? 'rotate(0deg)' : 'rotate(8deg)',
                    }}>
                    <Image
                        src='/images/image-2.jpg'
                        width={500}
                        height={500}
                        alt='Picture'
                        className='image-2'
                    />
                </div>
            </div>
        </div>
    );
}
