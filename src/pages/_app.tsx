import { AppProps } from "next/app";

import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

import AppProviders from "@/components/AppProviders";
import { Inter } from "next/font/google";

function App({ Component, pageProps }: AppProps) {
  return (
    <AppProviders>
      <div className={`${inter.className} font-sans`}>
        <Component {...pageProps} />
      </div>
    </AppProviders>
  );
}

export default App;
