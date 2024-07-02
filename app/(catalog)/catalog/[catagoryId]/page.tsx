"use client";
import { useParams } from "next/navigation";

const page = () => {
  const params = useParams();
  console.log(params.catagoryId);
  return <div>{params.catagoryId}</div>;
};

export default page;
