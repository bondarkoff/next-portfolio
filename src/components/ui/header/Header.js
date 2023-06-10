import Typed from 'react-typed';
import Image from 'next/image';
import styles from './Header.module.scss';

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles['header__text']}>
                <div className='d-flex flex-row aic'>
                    <h1 className={styles['header__text-title']}>Bondarkoff —</h1>
                    <Typed
                        strings={[
                            'Frontend Developer.',
                            'Nice guy.',
                            'Gamer.',
                            'Music Lover.',
                            'Self Learner.',
                            'Web-Developer',
                            'Gym Goer.',
                            'Traveler.',
                        ]}
                        typeSpeed={85}
                        backSpeed={75}
                        loop
                        className={styles['header__text-typed']}
                    />
                </div>
                <p className={styles['header__text-quote']}>
                    <span>My motto is:</span>{' '}
                    <i>
                        &quot;If you wanna win the lottery, you have to make the money to buy a
                        ticket.&quot;
                    </i>
                </p>
            </div>
            <div className='pos-r'>
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
        </header>
    );
};
