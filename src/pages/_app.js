import { Inter } from 'next/font/google';

import 'css-shortcut';

import '@/styles/global.scss';

const inter = Inter({ weight: ['200', '400', '500', '700', '800', '900'], subsets: ['latin'] });

export default function App({ Component, pageProps }) {
    return (
        <div className={inter.className}>
            <Component {...pageProps} />
        </div>
    );
}
