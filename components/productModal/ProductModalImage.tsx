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
    <div className="w-full flex justify-center  lg:w-[500px] lg:h-[500px]">
      <div className="w-full h-[250px] stage3:h-[480px] lg:h-[500px] text-white rounded-tl-md rounded-tr-md lg:rounded-tr-none lg:rounded-bl-md  flex justify-center overflow-hidden">
        <ProductmodalImgGallary gallary={imgGallary} />
      </div>
    </div>
  );
};

export default ProductModalImage;
