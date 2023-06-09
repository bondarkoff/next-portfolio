import ContentLoader from 'react-content-loader';

import styles from './Skills.module.scss';

export const SkillsContentLoader = () => {
    return (
        <ContentLoader
            speed={2}
            width={300}
            height={420}
            viewBox='0 0 300 420'
            backgroundColor='#333333'
            foregroundColor='#aaaeb9'
            uniqueKey='skills-loader'
            className={styles['skills__wrapper-loader']}>
            <rect x='0' y='0' rx='20' ry='20' width='300' height='420' />
        </ContentLoader>
    );
};
