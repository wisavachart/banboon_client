import { keepPreviousData, useQuery } from "@tanstack/react-query";
import {
  getCategoryDetail,
  getCategoryProduct,
  getNewArrivalProduct,
  getProductbyCategoryID,
  getProductbyId,
} from "./api";

export function useNewProduct() {
  return useQuery({
    queryKey: ["newproduct"],
    queryFn: getNewArrivalProduct,
  });
}
export function useGetCategory() {
  return useQuery({
    queryKey: ["category"],
    queryFn: getCategoryProduct,
  });
}

export function useGetCategoryDetail(id: string) {
  return useQuery({
    queryKey: ["categorydetail", id],
    queryFn: () => getCategoryDetail(id),
  });
}

export function useGetProductByCategory(
  id: string,
  page: number,
  search?: string
) {
  return useQuery({
    queryKey: ["productBycategory", id, { page }, search],
    queryFn: () => getProductbyCategoryID(id, page, search),
    placeholderData: keepPreviousData,
  });
}

export function useGetproductByID(id: string, fetchSwith: boolean) {
  return useQuery({
    queryKey: ["productdetailbyid", id],
    queryFn: () => getProductbyId(id),
    enabled: fetchSwith,
  });
}
