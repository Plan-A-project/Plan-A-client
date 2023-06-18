import { useState } from "react";

type UseFocusReturn = [
  isFocused: boolean,
  handler: {
    onFocus: () => void;
    onBlur: () => void;
  },
];

export default function useFocus(): UseFocusReturn {
  const [isFocused, setFocused] = useState<boolean>(false);

  const onFocus = () => {
    setFocused(true);
  };

  const onBlur = () => {
    setFocused(false);
  };

  return [
    isFocused,
    {
      onFocus,
      onBlur,
    },
  ];
}
