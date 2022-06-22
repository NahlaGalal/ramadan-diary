import { rest } from "msw";
import { EMAIL_REGEX } from "../utils/validations";

export const signupHandlers = [
  rest.post("http://localhost:3000/api/signup", (req, res, ctx) => {
    const data: {
      name: string;
      email: string;
      password: string;
      confirm_password: string;
    } = req.body as any;

    let errors = [];

    if (data.name.length < 5)
      errors.push({ name: "يجب أن لا يقل الاسم عن 5 أحرف" });
    if (!data.email.length)
      errors.push({ email: "يجب كتابة البريد اﻹلكتروني قبل التسجيل" });
    if (!EMAIL_REGEX.test(data.email))
      errors.push({ email: "يجب كتابة بريد إلكتروني صحيح" });
    if (data.password.length < 8)
      errors.push({ password: "يجب أن لا تقل كلمة المرور عن 8 أحرف" });
    if (data.confirm_password.length < 8)
      errors.push({ confirm_password: "يجب أن لا تقل كلمة المرور عن 8 أحرف" });
    if (data.confirm_password !== data.password)
      errors.push({ confirm_password: "كلمتا المرور غير متطابقتان" });

    if (errors.length) return res(ctx.status(400), ctx.json({ errors }));
    else return res(ctx.status(200), ctx.json({ token: "abd" }));
  }),
];
