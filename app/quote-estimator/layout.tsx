import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("quoteEstimator");

export default function QuoteEstimatorLayout({ children }: { children: React.ReactNode }) {
  return children;
}
