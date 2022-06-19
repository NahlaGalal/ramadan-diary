import type { NextApiRequest, NextApiResponse } from "next";
import executeQuery from "../../../utils/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = await executeQuery({
      query: `SELECT * FROM users`,
      values: "",
    });
    res.json({ data });
  } catch (err) {
    console.log(err);
  }
}
