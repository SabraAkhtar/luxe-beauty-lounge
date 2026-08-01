// Analytics Utility Stub for future Google Analytics / Mixpanel Integration

export const pageView = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-XXXXXXXXXX', {
      page_path: url,
    });
  } else {
    console.log(`[Analytics Stub] Page View: ${url}`);
  }
};

export const trackEvent = ({ action, category, label, value }) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  } else {
    console.log(`[Analytics Stub] Event Tracked: ${action} - ${category} - ${label}`);
  }
};
