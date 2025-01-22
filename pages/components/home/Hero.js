import { Image } from "@chakra-ui/react";
import "@fontsource/turret-road/800.css";

export default function Hero() {
  return (
    <>
      <Image
        src="background.png"
        w="100%"
        h="100vh"
        objectFit="cover"
        objectPosition="top"
        alt="bg"
      />
    </>
  );
}
