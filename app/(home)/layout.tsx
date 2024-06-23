import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "บ้านบุญ (Baanboon Superstore)",
  description:
    "บ้านบุญซุปเปอร์สโตร์ สินค้าเริ่มต้นราคา 20 บาท | รับชมและสั่งซื้อสินค้า คลิก",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
