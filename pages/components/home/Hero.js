import {
  Image,
  Box,
  useDisclosure,
  SlideFade,
  Fade,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";

import { useEffect } from "react";

export default function Hero() {
  const { isOpen: titleOpen, onOpen: onTitleOpen } = useDisclosure();
  const { isOpen: assetsOpen, onOpen: onAssetsOpen } = useDisclosure();

  const imageHeight = useBreakpointValue({
    base: "200px",
    md: "400px",
    lg: "400px",
    xl: "400px",
    "2xl": "650px",
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
      <SlideFade in={titleOpen} offsetY="-10px">
        <Image
          src="logo.png"
          position="absolute"
          left="50%"
          top="0"
          transform="translateX(-50%) translateY(50px)"
          alt=""
        />
        <Image
          src="soon.png"
          position="absolute"
          left={["70%", "50%"]}
          top={["60px", "120px", "140px"]}
          h={["100px", "140px", "180px"]}
          w={"auto"}
          transform="translateY(50px)"
          alt=""
        />
      </SlideFade>

      <Flex
        position={"absolute"}
        bottom={0}
        justify={"space-between"}
        w={["fit-content", "100%", "100%", "100%", "100%", "100%"]}
      >
        <Fade in={assetsOpen}>
          <Image
            src="/goth.png"
            w="auto"
            h={imageHeight}
            transform="scaleX(-1)"
            alt=""
          />
        </Fade>
        <Fade in={assetsOpen}>
          <Image src="/sign.png" w="auto" h={imageHeight} alt="" />
        </Fade>

        <Fade in={assetsOpen}>
          <Image src="/hot-blonde.png" w="auto" h={imageHeight} alt="" />
        </Fade>
      </Flex>
    </Box>
  );
}
