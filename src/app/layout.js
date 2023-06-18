import { Mulish } from "next/font/google";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import "./globals.css";

export const metadata = {
  title: "JOI CLOTH",
  description: "Online Clothing Store",
};

const mulish = Mulish({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={mulish.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
