import { MouseEvent } from "react";

import { CloseIcon } from "@chakra-ui/icons";
import { Badge, BadgeProps } from "@chakra-ui/layout";

type ChipProps = BadgeProps & {
  checked?: boolean;
  onDelete?: () => void;
};

const Chip: React.FC<ChipProps> = ({
  children,
  checked,
  onDelete,
  ...props
}) => {
  function handleDelete(e: MouseEvent<SVGSVGElement>) {
    e.stopPropagation();
    onDelete?.();
  }

  return (
    <Badge
      h={6}
      py={1}
      px={2}
      variant={checked ? "outline" : "solid"}
      color={checked ? "primary.500" : "#303136"}
      borderColor={checked ? "primary.500" : "transparent"}
      border={checked ? "1px solid" : "none"}
      bg={checked ? "primary.50" : "#F7F8FA"}
      boxShadow="none"
      cursor="pointer"
      display={"flex"}
      alignItems={"center"}
      borderRadius={8}
      fontWeight={"500"}
      textStyle="body3"
      {...props}
    >
      {children}
      {onDelete && (
        <CloseIcon
          ml={2}
          boxSize={"8px"}
          color={"#303136"}
          onClick={handleDelete}
        />
      )}
    </Badge>
  );
};

export default Chip;
