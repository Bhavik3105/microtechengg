import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Industrial & Pharmaceutical Machinery Blog | Microtech Engineering",
  },
  description:
    "Stay updated with technical guides, cGMP compliance guidelines, storage tank configurations, and powder blending technology insights from Microtech Engineering.",
  alternates: {
    canonical: "https://www.microtechengg.in/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
