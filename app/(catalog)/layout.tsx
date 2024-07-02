import Footer from "@/components/footer/Footer";
import NavigationWrapper from "@/components/navigation/NavigationWrapper";
import TanstackProvider from "@/providers/TanstackProvider";
import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "../globals.css";

const prompt_init = Prompt({
  weight: ["300"],
  subsets: ["thai"],
});
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
      <body className={`${prompt_init.className} font-prompt`}>
        <TanstackProvider>
          <NavigationWrapper />
          {children}
          <Footer />
        </TanstackProvider>
      </body>
    </html>
  );
}
