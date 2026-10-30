import type { Metadata } from "next";
import {Quicksand} from "next/font/google"
import "./globals.css";

export const metadata: Metadata = {
  title: "My Fav Boardgames",
  description: "List of popular boardgames",
};

const quicksand = Quicksand({
  subsets: ['latin']
})

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${quicksand.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
