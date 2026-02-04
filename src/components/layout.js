import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Box, Flex } from "@chakra-ui/react";
import Head from "next/head";

export const Layout = ({
  title = "Virtual Zarr",
  description = "Cloud-optimize your scientific data without copying it",
  children,
}) => {
  const fullTitle =
    title === "Virtual Zarr" ? title : `${title} | Virtual Zarr`;
  const url = "https://virtualzarr.cloud";

  return (
    <>
      <Head>
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <title>{fullTitle}</title>
      </Head>
      <Flex direction="column" minH="100vh">
        <Header />
        <Box as="main" flex="1" pt="60px">
          {children}
        </Box>
        <Footer />
      </Flex>
    </>
  );
};

export default Layout;
