// Font optimization utilities
export const optimizeFonts = () => {
  // Preload critical font files that are likely to be used above the fold
  const fontFiles = [
    // Montserrat wagi używane w Hero i Navigation
    "https://fonts.gstatic.com/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459WdhyyTh89ZNpQ.woff2", // 400
    "https://fonts.gstatic.com/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459W1hyyTh89ZNpQ.woff2", // 500
    "https://fonts.gstatic.com/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459WRhyyTh89ZNpQ.woff2", // 600

    // Lora for body text
    "https://fonts.gstatic.com/s/lora/v32/nwpTtKy2OAdR1K-IwhWudA-GkCsDbsVexweCKg.woff2", // 400
  ];

  fontFiles.forEach((url) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "font";
    link.type = "font/woff2";
    link.crossOrigin = "anonymous";
    link.href = url;
    document.head.appendChild(link);
  });
};

// Image preloading utilities
export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

export const preloadCriticalImages = (images) => {
  const promises = images.slice(0, 3).map((src) => preloadImage(src)); // Only first 3
  return Promise.allSettled(promises);
};

// Resource hints
export const addResourceHints = () => {
  const domains = ["https://fonts.googleapis.com", "https://fonts.gstatic.com", "https://pati.wiktordawid.pl"];

  domains.forEach((domain) => {
    const link = document.createElement("link");
    link.rel = "dns-prefetch";
    link.href = domain;
    document.head.appendChild(link);
  });
};
