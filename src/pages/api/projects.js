export const projects = [
    {
        id: '1',
        title: 'Morent Car Rental',
        subtitle: 'A car rental website',
        description:
            'A web application that provides information about available rental cars. The homepage features a list of available rental cars. Each car is presented in a card format, displaying key information such as a photo, model, price, and availability.',
        function:
            'The website offers various functional features to ensure convenience and user-friendliness. Users can browse the list of available cars, filter them by name (such as model or manufacturer), and view detailed information about each car, including user reviews.',
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
        isReact: true,
    },
    {
        id: '2',
        title: 'Marvel Information Portal',
        subtitle: 'A Marvel universe information portal',
        description:
            'A web application that provides information about Marvel comic characters. The website interface is user-friendly, allowing users to navigate effortlessly through sections and find the desired information.',
        function:
            'In the "Characters" section, users can browse a list of Marvel characters and access detailed information about each character, including the comics in which they have appeared, images, brief descriptions, and links to Wikipedia for more information. In the "Comics" section, information about various Marvel comics is provided.',
        stack: [
            'React + hooks',
            'React Router',
            'React Helmet',
            'React Skeleton',
            'Prop-Types',
            'SCSS',
        ],
        image: '/images/projects/cover-2.png',
        demo: 'https://react-vite-rent.vercel.app/cars',
        github: 'https://github.com/bondarkoff/react-vite-rent',
        isReact: true,
    },
    {
        id: '3',
        title: 'React Sneakers',
        subtitle: 'A sneakers online store',
        description:
            'A web application that showcases and sells sneakers. The homepage displays a collection of sneakers in a grid format, allowing users to easily browse through the available options.',
        function:
            'Users can view the collection of sneakers and explore detailed information about each pair, including product images and pricing. Additionally, users can add sneakers to their cart and proceed to a checkout page to complete their purchase.',
        stack: [
            'React + hooks',
            'React Router',
            'React Context',
            'React Skeleton',
            'Axios',
            'SCSS',
            'Macro-css',
        ],
        image: '/images/projects/cover-3.png',
        demo: 'https://react-vite-rent.vercel.app/cars',
        github: 'https://github.com/bondarkoff/react-vite-rent',
        isReact: true,
    },
    {
        id: '4',
        title: 'Website Portfolio',
        subtitle: 'My own old portfolio',
        description:
            'My old personal website showcasing my portfolio and works. The website design aims for clarity and ease of use, with a focus on visually representing my works.',
        function:
            'The website provides the ability to view my portfolio and browse through my projects. The "Works" section presents my works with descriptions of each project and corresponding images. Contact information is also provided, allowing users to reach out to me for inquiries or questions.',
        stack: ['JavaScript', 'SCSS', 'Gulp'],
        image: '/images/projects/cover-4.png',
        demo: 'https://react-vite-rent.vercel.app/cars',
        github: 'https://github.com/bondarkoff/react-vite-rent',
        isReact: false,
    },
];

export default function handler(req, res) {
    res.status(200).json(projects);
}
