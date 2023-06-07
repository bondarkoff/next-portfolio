import Head from 'next/head';

import styles from '@/styles/Home.module.scss';

export default function Home() {
    return (
        <>
            <Head>
                <title>Next Portfolio</title>
                <meta name='description' content='Bondarkoff Next Portfolio' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
            </Head>
            <div className=''>
                <div className={styles.sidebar}>
                    <nav>
                        <ul>
                            <li>
                                <a className={styles['sidebar-link']} href='#'>
                                    <svg
                                        width='26'
                                        height='24'
                                        viewBox='0 0 26 24'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <path
                                            d='M10.3303 21.7698V15.1032H15.6636V21.7698C15.6636 22.5032 16.2636 23.1032 16.997 23.1032H20.997C21.7303 23.1032 22.3303 22.5032 22.3303 21.7698V12.4365H24.597C25.2103 12.4365 25.5036 11.6765 25.037 11.2765L13.8903 1.23648C13.3836 0.783151 12.6103 0.783151 12.1036 1.23648L0.956957 11.2765C0.503624 11.6765 0.783623 12.4365 1.39696 12.4365H3.66362V21.7698C3.66362 22.5032 4.26362 23.1032 4.99696 23.1032H8.99696C9.73029 23.1032 10.3303 22.5032 10.3303 21.7698Z'
                                            fill='#AAAEB9'
                                        />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a className={styles['sidebar-link']} href='#'>
                                    <svg
                                        width='16'
                                        height='16'
                                        viewBox='0 0 16 16'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <path
                                            d='M14.0142 13.3072L13.3042 14.0172C13.1042 14.2172 12.7942 14.2172 12.5942 14.0172C12.3942 13.8172 12.3942 13.5072 12.5942 13.3072L13.3042 12.5972L11.3642 10.6572L10.6542 11.3672C10.4542 11.5672 10.1442 11.5672 9.94425 11.3672C9.74425 11.1672 9.74425 10.8572 9.94425 10.6572L10.6542 9.94716L8.71425 8.00716L8.00425 8.71716C7.80425 8.91716 7.49425 8.91716 7.29425 8.71716C7.09425 8.51716 7.09425 8.20716 7.29425 8.00716L8.00425 7.29716L6.05425 5.34716L5.34425 6.05716C5.14425 6.25716 4.83425 6.25716 4.63425 6.05716C4.43425 5.85716 4.43425 5.54716 4.63425 5.34716L5.34425 4.63716L3.40425 2.69716L2.69425 3.40716C2.49425 3.60716 2.18425 3.60716 1.98425 3.40716C1.78425 3.20716 1.78425 2.89716 1.98425 2.69716L2.69425 1.98716L1.20425 0.497157C0.894248 0.187157 0.354248 0.407158 0.354248 0.857158V13.6472C0.354248 14.7472 1.25425 15.6472 2.35425 15.6472H15.1442C15.5942 15.6472 15.8142 15.1072 15.4942 14.7972L14.0142 13.3072ZM3.35425 11.6472V6.88716L9.11425 12.6472H4.35425C3.80425 12.6472 3.35425 12.1972 3.35425 11.6472Z'
                                            fill='#656A7B'
                                        />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a className={styles['sidebar-link']} href='#'>
                                    <svg
                                        width='20'
                                        height='20'
                                        viewBox='0 0 20 20'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <path
                                            d='M10 0C4.49 0 0 4.49 0 10C0 15.51 4.49 20 10 20C11.38 20 12.5 18.88 12.5 17.5C12.5 16.89 12.27 16.3 11.86 15.83C11.78 15.73 11.73 15.62 11.73 15.5C11.73 15.22 11.95 15 12.23 15H14C17.31 15 20 12.31 20 9C20 4.04 15.51 0 10 0ZM15.5 11C14.67 11 14 10.33 14 9.5C14 8.67 14.67 8 15.5 8C16.33 8 17 8.67 17 9.5C17 10.33 16.33 11 15.5 11ZM12.5 7C11.67 7 11 6.33 11 5.5C11 4.67 11.67 4 12.5 4C13.33 4 14 4.67 14 5.5C14 6.33 13.33 7 12.5 7ZM3 9.5C3 8.67 3.67 8 4.5 8C5.33 8 6 8.67 6 9.5C6 10.33 5.33 11 4.5 11C3.67 11 3 10.33 3 9.5ZM9 5.5C9 6.33 8.33 7 7.5 7C6.67 7 6 6.33 6 5.5C6 4.67 6.67 4 7.5 4C8.33 4 9 4.67 9 5.5Z'
                                            fill='#656A7B'
                                        />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a className={styles['sidebar-link']} href='#'>
                                    <svg
                                        width='20'
                                        height='18'
                                        viewBox='0 0 20 18'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <path
                                            d='M10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13Z'
                                            fill='#656A7B'
                                        />
                                        <path
                                            d='M18 2H14.83L13.59 0.65C13.22 0.24 12.68 0 12.12 0H7.88C7.32 0 6.78 0.24 6.4 0.65L5.17 2H2C0.9 2 0 2.9 0 4V16C0 17.1 0.9 18 2 18H18C19.1 18 20 17.1 20 16V4C20 2.9 19.1 2 18 2ZM10 15C7.24 15 5 12.76 5 10C5 7.24 7.24 5 10 5C12.76 5 15 7.24 15 10C15 12.76 12.76 15 10 15Z'
                                            fill='#656A7B'
                                        />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className='container'>
                    <div className={styles.text}>
                        <h1 className={styles.title}>Bondarkoff</h1>
                        <p className={styles.description}>
                            Welcome to the extraordinary world of , a versatile and imaginative
                            artist who skillfully navigates the realms of product design,
                            photography and digital art. With a keen eye for detail and a relentless
                            pursuit of innovation, crafts captivating visual narratives, immersive
                            digital realms, and functional yet aesthetically pleasing products.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
