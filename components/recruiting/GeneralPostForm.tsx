import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { ChakraProps, Input, Textarea } from "@chakra-ui/react";

const formProps: ChakraProps = {
  border: "none",
  borderBottom: "1px solid",
  borderColor: "gray.100",
  borderRadius: 0,
  _focus: { borderColor: "gray.300" },
  px: 2,
};

const inputProps: ChakraProps = {
  ...formProps,
  py: 2,
};

const GeneralPostForm = ({
  setBtnActive,
}: {
  setBtnActive: Dispatch<SetStateAction<boolean>>;
}) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    title && desc ? setBtnActive(true) : setBtnActive(false);
  }, [title, desc]);

  return (
    <>
      <Input
        flexShrink={0}
        variant={"unstyled"}
        h={9}
        mt={3}
        value={title}
        {...inputProps}
        placeholder="제목을 입력해주세요."
        onChange={e => setTitle(e.target.value)}
      />
      <Textarea
        mt={2}
        flex={1}
        resize={"none"}
        lineHeight={5}
        placeholder="내용을 입력해주세요."
        rows={13}
        {...inputProps}
        p={2}
        value={desc}
        onChange={e => setDesc(e.target.value)}
        sx={{ boxShadow: "none !important" }}
      />
    </>
  );
};

export default GeneralPostForm;
