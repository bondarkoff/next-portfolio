import { Inter } from 'next/font/google';
import 'css-shortcut';

import '@/styles/globals.scss';

const inter = Inter({ weight: ['400', '500', '700', '800', '900'], subsets: ['latin'] });

export default function App({ Component, pageProps }) {
    return (
        <main className={inter.className}>
            <Component {...pageProps} />
        </main>
    );
}
