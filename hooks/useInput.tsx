import { useState, ChangeEvent } from "react";

import validateInput from "@/utils/validation";

const useInput = () => {
  const [inputValues, setInputValues] = useState<any>({});
  const [errors, setErrors] = useState<any>({});
  const [confirmInput, setConfirmInput] = useState({
    email: "",
    nickname: "",
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    formType: string,
  ) => {
    const { value } = event.target;
    setInputValues((prevState: any) => ({
      ...prevState,
      [formType]: value,
    }));

    setErrors((prevState: any) => ({
      ...prevState,
      [formType]: validateInput(value, formType)[formType],
    }));
  };

  return {
    inputValues,
    setInputValues,
    errors,
    setErrors,
    confirmInput,
    setConfirmInput,
    handleChange,
  };
};

export default useInput;
