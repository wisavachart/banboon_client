import {
  BestSellerProductResponse,
  Category,
  NewProductResponse,
  Product,
  ProductResponse,
} from "@/lib/types";
import axios from "axios";
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const axiosInstance = axios.create({ baseURL: BASE_URL });

// export const getNewArrivalProduct = async () => {
//   return (
//     await axiosInstance.get<Product[]>("/products?new=newarrival")
//   ).data.map((newProd) => newProd);
// };
export const getSearhAllProduct = async (search?: string) => {
  return (await axiosInstance.get<Product[]>(`/products?search=${search}`))
    .data;
};

export const getNewArrivalProduct = async (page = 1, search?: string) => {
  return (
    await axiosInstance.get<NewProductResponse>(
      `/products?new=newarrival&page=${page}&search=${search}`
    )
  ).data;
};
export const getBestSellerProduct = async (page = 1, search?: string) => {
  return (
    await axiosInstance.get<BestSellerProductResponse>(
      `/products?new=bestseller&page=${page}&search=${search}`
    )
  ).data;
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

export const getProductbyId = async (id: string) => {
  return (await axiosInstance.get<Product>(`/products/${id}`)).data;
};
