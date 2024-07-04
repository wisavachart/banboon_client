"use client";

import useSearchDebounce from "@/hook/useSearchDebounce";
import { useGetProductByCategory } from "@/service/queries";
import { useState } from "react";
interface ProductSectionBycategoryProps {
  params: string;
}

const ProductSection = ({ params }: ProductSectionBycategoryProps) => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const debouncedValue = useSearchDebounce(search, 1000);
  //work
  // const { data, isPending, isError, error, isPlaceholderData, isFetching } =
  //   useGetProductByCategory(params, page);
  const { data, isPending, isError, error, isPlaceholderData, isFetching } =
    useGetProductByCategory(params, page, debouncedValue);
  function setNextpage() {
    setPage(page + 1);
  }
  function setPrevpage() {
    if (page > 1) {
      setPage(page - 1);
    }
  }
  const maxpage = data?.totalPages;
  return (
    <>
      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="ค้นหา"
      />

      <div>
        {isPending ? (
          <div>loading...</div>
        ) : isError ? (
          <div>Error {error.message}</div>
        ) : (
          <div>
            {data?.productBycategory.map((product) => (
              <p key={product._id}>{product.title}</p>
            ))}
          </div>
        )}
        <div>
          <span>Current page : {page} </span>
          <button onClick={setPrevpage} disabled={page == 1}>
            Prev page
          </button>
          <button
            onClick={() => {
              if (!isPlaceholderData) {
                setNextpage();
              }
            }}
            disabled={isPlaceholderData || page == maxpage}>
            Next page
          </button>
          {isFetching ? <span>Loading...</span> : null}{" "}
        </div>
      </div>
    </>
  );
};

export default ProductSection;

//Work better
// return (
//   <div>
//     {isPending ? (
//       <div>loading...</div>
//     ) : isError ? (
//       <div>Error {error.message}</div>
//     ) : (
//       <div>
//         {data?.productBycategory.map((product) => (
//           <p key={product._id}>{product.title}</p>
//         ))}
//       </div>
//     )}
//     <div>
//       <span>Current page : {page} </span>
//       <button onClick={setPrevpage} disabled={page == 1}>
//         Prev page
//       </button>
//       <button
//         onClick={() => {
//           if (!isPlaceholderData) {
//             setNextpage();
//           }
//         }}
//         disabled={isPlaceholderData || page == maxpage}>
//         Next page
//       </button>
//       {isFetching ? <span>Loading...</span> : null}{" "}
//     </div>
//   </div>
// );

{
  /* <div>
      {isPending ? (
        <div>loading...</div>
      ) : isError ? (
        <div>Error {error.message}</div>
      ) : (
        <div>
          {data?.productBycategory.map((product) => (
            <p key={product._id}>{product.title}</p>
          ))}
        </div>
      )}
      <div>
        <span>Current page : {page} </span>
        <button onClick={() => setPage((old) => Math.max(old - 1, 0))}>
          Prev page
        </button>{" "}
        <button
          onClick={() => {
            if (!isPlaceholderData) {
              setPage((old) => old + 1);
            }
          }}
          disabled={isPlaceholderData}>
          Next page
        </button>
        {isFetching ? <span>Loading...</span> : null}{" "}
      </div>
    </div> */
}
