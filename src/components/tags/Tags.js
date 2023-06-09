import styles from './Tags.module.scss';

export const CardTags = ({ stack }) => {
    return (
        <ul className={styles.tags}>
            {stack.map((item, index) => (
                <li className={styles['tags__item']} key={index}>
                    {item}
                </li>
            ))}
        </ul>
    );
};
