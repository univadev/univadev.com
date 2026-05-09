'use client'

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const CrimsonTracker = () => {
  const pathname = usePathname();

  useEffect(() => {
    const urls = [
      'https://cdn.jsdelivr.net/gh/EldiiarBekbolotov/CrimsonJS@main/css/crimson.min.css',
      'https://cdn.jsdelivr.net/gh/EldiiarBekbolotov/CrimsonJS@main/js/crimson.min.js'
    ];

    urls.forEach(url => {
      fetch(`${url}?t=${Date.now()}`, { mode: 'no-cors', cache: 'no-store' })
        .catch(() => {}); // Silent catch
    });
  }, [pathname]);

  return null;
};

export default CrimsonTracker;