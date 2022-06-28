import "../styles/globals.css";
import type { AppProps } from "next/app";
import Sidebar from "../components/sidebar";
import { TopHeader } from "../components/topheader";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="p-5 flex w-screen">
      <Sidebar />
      <TopHeader/>
      <div className="mt-28 ml-10 w-full">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
