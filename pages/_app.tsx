import { AppProps } from "next/app";
import Header from "../components/Header";
import Globalstyle from "../styles/GlobalStyle";


const app = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Globalstyle/>
      <Header></Header>
      <Component {...pageProps}/>
      <div id="root-modal" />
    </>
  )
};

export default app;
