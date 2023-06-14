export const projects = [
    {
        id: '1',
        title: 'Morent Car Rental',
        subtitle: 'A car rental website',
        description:
            'A web application that provides information about available rental cars. The homepage features a list of available rental cars. Each car is presented in a card format, displaying key information such as a photo, model, price, and availability.',
        functionality:
            'The website offers various functional features to ensure convenience and user-friendliness. Users can browse the list of available cars, filter them by name (such as model or manufacturer), and view detailed information about each car, including user reviews. Deployed on Vercel and Netlify.',
        stack: [
            'React + hooks',
            'React Router',
            'React Helmet',
            'React Skeleton',
            'SCSS',
            'Axios',
            'css-shortcut',
        ],
        image: [
            '/images/projects/project-1/cover-1.png',
            '/images/projects/project-1/cover-2.png',
            '/images/projects/project-1/cover-3.png',
            '/images/projects/project-1/cover-4.png',
        ],
        demo: 'https://react-vite-rent.vercel.app/cars',
        github: 'https://github.com/bondarkoff/react-vite-rent',
        type: 'Web Application',
        isReact: true,
        isJS: false,
    },
    {
        id: '2',
        title: 'Marvel Information Portal',
        subtitle: 'A Marvel universe information portal',
        description:
            'A web application that provides information about Marvel comic characters. The website interface is user-friendly, allowing users to navigate effortlessly through sections and find the desired information.',
        functionality:
            'In the "Characters" section, users can browse a list of Marvel characters and access detailed information about each character, including the comics in which they have appeared, images, brief descriptions, and links to Wikipedia for more information. In the "Comics" section, information about various Marvel comics is provided. Deployed on Vercel.',
        stack: [
            'React + hooks',
            'React Router',
            'React Helmet',
            'React Skeleton',
            'Prop-Types',
            'SCSS',
        ],
        image: [
            '/images/projects/project-2/cover-1.png',
            '/images/projects/project-2/cover-2.png',
            '/images/projects/project-2/cover-3.png',
            '/images/projects/project-2/cover-4.png',
        ],
        demo: 'https://react-marvel-two.vercel.app/',
        github: 'https://github.com/bondarkoff/react-marvel',
        type: 'Web Application',
        isReact: true,
        isJS: false,
    },
    {
        id: '3',
        title: 'React Sneakers',
        subtitle: 'A sneakers online store',
        description:
            'A web application that showcases and sells sneakers. The homepage displays a collection of sneakers in a grid format, allowing users to easily browse through the available options.',
        functionality:
            'Users can view the collection of sneakers and explore detailed information about each pair, including product images and pricing. Additionally, users can add sneakers to their cart and proceed to a checkout page to complete their purchase. Deployed on Vercel and Netlify.',
        stack: ['React + hooks', 'React Router', 'React Skeleton', 'Axios', 'SCSS', 'Macro-css'],
        image: [
            '/images/projects/project-3/cover-1.png',
            '/images/projects/project-3/cover-2.png',
            '/images/projects/project-3/cover-3.png',
            '/images/projects/project-3/cover-4.png',
        ],
        demo: 'https://react-sneakers-fawn.vercel.app/',
        github: 'https://github.com/bondarkoff/react-sneakers',
        type: 'Web Application',
        isReact: true,
        isJS: false,
    },
    {
        id: '4',
        title: 'Website Portfolio',
        subtitle: 'My own old portfolio',
        description:
            'My old personal website showcasing my portfolio and works. The website design aims for clarity and ease of use, with a focus on visually representing my works.',
        functionality:
            'The website provides the ability to view my portfolio and browse through my projects. The "Works" section presents my works with descriptions of each project and corresponding images. Contact information is also provided, allowing users to reach out to me for inquiries or questions.',
        stack: ['JavaScript', 'SCSS', 'Gulp'],
        image: [
            '/images/projects/project-4/cover-1.png',
            '/images/projects/project-4/cover-2.png',
            '/images/projects/project-4/cover-3.png',
            '/images/projects/project-4/cover-4.png',
        ],
        demo: '',
        github: 'https://github.com/bondarkoff/DarkPortfolio',
        type: 'Website',
        isReact: false,
        isJS: true,
    },
    {
        id: '5',
        title: 'This One :)',
        subtitle: 'My own portfolio',
        description:
            'My own personal website showcasing my portfolio and works. The website design aims for clarity and ease of use, with a focus on visually representing my works.',
        functionality:
            'The website provides the ability to view my portfolio and browse through my projects. The "Projects" section presents my works with descriptions of each project and corresponding images. Contact information is also provided, allowing users to reach out to me for inquiries or questions. Develop by NextJS 13 and deployed on Vercel.',
        stack: [
            'React + hooks',
            'React Skeleton',
            'React Typed',
            'NextJS',
            'SCSS',
            'Axios',
            'css-shortcut',
        ],
        image: ['/images/projects/project-5/cover-1.png'],
        demo: '',
        github: 'https://github.com/bondarkoff/next-portfolio',
        type: 'Web Application',
        isReact: true,
        isJS: false,
    },
    {
        id: '6',
        title: 'css-shortcut',
        subtitle: 'My own npm package',
        description:
            '"css-shortcut" is an npm package that provides an easy way to shorten CSS properties. It allows developers to reduce the size of CSS code by using shorter and simpler shortcuts for properties such as font weight, margins, and colors.',
        functionality: '',
        stack: ['SCSS', 'Gulp'],
        image: ['/images/projects/project-6/cover-1.png', '/images/projects/project-6/cover-2.png'],
        demo: 'https://www.npmjs.com/package/css-shortcut',
        github: 'https://github.com/bondarkoff/css-shortcut',
        type: 'NPM Package',
        isReact: false,
        isJS: false,
    },
];

export default function handler(req, res) {
    res.status(200).json(projects);
}
