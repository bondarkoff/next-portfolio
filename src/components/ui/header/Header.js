import ContentLoader from 'react-content-loader';
import Typed from 'react-typed';
import Image from 'next/image';
import styles from './Header.module.scss';

export const Header = ({ loading = false }) => {
    return (
        <header className={styles.header}>
            <div className={styles['header__text']}>
                {loading ? (
                    <ContentLoader
                        rtl
                        speed={5}
                        width={1100}
                        height={100}
                        viewBox='0 0 1100 100'
                        backgroundColor='#333333'
                        foregroundColor='#aaaeb9'
                        uniqueKey='header__title'
                        className={styles['header__text-title-loader']}>
                        <rect x='0' y='0' rx='9' ry='9' width='1100' height='100' />
                    </ContentLoader>
                ) : (
                    <div className='d-flex flex-row aic'>
                        <h1 className={styles['header__text-title']}>
                            Bondarkoff <span>—</span>
                        </h1>
                        <Typed
                            strings={[
                                'Frontend Developer.',
                                'Nice guy.',
                                'Gamer.',
                                'Music Lover.',
                                'Self Learner.',
                                'Web-Developer.',
                                'Gym Goer.',
                                'Traveler.',
                            ]}
                            typeSpeed={85}
                            backSpeed={75}
                            loop
                            className={styles['header__text-typed']}
                        />
                    </div>
                )}
                <p className={styles['header__text-quote']}>
                    <span>My motto is:</span>{' '}
                    {loading ? (
                        <i>Whats my motto??? 0_0</i>
                    ) : (
                        <i>
                            &quot;If you wanna win the lottery, you have to make the money to buy a
                            ticket.&quot;
                        </i>
                    )}
                </p>
            </div>
            {loading ? (
                <ContentLoader
                    rtl
                    speed={2}
                    width={300}
                    height={300}
                    viewBox='0 0 300 300'
                    backgroundColor='#333333'
                    foregroundColor='#aaaeb9'
                    className={styles['header__image-loader']}
                    uniqueKey='header-image'>
                    <rect x='0' y='0' rx='50' ry='50' width='300' height='300' />
                </ContentLoader>
            ) : (
                <div className={styles['header__image-wrapper']}>
                    <Image
                        src={'/images/sticker.webp'}
                        alt='Avatar Image'
                        width={350}
                        height={350}
                        priority
                        className={styles['header__image']}
                    />
                    <div className={styles['header__blur']}></div>
                </div>
            )}
        </header>
    );
};
