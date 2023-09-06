// interface IValidationResult {
//   userId: string;
//   password: string;
//   username: string;
//   email: string;
// }

const validateInput = (value: string, formType: string) => {
  let isValidate = true;
  const passwordRegex =
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,20}$/;
  const usernameRegex = /^[\uAC00-\uD7A3]{2,6}$/;

  const emailRegex = /^[A-Za-z0-9]{6,20}$/;
  const nicknameRegex = /^[\p{Script=Hangul}\p{Script=Latin}\d]{2,8}$/u;
  const errorMessage: any = {
    nickname: "한글, 영어, 숫자 조합이 가능한 2~8자에요.",
    password: "비밀번호는 영어, 숫자, 특수문자 포함 8~20자 입니다.",
    username: "2글자 이상 실명을 입력해주세요.",
    email: "영어, 숫자 조합이 가능한 6~20자에요.",
  };
  const validationResult: any = {
    nickname: "",
    password: "",
    username: "",
    email: "",
  };

  if (formType === "password") {
    if (!passwordRegex.test(value)) {
      isValidate = false;
    }
  }
  if (formType === "username") {
    if (!usernameRegex.test(value)) {
      isValidate = false;
    }
  }
  if (formType === "email") {
    if (!emailRegex.test(value)) {
      isValidate = false;
    }
  }
  if (formType === "nickname") {
    if (!nicknameRegex.test(value)) {
      isValidate = false;
    }
  }

  if (!isValidate) {
    validationResult[formType] = errorMessage[formType];
  } else {
    validationResult[formType] = "";
  }
  return validationResult;
};

export default validateInput;
