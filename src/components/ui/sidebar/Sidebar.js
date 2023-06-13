import { useEffect, useRef, useState } from 'react';
import styles from './Sidebar.module.scss';
import { LinkedinIcon } from '@/components/assets/LinkedinIcon';
import { GithubIcon } from '@/components/assets/GithubIcon';

export const Sidebar = () => {
    const [activeSection, setActiveSection] = useState('projects');
    const sidebarRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            const currentSection = Array.from(sections).find(section => {
                const rect = section.getBoundingClientRect();
                return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
            });

            if (currentSection) {
                setActiveSection(currentSection.id);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <aside className={styles.sidebar} ref={sidebarRef}>
            <nav className='d-flex jcc aic'>
                <ul>
                    <li>
                        <a
                            className={`${styles['sidebar__link']} ${
                                activeSection === 'projects' ? styles['sidebar__active'] : ''
                            }`}
                            href='#projects'
                            aria-label='Projects Section'>
                            <svg
                                width='24'
                                height='24'
                                viewBox='0 0 20 18'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    d='M7.99778 16.3274V11.3274H11.9978V16.3274C11.9978 16.8774 12.4478 17.3274 12.9978 17.3274H15.9978C16.5478 17.3274 16.9978 16.8774 16.9978 16.3274V9.32736H18.6978C19.1578 9.32736 19.3778 8.75736 19.0278 8.45736L10.6678 0.927363C10.2878 0.587363 9.70778 0.587363 9.32778 0.927363L0.967779 8.45736C0.627779 8.75736 0.837779 9.32736 1.29778 9.32736H2.99778V16.3274C2.99778 16.8774 3.44778 17.3274 3.99778 17.3274H6.99778C7.54778 17.3274 7.99778 16.8774 7.99778 16.3274Z'
                                    fill='#656A7B'
                                />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a
                            className={`${styles['sidebar__link']} ${
                                activeSection === 'skills' ? styles['sidebar__active'] : ''
                            }`}
                            href='#skills'
                            aria-label='Skills Section'>
                            <svg
                                width='24'
                                height='24'
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
                        <a
                            className={`${styles['sidebar__link']} ${
                                activeSection === 'about' ? styles['sidebar__active'] : ''
                            }`}
                            href='#about'
                            aria-label='About Section'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                viewBox='0 0 86.956 91.25'>
                                <path
                                    id='User-Icon-0j3dsds'
                                    d='M127.937,133.686a25.433,25.433,0,1,0-19.533,0,43.466,43.466,0,0,0-33.711,42.336h86.956a43.466,43.466,0,0,0-33.711-42.336'
                                    transform='translate(-74.693 -84.772)'
                                    fill='#656A7B'
                                />
                            </svg>
                        </a>
                    </li>
                    <li className={styles['sidebar__divider']}></li>
                    <li>
                        <a
                            href='https://www.linkedin.com/in/yehor-bondarkov/'
                            className={styles['sidebar__social']}
                            target='_blank'
                            aria-label='LinkedIn'>
                            <LinkedinIcon width={48} height={48} />
                        </a>
                    </li>
                    <li>
                        <a
                            href='https://github.com/bondarkoff'
                            className={styles['sidebar__social']}
                            target='_blank'
                            aria-label='Github'>
                            <GithubIcon width={48} height={48} />
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};
