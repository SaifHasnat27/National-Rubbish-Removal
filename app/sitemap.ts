import { MetadataRoute } from "next";
import { BUSINESS } from "@/lib/constants";

const servicePaths = [
  "/household-rubbish-removal",
  "/green-waste-removal",
  "/deceased-estate-clearance",
  "/unwanted-furniture-removal",
  "/garage-clean-out",
  "/mattress-removal",
  "/strata-rubbish-removal",
  "/office-rubbish-removal",
  "/office-cubicle-removal",
  "/retail-strip-out-removal",
  "/warehouse-rubbish-removal",
  "/end-of-lease-rubbish-removal",
  "/building-materials-disposal",
  "/construction-site-clean-up",
  "/scrap-metal-removal",
  "/brick-and-concrete-removal",
  "/timber-removal",
  "/skip-bin-alternatives",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = BUSINESS.url;

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/location`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/quote-estimator`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/sitemap`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...servicePaths.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
