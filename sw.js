this.addEventListener('install', function(event) {
  console.log('install');
  console.log(event);
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      console.log('v1');
      console.log(cache);
      return cache.addAll([
        '/sw-test/',
        '/sw-test/index.html',
        '/sw-test/app.js'
      ]);
    })
  );
});

this.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
