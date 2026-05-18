export function normalizeExternalUrl(url: string) {
  if (!url) {
    return "";
  }

  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }

  return `https://${url}`;
}

export function buildMailTo(email: string) {
  if (!email) {
    return "#contacto";
  }

  return `mailto:${email}`;
}
