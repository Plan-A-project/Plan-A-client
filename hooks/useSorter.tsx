import { ReactNode, useState } from "react";

import { Badge, BadgeProps, HStack } from "@chakra-ui/layout";

type SortButtonProps = BadgeProps & {
  checked?: boolean;
  sort?: SortOption;
};

const SortButton: React.FC<SortButtonProps> = ({ checked, sort, ...props }) => {
  const accent = checked ? `${sort?.color || "primary"}.500` : "gray.900";
  const background = checked ? `${sort?.color || "primary"}.100` : "gray.100";
  const borderWidth = checked ? "1px" : "0px";
  return (
    <Badge
      background={background}
      textStyle={"body3"}
      borderColor={accent}
      sx={{
        color: accent,
        minHeight: "20px",
        display: "flex",
        alignItems: "center",
        borderRadius: "8px",
        padding: "2px 8px",
        boxSizing: "border-box",
        borderStyle: "solid",
        borderWidth,
      }}
      {...props}
    >
      {sort?.name}
    </Badge>
  );
};

type SortOption = {
  name: string;
  color: string;
};

const defaultSort = [
  {
    name: "최신순",
    color: "primary",
  },
  {
    name: "인기순",
    color: "primary",
  },
];

export function useSorter(
  sorts: SortOption[] = defaultSort,
): [() => ReactNode, number] {
  const [sortIndex, setSortIndex] = useState(0);

  function getComponent() {
    return (
      <HStack pb={3}>
        {sorts.map((sort, index) => (
          <SortButton
            key={index}
            checked={sortIndex === index}
            sort={sort}
            onClick={() => setSortIndex(index)}
          />
        ))}
      </HStack>
    );
  }

  return [getComponent, sortIndex];
}
