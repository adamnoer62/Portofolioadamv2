import type { Metadata } from "next";
import dynamic from "next/dynamic";
import "./globals.css";
import { SmoothScroll } from "@/components/motion/SmoothScroll";

const Cursor = dynamic(() =>
  import("@/components/interaction/Cursor").then((mod) => mod.Cursor),
);
const title = "Adam — Full Stack Developer";
const description =
  "Full Stack Developer building web applications, digital products, and interactive experiences.";

export const metadata: Metadata = {
  metadataBase: new URL("https://portofolioadam.xyz"),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
    url: "/",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SmoothScroll />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
