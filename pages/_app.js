import GlobalStyles from "../styles/GlobalStyles";
import { theme } from "../styles/Theme";
import { ThemeProvider } from "styled-components";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>PT PBS</title>
        <meta
          name="description"
          content="Exporter fresh veggie from Indonesia"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <AnimatePresence>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
