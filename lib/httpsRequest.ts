import { QueryClient } from "@tanstack/react-query";
import { FetchCategoryByIdParams } from "./types";
export const queryClient = new QueryClient();

export async function fetchCategory() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`);

  if (!response.ok) {
    const error = new Error("An error occurred while fetching the events");
    throw error;
  }
  const data = await response.json();
  return data;
}

//fetchCategoryById

export async function fetchCategoryById({
  signal,
  id,
}: FetchCategoryByIdParams) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/categories/${id}`,
    { signal }
  );
  if (!response.ok) {
    const error = new Error("An error occurred while fetching the events");
    throw error;
  }
  const data = await response.json();
  return data;
}
