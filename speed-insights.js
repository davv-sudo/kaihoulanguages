// Vercel Speed Insights initialization
// This script initializes the Speed Insights queue and loads the tracking script
// The actual tracking only happens in production when deployed to Vercel

window.si = window.si || function () {
  (window.siq = window.siq || []).push(arguments);
};

// Load the Speed Insights script
(function() {
  const script = document.createElement('script');
  script.src = '/_vercel/speed-insights/script.js';
  script.defer = true;
  script.onerror = function() {
    console.log('[Speed Insights] Script failed to load. This is expected in local development.');
  };
  document.head.appendChild(script);
})();
