'use client';

import { useEffect } from 'react';

export default function ScrollRevealInit() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    // Function to observe new elements
    const observeElements = () => {
      const revealElements = document.querySelectorAll('.reveal:not(.revealed), .reveal-scale:not(.revealed), .reveal-left:not(.revealed), .reveal-right:not(.revealed)');
      revealElements.forEach((el) => observer.observe(el));
    };

    // Initial observation
    observeElements();

    // Re-observe when DOM changes (for dynamically loaded content)
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}
