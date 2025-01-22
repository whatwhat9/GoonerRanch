import Head from "next/head";
import Hero from "./components/home/Hero";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gooner Ranch</title>
        <meta
          name="description"
          content="Craving thicc butts? We've got something for you!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex direction={"column"} w={"100%"} h={"100%"}>
        <Hero />
      </Flex>
    </>
  );
}
