'use client';

import { useEffect } from 'react';

export default function Aos() {
  useEffect(() => {
    import('aos').then((AOS) =>
      AOS.init({
        duration: 800,
        once: true,
      })
    );
  }, []);

  return <></>;
}
