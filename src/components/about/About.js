import Image from 'next/image';
import styles from './About.module.scss';

export const About = () => {
    return (
        <div className={styles.about}>
            <div className='text'>
                <h1 className={styles.title}>Bondarkoff</h1>
                <p className={styles.description}>
                    Welcome to the extraordinary world of <span>Bondarkoff</span>, a versatile and
                    <br></br>
                    imaginative artist who skillfully navigates the realms of
                    <span>product design</span>,<br></br>
                    <span>photography</span> and <span>digital art</span>. With a keen eye for
                    detail and a relentless
                    <br></br>pursuit of innovation, <span>Bondarkoff</span> crafts captivating
                    <span>visual narratives</span>,<br></br>
                    immersive <span>digital realms</span>, and functional yet
                    <span>aesthetically pleasing products.</span>
                </p>
            </div>
            <div className='pos-r'>
                <Image src={'/avatar.png'} alt='Avatar Image' width={350} height={350} priority />
                <div className={styles.blur}></div>
            </div>
        </div>
    );
};
