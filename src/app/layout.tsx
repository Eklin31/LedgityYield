import "@/styles/globals.css";
import { Poppins, Inter } from "next/font/google";
import { type NextPage } from "next";
import Header from "@/components/Header";
import { CardsHelper } from "@/components/ui";
import Footer from "@/components/Footer";
import clsx from "clsx";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["italic", "normal"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-poppins",
});
const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "Ledgity DeFi Protocol",
  description:
    "Invest stablecoins into real world assets and earn up to 7% APY. Access low-risk & stable yield offered by real world asset directly from your wallet.",
};

interface Props {
  children: React.ReactNode;
}

const RootLayout: NextPage<Props> = ({ children }) => {
  return (
    <>
      <html lang="en">
        <CardsHelper />
        <body className={clsx(`${inter.variable} ${poppins.variable}`, "w-screen overflow-x-hidden")}>
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </>
  );
};

export default RootLayout;
