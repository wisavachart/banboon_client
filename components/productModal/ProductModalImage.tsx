import ProductmodalImgGallary from "./ProductmodalImgGallary";

const ProductModalImage = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full h-[250px] text-white rounded-tl-md rounded-tr-md flex justify-center overflow-hidden">
        <ProductmodalImgGallary />
      </div>
    </div>
  );
};

export default ProductModalImage;
