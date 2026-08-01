import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "Luxe Beauty Lounge | Premium Salon & Spa in Peshawar", 
  description = "Experience premium beauty services, luxury facials, bridal makeup, and relaxing spa therapies at Luxe Beauty Lounge, Peshawar.", 
  url = "https://luxebeautylounge.com",
  image = "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1200"
}) => {
  return (
    <Helmet>
      {/* Standard Meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Schema.org LocalBusiness */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HealthAndBeautyBusiness",
          "name": "Luxe Beauty Lounge",
          "image": image,
          "@id": url,
          "url": url,
          "telephone": "+923001234567",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Luxury Avenue, University Road",
            "addressLocality": "Peshawar",
            "addressRegion": "KPK",
            "postalCode": "25000",
            "addressCountry": "PK"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 34.0151,
            "longitude": 71.5249
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "10:00",
            "closes": "21:00"
          },
          "priceRange": "$$"
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
