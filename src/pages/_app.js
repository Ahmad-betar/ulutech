import "@/styles/globals.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Loading from "../../components/Loading/Loading";


export default function App({ Component, pageProps }) {
  
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
      const handleStart = (url) => (url !== router.asPath) && setLoading(true);
      const handleComplete = (url) => (url === router.asPath) &&   setLoading(false);

      router.events.on('routeChangeStart', handleStart)
      router.events.on('routeChangeComplete', handleComplete)
      router.events.on('routeChangeError', handleComplete)

      return () => {
          router.events.off('routeChangeStart', handleStart)
          router.events.off('routeChangeComplete', handleComplete)
          router.events.off('routeChangeError', handleComplete)
      }
  })
  
  if(loading){
    return(
      <Loading/>
    )
  }


  
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
