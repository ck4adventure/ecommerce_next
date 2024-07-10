import { Inter } from "next/font/google";
import "./globals.css";
import HeaderBar from "./_components/header";
import FooterBar from "./_components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dekka's Tarts",
  description: "Tarts and More ecommerce via Nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
				{children}
				<FooterBar />
			</body>
    </html>
  );
}
