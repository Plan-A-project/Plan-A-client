import Picker from "rmc-picker/lib/Picker";
import { useState } from "react";

type ISScrollablePicker = {
  values: number[];
};

export default function ScrollablePicker({ values }: ISScrollablePicker) {
  const [value, setValue] = useState();

  const onChange = (value: number) => {
    console.log("value: ", value, values[value]);
  };

  const getItems = (start: number) => {
    const items = [];
    for (let i = start; i < start + values.length; i++) {
      items.push(
        <Picker.Item value={i} key={i}>
          {values[i]}
        </Picker.Item>
      );
    }
    return items;
  };
  const [items, setItems] = useState(getItems(0));

  return (
    <Picker selectedValue={value} onValueChange={onChange}>
      {items}
    </Picker>
  );
}
