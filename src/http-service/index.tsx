import { API_BANKS_NEXT, MESSAGE_ERROR } from "@/utils/constants";

export async function getAllBanks() {
  try {
    const response = await fetch(API_BANKS_NEXT);
    if (!response.ok) {
      throw new Error(MESSAGE_ERROR);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error(MESSAGE_ERROR);
  }
}
