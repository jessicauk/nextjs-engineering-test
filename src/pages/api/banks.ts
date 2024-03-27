import type { NextApiRequest, NextApiResponse } from "next";
import { API_BANKS } from "@/utils/constants";
const API_URL = process?.env.NEXT_PUBLIC_API_URL ?? "";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const url = API_URL + API_BANKS;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error from banks: ${response.statusText}`);
    }

    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error in request" });
  }
}
