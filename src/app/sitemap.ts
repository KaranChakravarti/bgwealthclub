import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.bgwealthclub.com";

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/guidance`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/join`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/memory`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/storage`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/testimonials`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/what-we-offer`,
      lastModified: new Date(),     
    },
  ];
}
