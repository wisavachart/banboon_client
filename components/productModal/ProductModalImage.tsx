import ProductmodalImgGallary from "./ProductmodalImgGallary";
interface ProductModalImageProps {
  imgData?: string[];
}
const ProductModalImage = ({ imgData }: ProductModalImageProps) => {
  return (
    <div className="w-full flex justify-center  lg:w-[500px] lg:h-[500px]">
      <div className="w-full h-[250px] stage3:h-[480px] lg:h-[500px] text-white rounded-tl-md rounded-tr-md lg:rounded-tr-none lg:rounded-bl-md  flex justify-center overflow-hidden">
        <ProductmodalImgGallary />
      </div>
    </div>
  );
};

export default ProductModalImage;
