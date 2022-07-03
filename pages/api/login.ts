import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import getConfig from "next/config";
import { IFormFields } from "../../components/LoginFormUI/Types";
import executeQuery from "../../utils/db";
import { EMAIL_REGEX } from "../../utils/validations";

const { serverRuntimeConfig } = getConfig();

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
    const data: IFormFields = req.body;
    let errors = [];

    // Validate data
    if (!data.email.length)
      errors.push({ email: "يجب كتابة البريد اﻹلكتروني قبل التسجيل" });
    if (!EMAIL_REGEX.test(data.email))
      errors.push({ email: "يجب كتابة بريد إلكتروني صحيح" });
    if (data.password.length < 8)
      errors.push({ password: "يجب أن لا تقل كلمة المرور عن 8 أحرف" });

    if (errors.length) return res.status(400).json({ errors });

    // Save data in database
    const response = await executeQuery({
      query: "SELECT * FROM users WHERE email = ?",
      values: [data.email],
    });

    if(!(response.results as any).length) {
      return res.status(400).json({
        errors: [{ password: "البريد اﻹلكتروني و/أو كلمة السر غير صحيحان" }],
      });
    }

    const user: {
      id: number;
      password: string;
      email: string;
      name: string;
    } = (response.results as any)[0];

    const passwordsIdentical = await bcrypt.compare(
      data.password,
      user.password
    );

    // Handle response
    if (response.success) {
      if (passwordsIdentical) {
        // Generate token
        const token = jwt.sign(
          { id: user.id, name: user.name, email: user.email },
          serverRuntimeConfig.secret,
          {
            expiresIn: "7d",
          }
        );

        return res.status(200).json({ success: true, token });
      }
      // Wrong password
      else
        return res.status(400).json({
          errors: [{ password: "البريد اﻹلكتروني و/أو كلمة السر غير صحيحان" }],
        });
    } else {
      return res.status(400).json({ err: response.err });
    }
  } catch (err: any) {
    return res.status(400).json({ errors: [{ password: err.message }] });
  }
}
