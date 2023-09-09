import { Box, Flex } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Notice = () => {
  const router = useRouter();
  const {
    query: { page },
  } = router;

  const image =
    page === "1" ? "/assets/infli_description.jpg" : "/assets/infli_method.jpg";

  return (
    <Flex h={"100vh"} align={"center"}>
      <Image src={image} />
    </Flex>
  );
};

export default Notice;
