export const projects = [
    {
        id: 1,
        title: 'Morent Car Rental',
        subtitle: 'A car rental website',
        description: 'SITE DESCRIPTION',
        stack: [
            'React + hooks',
            'React Router',
            'React Helmet',
            'React Skeleton',
            'React Context',
            'SCSS',
            'Axios',
            'css-shortcut',
        ],
        image: '/images/projects/cover-1.png',
        demo: 'https://react-vite-rent.vercel.app/cars',
        github: 'https://github.com/bondarkoff/react-vite-rent',
    },
    {
        id: 2,
        title: 'Morent Car Rental',
        subtitle: 'A car rental website',
        description: 'SITE DESCRIPTION',
        stack: ['React + hooks', 'React Router', 'React Helmet', 'Axios'],
        image: '/images/projects/cover-1.png',
        demo: 'https://react-vite-rent.vercel.app/cars',
        github: 'https://github.com/bondarkoff/react-vite-rent',
    },
    {
        id: 3,
        title: 'Morent Car Rental',
        subtitle: 'A car rental website',
        description: 'SITE DESCRIPTION',
        stack: ['React + hooks', 'React Router', 'React Helmet', 'Axios'],
        image: '/images/projects/cover-1.png',
        demo: 'https://react-vite-rent.vercel.app/cars',
        github: 'https://github.com/bondarkoff/react-vite-rent',
    },
    {
        id: 4,
        title: 'Morent Car Rental',
        subtitle: 'A car rental website',
        description: 'SITE DESCRIPTION',
        stack: ['React + hooks', 'React Router', 'React Helmet', 'Axios'],
        image: '/images/projects/cover-1.png',
        demo: 'https://react-vite-rent.vercel.app/cars',
        github: 'https://github.com/bondarkoff/react-vite-rent',
    },
];

export default function handler(req, res) {
    res.status(200).json(projects);
}
