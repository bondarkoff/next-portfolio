import styles from './Footer.module.scss';

export const Footer = ({ loading = false }) => {
    return (
        <footer className={styles.footer}>
            <p className={styles.footerText}>Created by {loading ? 'who?' : 'Yehor Bondarkov'}</p>
        </footer>
    );
};
