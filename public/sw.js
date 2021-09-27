// // // THIS FILE IS FOR MAKING PWA APP BEFORE FULL DEVLOPMENT
let cacheData = "appV1";

this.addEventListener("install", (event) => {
  // IT WILL PERFORM ACTION WHEN INSTALL EVENT IS CALLED
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
        "/",
        "/static/js/bundle.js",
        "/static/js/main.chunk.js",
        "/static/js/0.chunk.js",
        // "/asset-manifest.json",
        // "/sw.js",
        // "/static/js/vendors~main.chunk.js",
        "/index.html",
        // "/manifest.json",
        // "/favicon.ico",
        // "/stockjs-node",
        // "static/js/main.",
        "/users",
      ]);
    })
  );
});

this.addEventListener("fetch", (event) => {
  // IT WILL CALL THE ALL VALUES SAVED IN THE CACHE
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((result) => {
        if(result){

          return result;
        }
      
        let requestUrl = event.request.clone(); // IT MAKES OUR CODE TO RENDER 
        return fetch(requestUrl)
      })
    );
  }
});
