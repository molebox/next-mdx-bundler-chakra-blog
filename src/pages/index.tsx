import Head from "next/head";
import Layout from "components/layout/layout";
import { Flex, useTheme, Text } from "@chakra-ui/react";
import Link from "components/link";
import Footer from "components/layout/footer";
import ExternalLink from "components/external-link";
import { GetServerSideProps } from "next";

export default function Home() {
  const theme = useTheme();
  return (
    <Layout>
      <Head>
        <title>richardhaines.dev</title>
      </Head>
      <Flex
        as="section"
        w="100%"
        maxW={[300, 800]}
        minH="100vh"
        direction="column"
        justifyContent="center"
        m="0 auto"
      >
        <Text
          className="title"
          as="h1"
          fontFamily="heading"
          fontSize={["xs", "xs", "sm", "sm"]}
          color="brand.grey"
          fontWeight={400}
          letterSpacing={2}
        >
          richardhaines.dev
        </Text>
        <Text
          className="chapters"
          as="h2"
          fontFamily="body"
          fontSize="mini"
          color="brand.silver"
          fontWeight={400}
          letterSpacing={2}
          textTransform="uppercase"
          my={5}
          borderBottom={`solid 2px ${theme.colors.brand.silver}`}
          animation="expand border-bottom .5s ease-in"
          css={`
            @keyframes expand {
              from: {
                transform: scale(0);
              }
              to: {
                transform: scale(1);
              }
            }
          `}
        >
          chapters
        </Text>
        <Flex direction="column" w="fit-content">
          <Link
            className="writing"
            href="/writing"
            text="Writing"
            size={["sm", "md"]}
            uppercase
          />
          <Link
            className="projects"
            href="/projects"
            text="Projects"
            size={["sm", "md"]}
            uppercase
          />
          <Link
            className="who"
            href="/who-am-i"
            text="Who am i"
            size={["sm", "md"]}
            uppercase
          />
        </Flex>
        <Text my={5} color="brand.silver" fontSize="mini">
          Made with{" "}
          <ExternalLink
            font="body"
            href="https://nextjs.org/"
            size="mini"
            text="Next.js"
          />
          ,{" "}
          <ExternalLink
            font="body"
            href="https://github.com/kentcdodds/mdx-bundler"
            size="mini"
            text="mdx-bundler"
          />{" "}
          and{" "}
          <ExternalLink
            font="body"
            href="https://chakra-ui.com/"
            size="mini"
            text="Chakra-ui"
          />
        </Text>
      </Flex>
      <Footer />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({req}) => {
  console.log(req.headers)
  const city: string | string[] = req.headers['x-visitors-city'] || 'No city'
  console.log(city)
  return {
    props: {
      city
    },
  }
}
