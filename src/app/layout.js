import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import HeaderBar from "./_components/header";
import FooterBar from "./_components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dekkas",
  description: "Tarts and More ecommerce via Nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
				{children}
				<FooterBar />
				<Analytics />
			</body>
    </html>
  );
}
