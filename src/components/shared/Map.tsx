

// src/components/shared/Map.tsx
'use client';

import { useState, useEffect } from 'react';

const Map = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a skeleton or placeholder that matches the SSR dimensions
    return <div className="w-full h-full bg-gray-200 animate-pulse" />;
  }

  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.50302228364!2d-123.06102750000001!3d43.8039245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54c130465974c153%3A0x857f02037df5624f!2sHidden%20Valley%20Golf%20Course!5e0!3m2!1sen!2sus!4v1777564233254!5m2!1sen!2sus"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Maps"
      className="min-h-[300px] lg:min-h-[450px] h-full"
    />
  );
};

export default Map;