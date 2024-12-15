import { useEffect } from "react";
import { useRouter } from "next/router";
import { ChakraProvider } from "@chakra-ui/react";
import { DefaultSeo } from "next-seo";

import theme from "@/theme/index";
import Layout from "@/layouts/global";
import SEO from "next-seo.config";

import "@fontsource/poppins/latin-400.css";
import "@fontsource/poppins/latin-500.css";
import "@fontsource/poppins/latin-600.css";
import "@fontsource/poppins/latin-700.css";
import "@/styles/index.css";
import { initGA, logPageView } from "../lib/ga";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    // Initialize Google Analytics
    if (typeof window !== "undefined") {
      initGA("G-FDFZ1T8YFV"); // شناسه Google Analytics خود را اینجا وارد کنید
      logPageView();
    }

    // Log page view on route change
    const handleRouteChange = () => {
      if (typeof window !== "undefined") {
        logPageView();
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <DefaultSeo {...SEO} />

      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
};

export default MyApp;
