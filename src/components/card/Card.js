import Image from 'next/image';
import Link from 'next/link';

import { ReactIcon } from '../assets/ReactIcon';
import { JavaScriptIcon } from '../assets/JavaScriptIcon';
import { CardTags } from '../tags/Tags';
import { NPMIcon } from '../assets/NPMIcon';

import styles from './Card.module.scss';

export const Card = ({ title, subtitle, stack, image, react, id, type, js }) => {
    console.log(title, react, js);
    return (
        <Link href={`/project/${id}`} crossOrigin=''>
            <div className={styles.card}>
                <div className={styles['card__header']}>
                    <div className={styles['card__header-blur']}></div>
                    <div className={styles['card__header-text']}>
                        <h3 className={styles['card__header-title']}>{title}</h3>
                        <p className={styles['card__header-subtitle']}>{subtitle}</p>
                    </div>
                    <Image
                        src={image[0]}
                        width={693}
                        height={355}
                        alt={title}
                        className={styles['card__header-image']}
                        priority
                        placeholder='Cover Project Image'
                        blurDataURL={image[0]}
                    />
                </div>
                <div className={styles['card__footer']}>
                    <div className={styles['card__footer-icon']}>
                        {react ? (
                            <ReactIcon width={28} height={28} firstPath={'#AAAEB9'} />
                        ) : js ? (
                            <JavaScriptIcon width={28} height={28} firstPath={'#AAAEB9'} />
                        ) : (
                            <NPMIcon width={28} height={28} firstPath={'#AAAEB9'} />
                        )}
                    </div>
                    <div className='d-flex flex-col'>
                        <div className={styles['card__footer-title']}>{type}</div>
                        <CardTags stack={stack} />
                    </div>
                </div>
            </div>
        </Link>
    );
};
