import '../public/index.css'
import '../public/font.css'
import '../public/bootstrap.css'
import { SSRProvider } from 'react-bootstrap';
import Header from '../components/Header.js';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Head>
                <meta name="lightning" content="lnurlp:lnvpn@getalby.com" />
                <meta property="og:image" content="https://lnvpn.net/static/media/logo2.c7fae732fe38f33e6111b0d4e754790a.svg" />
            </Head>

            <Header />
            <SSRProvider>
                <Component {...pageProps} />
            </SSRProvider>
        </div>
    )
}
