import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import { Toaster } from "react-hot-toast";
import { AppProgressBar } from "next-app-progress-bar";
import "./globals.css";
import "tippy.js/dist/tippy.css";

//Fonts
const inter = Inter({ subsets: ["latin"] });

//Apollo
import { Provider } from "@/Apollo/provider";

//SEO
export const metadata: Metadata = {
  title: "PDF Shop | PDF Shop Seller Management"
}

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  //Cookies
  const cookie = cookies().get("JYMXcZ3TpR81fbv2");

  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider cookie={cookie?.value as string}>
          <Toaster
            toastOptions={{ duration: 5000 }}
            containerStyle={{ zIndex: 9999999 }}
          />
          <AppProgressBar
            color="#FF9500"
            height={4}
            showSpinner={false}
            zIndex={999999}
            delay={250}
          />
          {children}
        </Provider>
      </body>
    </html>
  );
}

export default RootLayout;