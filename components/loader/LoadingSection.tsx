import ProductCardSkeleton from "../productcard/ProductCardSkeleton";

interface LoadingSectionProps {
  bigScreenSkeleton: number;
  smallScreenSkeleton: number;
  enableHeader?: boolean;
}
const LoadingSection = ({
  bigScreenSkeleton,
  smallScreenSkeleton,
  enableHeader,
}: LoadingSectionProps) => {
  return (
    <div className="mb-16">
      <div className="w-full  flex justify-between mb-8 items-baseline px-6 sm:px-6 md:px-6 lg:px-6 xl:px-0">
        {enableHeader && (
          <>
            <div className="skeletion w-32 h-5 rounded-md"></div>
            <div className="skeletion w-44 h-5 rounded-md"></div>
          </>
        )}
      </div>
      <div className=" md:grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 lg:gap-8 md:gap-8 sm:gap-8 gap-2 lg:px-0 md:px-6 sm:px-6  px-6 hidden">
        {Array.from({ length: bigScreenSkeleton }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
      <div className="grid grid-cols-2 md:hidden sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 lg:gap-8 md:gap-8 sm:gap-8 gap-2 lg:px-0 md:px-6 sm:px-6  px-6">
        {Array.from({ length: smallScreenSkeleton }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
};

export default LoadingSection;
