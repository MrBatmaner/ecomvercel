import { SessionProvider } from "next-auth/react";
import { Provider } from 'react-redux';
import { store } from '../app/store';
import '../styles/globals.css';
import { SessionProvider as AuthProvider } from "next-auth/react";


export default function App ({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <AuthProvider session={pageProps.session}>
      <Provider store={store}>
        <SessionProvider session={pageProps.session}>
          <Component {...pageProps} />
        </SessionProvider>
      </Provider>
    </AuthProvider>
  );
};