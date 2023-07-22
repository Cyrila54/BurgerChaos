import '../styles/globals.css';
import Head from 'next/head';
import "../styles/fonts.css";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        
        <title>Burger Chaos 🍔</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
