import { siteConfig } from "../config/site";

type SeoOptions = {
  title?: string;
  description?: string;
  image?: string;
  path?: string;
};

export function buildSeo({
  title,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  path = "/",
}: SeoOptions = {}) {
  const pageTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} | ${siteConfig.tagline}`;
  const canonicalUrl = new URL(path, siteConfig.url).toString();
  const imageUrl = new URL(image, siteConfig.url).toString();

  return {
    title: pageTitle,
    description,
    canonicalUrl,
    imageUrl,
    locale: siteConfig.locale,
    language: siteConfig.language,
  };
}
