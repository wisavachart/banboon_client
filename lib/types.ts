export interface NavbarProps {
  onCategoryClick: () => void;
  setSelectCate: (idCate: string) => void;
}
export interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  selecCate: string;
  setSelectCate: (idCate: string) => void;
}
export interface TitleHeaderProps {
  title: string;
}

/// NEW WAY
export interface Product {
  _id: string;
  title: string;
  category: Category;
  price: number;
  imageCover: string;
  media: string[];
  description: string;
  isNewArrival?: boolean;
  isBestSeller?: boolean;
}

export interface Category {
  _id: string;
  title: string;
}

export interface ProductResponse {
  productBycategory: Product[];
  page: number;
  totalPages: number;
  totalCount: number;
}
export interface NewProductResponse {
  newarrilvalproduct: Product[];
  page: number;
  totalPages: number;
  totalCount: number;
}
export interface BestSellerProductResponse {
  bestSellerProduct: Product[];
  page: number;
  totalPages: number;
  totalCount: number;
}

export type ModalState = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  productID: string;
  setProductIdModal: (id: string) => void;
  fetchSwitch: boolean;
  setFetchOn: () => void;
  setFetchoff: () => void;
};
