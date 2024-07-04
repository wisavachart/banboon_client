export interface NavbarProps {
  onCategoryClick: () => void;
}
export interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}
export interface TitleHeaderProps {
  title: string;
}

/// NEW WAY
export interface Product {
  _id: string;
  title: string;
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
