import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products – Industrial & Pharmaceutical Machinery | Microtech Engineering",
  description:
    "Browse Microtech Engineering full range of industrial and pharmaceutical machinery: pressure vessels, PW/WFI tanks, liquid processing plants, blenders, dryers, and more.",
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
