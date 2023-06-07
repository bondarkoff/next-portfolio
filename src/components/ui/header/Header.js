import Image from 'next/image';
import styles from './Header.module.scss';

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles['header__text']}>
                <h1 className={styles['header__text-title']}>Bondarkoff</h1>
                <p className={styles['header__text-descr']}>
                    Welcome to the extraordinary world of <span>Bondarkoff</span>, a versatile and
                    <br></br>
                    imaginative artist who skillfully navigates the realms of{' '}
                    <span>product design</span>,<br></br>
                    <span>photography</span> and <span>digital art</span>. With a keen eye for
                    detail and a relentless
                    <br></br>pursuit of innovation, <span>Bondarkoff</span> crafts captivating{' '}
                    <span>visual narratives</span>,<br></br>
                    immersive <span>digital realms</span>, and functional yet{' '}
                    <span>aesthetically pleasing products.</span>
                </p>
            </div>
            <div className='pos-r'>
                <Image
                    src={'/images/avatar.png'}
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
