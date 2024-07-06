import { keepPreviousData, useQuery } from "@tanstack/react-query";
import {
  getBestSellerProduct,
  getCategoryDetail,
  getCategoryProduct,
  getNewArrivalProduct,
  getProductbyCategoryID,
  getProductbyId,
} from "./api";

export function useNewProduct(page: number, search?: string) {
  return useQuery({
    queryKey: ["newproduct", { page }, search],
    queryFn: () => getNewArrivalProduct(page, search),
    placeholderData: keepPreviousData,
  });
}
export function useBestseller(page: number, search?: string) {
  return useQuery({
    queryKey: ["bestSellerproduct", { page }, search],
    queryFn: () => getBestSellerProduct(page, search),
    placeholderData: keepPreviousData,
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
