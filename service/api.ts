import { Category, Product, ProductResponse } from "@/lib/types";
import axios from "axios";
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const axiosInstance = axios.create({ baseURL: BASE_URL });

export const getNewArrivalProduct = async () => {
  return (
    await axiosInstance.get<Product[]>("/products?new=newarrival")
  ).data.map((newProd) => newProd._id);
};

export const getCategoryProduct = async () => {
  return (await axiosInstance.get<Category[]>("/categories")).data.map(
    (category) => category
  );
};
//getname cate by ID
export const getCategoryDetail = async (id: string) => {
  return (await axiosInstance.get<Category>(`/categories/${id}`)).data;
};

export const getProductbyCategoryID = async (
  id: string,
  page = 1,
  search?: string
) => {
  return (
    await axiosInstance.get<ProductResponse>(
      `/products/bycategory/${id}?page=${page}&search=${search}`
    )
  ).data;
};
