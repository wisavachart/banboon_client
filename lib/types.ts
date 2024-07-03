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

export type TitleCatalogNameProps = {
  title: String;
};

export type FetchCategoryByIdParams = {
  id: string;
  signal: AbortSignal;
};
