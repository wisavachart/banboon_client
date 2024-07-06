const ProductCardSkeleton = () => {
  return (
    <div className="drop-shadow-xl rounded-[14px]">
      <div className="relative flex-1">
        <div className="flex flex-col">
          <div className="overflow-hidden rounded-t-[14px]">
            <div className="skeletion w-full h-[150px] sm:h-[250px]"></div>
          </div>
          <div className="flex flex-col px-4 py-4 gap-2 bg-white rounded-b-[14px]">
            <div className="skeletion w-20 h-5 rounded-sm"></div>
            <div className="skeletion w-32 h-5 rounded-sm"></div>
            <div className="flex justify-between">
              <div className="skeletion w-32 h-5 rounded-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
