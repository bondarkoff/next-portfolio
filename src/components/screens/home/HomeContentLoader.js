import React from 'react';
import ContentLoader from 'react-content-loader';

export const HomeContentLoader = () => {
    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 690px)',
                gridAutoRows: 'repeat(2, 480px)',
                gridColumGap: '60px',
                gridRowGap: '60px',
                justifyContent: 'center',
                paddingTop: '120px',
            }}>
            <ContentLoader
                speed={2}
                width={690}
                height={480}
                viewBox='0 0 690 480'
                backgroundColor='#333333'
                foregroundColor='#aaaeb9'
                className='pr-50'
                uniqueKey='1'>
                <rect x='0' y='0' rx='40' ry='40' width='690' height='480' />
            </ContentLoader>
            <ContentLoader
                speed={2}
                width={690}
                height={480}
                viewBox='0 0 690 480'
                backgroundColor='#333333'
                foregroundColor='#aaaeb9'
                className='pr-50'
                uniqueKey='2'>
                <rect x='0' y='0' rx='40' ry='40' width='690' height='480' />
            </ContentLoader>
            <ContentLoader
                speed={2}
                width={690}
                height={480}
                viewBox='0 0 690 480'
                backgroundColor='#333333'
                foregroundColor='#aaaeb9'
                className='pr-50'
                uniqueKey='3'>
                <rect x='0' y='0' rx='40' ry='40' width='690' height='480' />
            </ContentLoader>
            <ContentLoader
                speed={2}
                width={690}
                height={480}
                viewBox='0 0 690 480'
                backgroundColor='#333333'
                foregroundColor='#aaaeb9'
                className='pr-50'
                uniqueKey='4'>
                <rect x='0' y='0' rx='40' ry='40' width='690' height='480' />
            </ContentLoader>
        </div>
    );
};
