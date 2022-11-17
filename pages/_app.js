import Head from 'next/head';
import Router from 'next/router';
import nProgress from 'nprogress';
import 'nprogress/nprogress.css';
import ThemeProvider from 'src/theme/ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from 'src/createEmotionCache';
import { SidebarProvider } from 'src/contexts/SidebarContext';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { SessionProvider } from 'next-auth/react'

const clientSideEmotionCache = createEmotionCache();

function TokyoApp({Component, emotionCache = clientSideEmotionCache,pageProps: { session, ...pageProps }}) {
  // const { Component, emotionCache = clientSideEmotionCache,pageProps } = props;
  const getLayout = Component.getLayout ?? ((page) => page);

  Router.events.on('routeChangeStart', nProgress.start);
  Router.events.on('routeChangeError', nProgress.done);
  Router.events.on('routeChangeComplete', nProgress.done);

  return (
    <SessionProvider session={session}>

    <CacheProvider value={emotionCache}>
      <Head>
        <title>Tokyo Free White NextJS Javascript Admin Dashboard</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <script type="module" src="https://public.tableau.com/javascripts/api/tableau.embedding.3.1.0.js"></script>
      </Head>
      <SidebarProvider>
        <ThemeProvider>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <CssBaseline />
            {getLayout(<Component {...pageProps} />)}
          </LocalizationProvider>
        </ThemeProvider>
      </SidebarProvider>
    </CacheProvider>
   </SessionProvider>
  );
}

export default TokyoApp;
