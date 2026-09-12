import { Anton, Montserrat } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-anton",
});

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Furtados School of Music × Corvuss American Academy | Music Specialisation Programme",
  description:
    "India's first-of-its-kind High School for student musicians. An integrated Grade 8–12 pathway combining WASC accredited American AP academics with rigorous music education.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${anton.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
