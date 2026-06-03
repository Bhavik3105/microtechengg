import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Pharmaceutical Machinery Products | Ointment Plant, Blenders & More – Microtech Engineering",
  },
  description:
    "Browse our full range of pharmaceutical & industrial machinery: ointment manufacturing plants, liquid oral plants, SS blenders, air tray dryers, PW/WFI tanks & more. Pan India delivery & export.",
  alternates: {
    canonical: "https://www.microtechengg.in/products",
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
