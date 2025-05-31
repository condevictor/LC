import "./globals.css";
import { Inter } from "next/font/google";

const interFonte = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({children}) {
  return (
    <html lang="en" className={interFonte.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
