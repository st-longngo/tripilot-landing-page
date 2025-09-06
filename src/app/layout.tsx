import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import BottomNavigation from "@/components/BottomNavigation";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tripilot - Tour Landing Page",
  description: "Xem thông tin chi tiết và lịch trình của các tour du lịch",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png", 
    apple: "/logo.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${roboto.variable} font-sans antialiased`}
      >
        {children}
        <BottomNavigation />
      </body>
    </html>
  );
}
