import { ChakraProps, FormControl, Input, Textarea } from "@chakra-ui/react";

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

interface IPostForm {
  email: string;
  requestDto: {
    title: string;
    main: string;
  };
}

interface GeneralPostFormProps {
  formData: IPostForm;
  setFormData: React.Dispatch<React.SetStateAction<IPostForm>>;
}

function GeneralPostForm({ formData, setFormData }: GeneralPostFormProps) {
  return (
    <FormControl>
      <Input
        flexShrink={0}
        variant={"unstyled"}
        h={9}
        mt={3}
        value={formData?.requestDto.title}
        {...inputProps}
        placeholder="제목을 입력해주세요."
        onChange={e =>
          setFormData(prevData => ({
            ...prevData,
            requestDto: { ...prevData.requestDto, title: e.target.value },
          }))
        }
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
        value={formData?.requestDto.main}
        onChange={e =>
          setFormData(d => ({
            ...d,
            requestDto: { ...d.requestDto, main: e.target.value },
          }))
        }
        sx={{ boxShadow: "none !important" }}
      />
    </FormControl>
  );
}

export default GeneralPostForm;
