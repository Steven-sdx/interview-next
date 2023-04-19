import React from 'react';
import { CaseProvider } from '../CaseContext';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CaseProvider>
      <Component {...pageProps} />
    </CaseProvider>
  );
}

export default MyApp;
