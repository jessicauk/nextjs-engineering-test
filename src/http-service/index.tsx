import { API_BANKS, MESSAGE_ERROR } from "@/utils/constants";
const API_URL = process?.env.NEXT_PUBLIC_API_URL ?? "";

export async function getAllBanks() {
  try {
    const response = await fetch(`${API_URL}${API_BANKS}`);
    if (!response.ok) {
      throw new Error(MESSAGE_ERROR);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error(MESSAGE_ERROR);
  }
}
