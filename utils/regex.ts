export const usernameRegex = new RegExp(/^[\p{Script=Hangul}]{2,6}$/u);
// 한글, 영어(대,소문자 가능) 가능, 2~20자

export const emailRegex = new RegExp(/^[A-Z0-9._-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);
// 이메일 정규식

export const passwordRegex = new RegExp(
  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,20}$/,
);
// 영문, 숫자, 특수문자 모두를 포함하며, 8~20자리 사이

export const nicknameRegex = new RegExp(
  /^[\p{Script=Hangul}\p{Script=Latin}\d]{2,8}$/u,
);
// 한글, 영어, 숫자 조합 가능 2~8자
