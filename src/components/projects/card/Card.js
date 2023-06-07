import Image from 'next/image';
import styles from './Card.module.scss';

export const Card = () => {
    return (
        <div className={styles.card}>
            <div className={styles['card__header']}>
                <div className={styles['card__header-text']}>
                    <h3 className={styles['card__header-title']}>Design Projects</h3>
                    <p className={styles['card__header-subtitle']}>Replace with cover</p>
                </div>
                <Image
                    src={'/images/bg/bg-1.png'}
                    width={693}
                    height={355}
                    alt='Card Background'
                    className={styles['card__header-image']}
                    priority={true}
                />
            </div>
            <div className={styles['card__footer']}>
                <div className={styles['card__footer-icon']}>
                    <svg
                        width='16'
                        height='16'
                        viewBox='0 0 16 16'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                            d='M14.0142 13.3072L13.3042 14.0172C13.1042 14.2172 12.7942 14.2172 12.5942 14.0172C12.3942 13.8172 12.3942 13.5072 12.5942 13.3072L13.3042 12.5972L11.3642 10.6572L10.6542 11.3672C10.4542 11.5672 10.1442 11.5672 9.94425 11.3672C9.74425 11.1672 9.74425 10.8572 9.94425 10.6572L10.6542 9.94716L8.71425 8.00716L8.00425 8.71716C7.80425 8.91716 7.49425 8.91716 7.29425 8.71716C7.09425 8.51716 7.09425 8.20716 7.29425 8.00716L8.00425 7.29716L6.05425 5.34716L5.34425 6.05716C5.14425 6.25716 4.83425 6.25716 4.63425 6.05716C4.43425 5.85716 4.43425 5.54716 4.63425 5.34716L5.34425 4.63716L3.40425 2.69716L2.69425 3.40716C2.49425 3.60716 2.18425 3.60716 1.98425 3.40716C1.78425 3.20716 1.78425 2.89716 1.98425 2.69716L2.69425 1.98716L1.20425 0.497157C0.894248 0.187157 0.354248 0.407158 0.354248 0.857158V13.6472C0.354248 14.7472 1.25425 15.6472 2.35425 15.6472H15.1442C15.5942 15.6472 15.8142 15.1072 15.4942 14.7972L14.0142 13.3072ZM3.35425 11.6472V6.88716L9.11425 12.6472H4.35425C3.80425 12.6472 3.35425 12.1972 3.35425 11.6472Z'
                            fill='#656A7B'
                        />
                    </svg>
                </div>
                <div>
                    <div className={styles['card__footer-title']}>Design</div>
                    <div className={styles['card__footer-subtitle']}>My design projects</div>
                </div>
            </div>
        </div>
    );
};
