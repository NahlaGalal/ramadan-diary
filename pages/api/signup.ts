import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import { IFormFields } from "../../components/SignupFormUI/Types";
import executeQuery from "../../utils/db";
import { EMAIL_REGEX } from "../../utils/validations";

export default async function signup(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Check it's a post request
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }

  try {
    const data: IFormFields = JSON.parse(req.body);
    let errors = [];

    // Validate data
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

    if (errors.length) return res.status(400).json({ errors });

    const hashedPassword = await bcrypt.hash(data.password, 16);

    // Save data in database
    const response = await executeQuery({
      query: "INSERT INTO users (password, email, name) VALUES(?, ?, ?)",
      values: [hashedPassword, data.email, data.name],
    });

    // Handle response
    if (response.success) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(400).json({ err: response.err });
    }
  } catch (err: any) {
    return res.status(400).json({ err });
  }
}
