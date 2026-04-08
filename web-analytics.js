// Vercel Web Analytics initialization
// This script initializes the Web Analytics queue and loads the tracking script
// The actual tracking only happens in production when deployed to Vercel

window.va = window.va || function () {
  (window.vaq = window.vaq || []).push(arguments);
};

// Load the Web Analytics script
(function() {
  const script = document.createElement('script');
  script.src = 'https://cdn.vercel-insights.com/v1/script.js';
  script.defer = true;
  script.onerror = function() {
    console.log('[Web Analytics] Script failed to load. This is expected in local development.');
  };
  document.head.appendChild(script);
})();
