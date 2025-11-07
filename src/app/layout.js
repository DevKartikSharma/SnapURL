import "./globals.css";
import Navbar from "./components/Navbar";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200","300","400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "SnapURL",
  description: "Make your own snaps",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${poppins.className} antialiased min-h-screen flex flex-col items-center`}
      >
        
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#e6e6e6_1px,transparent_1px),linear-gradient(to_bottom,#e6e6e6_1px,transparent_1px)] bg-size-[6rem_4rem]"></div>

        <Navbar />
        {children}
      </body>
    </html>
  );
}
