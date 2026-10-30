import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "My Fav Boardgames",
  description: "List of popular boardgames",
};

const quicksand = Quicksand({
  subsets: ["latin"],
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${quicksand.className} h-full antialiased`}>
      <body className="bg-slate-50 text-citrus-dark antialiased flex flex-col min-h-screen">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
