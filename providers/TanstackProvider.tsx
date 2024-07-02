"use client";
import { queryClient } from "@/lib/httpsRequest";
import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";

const TanstackProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default TanstackProvider;
