import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("location");

export default function LocationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
