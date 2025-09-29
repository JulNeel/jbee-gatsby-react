export const sanitizeYoastHead = (fullHead: string, siteUrl: string) => {
  return fullHead.replace(/"item":"\//g, `"item":"${siteUrl}/`)
    .replace(/"@id":"\//g, `"@id":"${siteUrl}/`);
};
