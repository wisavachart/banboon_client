import ProductmodalImgGallary from "./ProductmodalImgGallary";
export interface ProductModalImageProps {
  imgCover?: string;
  imgData?: string[];
}
const ProductModalImage = ({ imgCover, imgData }: ProductModalImageProps) => {
  const imgGallary = [imgCover, ...imgData!].filter(
    (img): img is string => img !== undefined
  );

  return (
    <div className="w-full h-auto stage3:h-[480px] lg:w-[500px] lg:h-[500px] text-white rounded-tl-md rounded-tr-md lg:rounded-tr-none lg:rounded-bl-md  flex justify-center overflow-hidden">
      <ProductmodalImgGallary gallary={imgGallary} />
    </div>
  );
};

export default ProductModalImage;
