import ContentLoader from 'react-content-loader';
import styles from './Projects.module.scss';

export const ProjectsContentLoader = () => {
    return (
        <div className={styles['projects__wrapper']}>
            <ContentLoader
                speed={2}
                width={690}
                height={480}
                viewBox='0 0 690 480'
                backgroundColor='#333333'
                foregroundColor='#aaaeb9'
                uniqueKey='1'
                className={styles['projects__loader']}>
                <rect x='0' y='0' rx='40' ry='40' width='690' height='480' />
            </ContentLoader>
            <ContentLoader
                speed={2}
                width={690}
                height={480}
                viewBox='0 0 690 480'
                backgroundColor='#333333'
                foregroundColor='#aaaeb9'
                uniqueKey='2'
                className={styles['projects__loader']}>
                <rect x='0' y='0' rx='40' ry='40' width='690' height='480' />
            </ContentLoader>
            <ContentLoader
                speed={2}
                width={690}
                height={480}
                viewBox='0 0 690 480'
                backgroundColor='#333333'
                foregroundColor='#aaaeb9'
                uniqueKey='3'
                className={styles['projects__loader']}>
                <rect x='0' y='0' rx='40' ry='40' width='690' height='480' />
            </ContentLoader>
            <ContentLoader
                speed={2}
                width={690}
                height={480}
                viewBox='0 0 690 480'
                backgroundColor='#333333'
                foregroundColor='#aaaeb9'
                uniqueKey='4'
                className={styles['projects__loader']}>
                <rect x='0' y='0' rx='40' ry='40' width='690' height='480' />
            </ContentLoader>
            <ContentLoader
                speed={2}
                width={690}
                height={480}
                viewBox='0 0 690 480'
                backgroundColor='#333333'
                foregroundColor='#aaaeb9'
                uniqueKey='4'
                className={styles['projects__loader']}>
                <rect x='0' y='0' rx='40' ry='40' width='690' height='480' />
            </ContentLoader>
            <ContentLoader
                speed={2}
                width={690}
                height={480}
                viewBox='0 0 690 480'
                backgroundColor='#333333'
                foregroundColor='#aaaeb9'
                uniqueKey='4'
                className={styles['projects__loader']}>
                <rect x='0' y='0' rx='40' ry='40' width='690' height='480' />
            </ContentLoader>
        </div>
    );
};
