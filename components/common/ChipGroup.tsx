import { HStack } from "@chakra-ui/layout";

import Chip from "@/components/common/Chip";

export type ChipData = {
  label: string;
  checked: boolean;
};

type ChipGroupProps = {
  chips: ChipData[];
  multiple?: boolean;
  onChange?: (chips: ChipData[]) => void;
};

const ChipGroup: React.FC<ChipGroupProps> = ({ chips, multiple, onChange }) => {
  function handleChipClick(index: number) {
    return () => {
      if (multiple) {
        chips[index].checked = !chips[index].checked;
      } else {
        chips.forEach((chip, i) => {
          chip.checked = i === index;
        });
      }
      onChange?.([...chips]);
    };
  }

  return (
    <HStack>
      {chips.map((chip, index) => (
        <Chip
          key={index}
          checked={chip.checked}
          onClick={handleChipClick(index)}
        >
          {chip.label}
        </Chip>
      ))}
    </HStack>
  );
};

export default ChipGroup;
