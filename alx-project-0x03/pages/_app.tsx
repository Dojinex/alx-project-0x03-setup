import type { AppProps } from 'next/app';
import Layout from '../components/layouts/Layout';
import '../styles/globals.css';  // ✅ Make sure this matches the file name

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

