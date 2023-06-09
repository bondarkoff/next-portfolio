import Image from 'next/image';
import Link from 'next/link';
import styles from './Card.module.scss';
import { ReactIcon } from './ReactIcon';
import { JavaScriptIcon } from './JavaScriptIcon';

export const Card = ({ title, subtitle, stack, image, react, id, type }) => {
    return (
        <Link href={`/project/${id}`}>
            <div className={styles.card}>
                <div className={styles['card__header']}>
                    <div className={styles['card__header-blur']}></div>
                    <div className={styles['card__header-text']}>
                        <h3 className={styles['card__header-title']}>{title}</h3>
                        <p className={styles['card__header-subtitle']}>{subtitle}</p>
                    </div>
                    <Image
                        src={image}
                        width={693}
                        height={355}
                        alt={title}
                        className={styles['card__header-image']}
                        priority={true}
                    />
                </div>
                <div className={styles['card__footer']}>
                    <div className={styles['card__footer-icon']}>
                        {react ? (
                            <ReactIcon width={28} height={28} />
                        ) : (
                            <JavaScriptIcon width={28} height={28} />
                        )}
                    </div>
                    <div className='d-flex flex-col'>
                        <div className={styles['card__footer-title']}>{type}</div>
                        <div>
                            <ul className={styles['card__footer-wrapper']}>
                                {stack.map((item, index) => (
                                    <li className={styles['card__footer-subtitle']} key={index}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};
