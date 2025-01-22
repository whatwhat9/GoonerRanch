import {
  Image,
  Box,
  useDisclosure,
  SlideFade,
  Fade,
  useBreakpointValue,
} from "@chakra-ui/react";

import { useEffect } from "react";

export default function Hero() {
  const { isOpen: titleOpen, onOpen: onTitleOpen } = useDisclosure();
  const { isOpen: assetsOpen, onOpen: onAssetsOpen } = useDisclosure();

  const imageHeight = useBreakpointValue({
    base: "250px",
    lg: "300px",
    xl: "400px",
    "2xl": "450px",
  });

  useEffect(() => {
    setTimeout(onAssetsOpen, 2000);
    setTimeout(onTitleOpen, 1000);
  }, []);

  return (
    <Box
      bgImage="farm.png"
      bgSize="cover"
      bgPosition="top"
      w="100%"
      h="100vh"
      position="relative"
    >
      <SlideFade in={titleOpen} offsetY="-20px">
        <Image
          src="logo.png"
          position="absolute"
          left="50%"
          top="0"
          transform="translateX(-50%) translateY(100px)"
          alt=""
        />
      </SlideFade>

      <Fade in={assetsOpen}>
        <Image
          src="/goth.png"
          position="absolute"
          left={{ base: "100px", xl: "150px", "2xl": "200px" }}
          bottom={0}
          w="auto"
          h={imageHeight}
          transform="scaleX(-1)"
          alt=""
        />
      </Fade>

      <Fade in={assetsOpen}>
        <Image
          src="/hot-blonde.png"
          position="absolute"
          right={{ base: "100px", xl: "150px", "2xl": "200px" }}
          bottom="5px"
          w="auto"
          h={imageHeight}
          alt=""
        />
      </Fade>
    </Box>
  );
}
