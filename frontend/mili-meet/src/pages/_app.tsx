import { SessionProvider } from "next-auth/react";
import type { AppProps } from 'next/app';
import { Session } from 'next-auth';

import 'normalize.css';
import '@fontsource/roboto';

interface MyAppProps extends AppProps {
  pageProps: {
    session: Session | null | undefined;
  }
}

export default function MyApp({ Component, pageProps }: MyAppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
