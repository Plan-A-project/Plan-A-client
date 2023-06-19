import { Box, Stack } from "@chakra-ui/layout";

import useLineTab from "@/hooks/useLineTab";

import Posting from "./Posting";
import Title from "../Title";

export default function Main() {
  const [activatedTab, LineTab] = useLineTab(["전체", "모집"]);
  return (
    <Box>
      <Title />
      <LineTab />
      <Stack>
        <Posting />
        <Posting />
        <Posting />
        <Posting />
      </Stack>
    </Box>
  );
}
