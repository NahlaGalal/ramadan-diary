import { RegisterOptions } from "react-hook-form";

export const inputsValidation = (
  input: string,
  password?: string
): RegisterOptions => {
  switch (input) {
    case "name":
      return {
        required: "يجب كتابة الاسم قبل التسجيل",
        minLength: {
          value: 5,
          message: "يجب أن لا يقل الاسم عن 5 أحرف",
        },
      };
    case "email":
      return {
        required: "يجب كتابة البريد اﻹلكتروني قبل التسجيل",
        pattern: {
          value:
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          message: "يجب كتابة بريد إلكتروني صحيح",
        },
      };
    case "password":
      return {
        required: "يجب كتابة كلمة السر قبل التسجيل",
        minLength: {
          value: 8,
          message: "يجب أن لا تقل كلمة المرور عن 8 أحرف",
        },
      };
    case "confirm_password":
      return {
        required: "يجب إعادة كتابة كلمة السر قبل التسجيل",
        minLength: {
          value: 8,
          message: "يجب أن لا تقل كلمة المرور عن 8 أحرف",
        },
        validate: (val: string) => {
          if (val !== password) return "كلمتا المرور غير متطابقتان";
        },
      };
    default:
      return {};
  }
};
