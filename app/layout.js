import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["600", "700", "800"],
});

export const metadata = {
  title: "SDAC",
  description: "San Diego Afghan Connections and Cultural Center",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`}>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
