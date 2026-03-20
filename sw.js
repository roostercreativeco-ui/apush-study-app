// APUSH Study App — Service Worker
// Caches core app files for offline use

const CACHE_NAME = 'apush-v1';

const CORE_FILES = [
  '/',
  '/index.html',
  '/quiz.html',
  '/flashcards.html',
  '/cram.html',
  '/saq.html',
  '/leq.html',
  '/leaderboard.html',
  '/feedback.html',
  'https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800;900&family=Space+Mono:wght@400;700&display=swap'
];

// Install — cache core files
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(CORE_FILES);
    }).then(function() {
      return self.skipWaiting();
    })
  );
});

// Activate — clean up old caches
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(key) { return key !== CACHE_NAME; })
            .map(function(key) { return caches.delete(key); })
      );
    }).then(function() {
      return self.clients.claim();
    })
  );
});

// Fetch — network first, fall back to cache
self.addEventListener('fetch', function(event) {
  // Skip non-GET requests and Firebase/Google API calls
  if (event.request.method !== 'GET') return;
  var url = event.request.url;
  if (url.includes('firestore.googleapis.com') ||
      url.includes('identitytoolkit') ||
      url.includes('googleapis.com/identitytoolkit') ||
      url.includes('docs.google.com/spreadsheets')) {
    return; // Always go to network for live data
  }

  event.respondWith(
    fetch(event.request)
      .then(function(response) {
        // Cache successful responses for app files
        if (response.ok && (url.includes(self.location.origin) || url.includes('fonts.googleapis') || url.includes('fonts.gstatic'))) {
          var clone = response.clone();
          caches.open(CACHE_NAME).then(function(cache) {
            cache.put(event.request, clone);
          });
        }
        return response;
      })
      .catch(function() {
        // Network failed — try cache
        return caches.match(event.request).then(function(cached) {
          if (cached) return cached;
          // Offline fallback for HTML pages
          if (event.request.headers.get('accept') && event.request.headers.get('accept').includes('text/html')) {
            return caches.match('/index.html');
          }
        });
      })
  );
});
