import { Button } from "@chakra-ui/react";

interface CustomButtonType {
  title: string;
  disabled?: boolean;
  buttonStyle: "filled" | "bordered" | "text";
}

const CustomButton = ({ title, disabled, buttonStyle }: CustomButtonType) => {
  switch (buttonStyle) {
    case "filled":
      return (
        <Button
          w={"100%"}
          h={"52px"}
          type="submit"
          textStyle="subtitle1"
          bgColor="primary.500"
          color="background1"
          borderRadius={"16px"}
          _active={{ bgColor: "primary.300" }}
          _disabled={{
            bgColor: "#DBDCE1",
            color: "#9193A1",
            cursor: "not-allowed",
            "&:hover": { bgColor: "#DBDCE1", color: "#9193A1" },
          }}
          _hover={{ bgColor: "primary.300" }}
          isDisabled={disabled}
        >
          {title}
        </Button>
      );

    case "bordered":
      return (
        <Button
          w={"100%"}
          h={"52px"}
          type="submit"
          textStyle="subtitle1"
          bgColor="background1"
          color="primary.500"
          borderColor={"primary.500"}
          borderWidth={"1px"}
          borderStyle={"solid"}
          borderRadius={"16px"}
          _active={{ bgColor: "primary.50" }}
          _disabled={{
            bgColor: "background1",
            color: "#C8C9D0",
            cursor: "not-allowed",
            border: "1px solid #C8C9D0",
            "&:hover": {
              bgColor: "background1",
              color: "#C8C9D0",
              border: "1px solid #C8C9D0",
            },
          }}
          _hover={{ bgColor: "primary.50" }}
          isDisabled={disabled}
        >
          {title}
        </Button>
      );

    case "text":
      return (
        <Button
          w={"100%"}
          h={"52px"}
          type="submit"
          textStyle="subtitle1"
          bgColor="background1"
          color="primary.500"
          borderRadius={"16px"}
          _active={{ bgColor: "primary.50" }}
          _disabled={{
            bgColor: "background1",
            color: "#9193A1",
            cursor: "not-allowed",
            "&:hover": { bgColor: "background1", color: "#9193A1" },
          }}
          _hover={{ bgColor: "primary.50" }}
          isDisabled={disabled}
        >
          {title}
        </Button>
      );
  }
};

export default CustomButton;
