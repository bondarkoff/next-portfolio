import { CSSIcon } from '../assets/CSSIcon';
import { HTMLIcon } from '../assets/HTMLIcon';
import { JavaScriptIcon } from '../assets/JavaScriptIcon';
import { ReactIcon } from '../assets/ReactIcon';

import styles from './Skills.module.scss';

export default function Skills() {
    return (
        <div className={styles.skills}>
            <h2 className={styles['skills__title']}>Skills</h2>
            <div className={styles['skills__wrapper']}>
                <div className={styles['skills__card']}>
                    <h3 className={styles['skills__card-title']}>HTML</h3>
                    <div className={styles['skills__card-img']}>
                        <HTMLIcon width={150} height={150} />
                    </div>
                    <p className={styles['skills__card-descr']}>
                        It is he who creates the framework of your site or application, and the
                        fifth version will allow me to create a more SEO-optimized structure of your
                        product
                    </p>
                </div>

                <div className={styles['skills__card']}>
                    <h3 className={styles['skills__card-title']}>CSS</h3>
                    <div className={styles['skills__card-img']}>
                        <CSSIcon width={150} height={150} />
                    </div>
                    <p className={styles['skills__card-descr']}>
                        This style language allows me to create absolutely any look for your site or
                        application. Everything is limited only by your imagination!
                    </p>
                </div>
                <div className={styles['skills__card']}>
                    <h3 className={styles['skills__card-title']}>JavaScript</h3>
                    <div className={styles['skills__card-img']}>
                        <JavaScriptIcon width={150} height={150} />
                    </div>
                    <p className={styles['skills__card-descr']}>
                        This programming language allows you to bring anything to life: sliders,
                        windows, tooltips, tabs, receiving data from the server, and much more.
                    </p>
                </div>
                <div className={styles['skills__card']}>
                    <h3 className={styles['skills__card-title']}>React</h3>
                    <div className={styles['skills__card-img']}>
                        <ReactIcon width={150} height={150} />
                    </div>
                    <p className={styles['skills__card-descr']}>
                        It is he who creates the framework of your site or application, and the
                        fifth version will allow me to create a more SEO-optimized structure of your
                        product
                    </p>
                </div>
            </div>
        </div>
    );
}
