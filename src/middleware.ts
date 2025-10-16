import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  const url = new URL(context.request.url);

  // Check if the request is for the pv2 subdomain
  if (url.hostname === 'pv2.m24media.com') {
    // Rewrite the path to point to the pv2 directory
    let newPath = url.pathname;

    // Handle root path
    if (newPath === '/' || newPath === '') {
      newPath = '/pv2/index.html';
    } else if (!newPath.startsWith('/pv2/')) {
      // Prepend /pv2/ to all other paths
      newPath = '/pv2' + newPath;
    }

    // Create a new URL with the rewritten path
    const newUrl = new URL(newPath + url.search, url.origin);

    // Create a new request with the rewritten URL
    const newRequest = new Request(newUrl, context.request);

    // Return the response for the rewritten request
    return fetch(newRequest);
  }

  // For all other requests, proceed normally
  return next();
});
