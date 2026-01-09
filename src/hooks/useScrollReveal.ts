'use client';

import { useEffect, useRef, RefObject, useCallback } from 'react';

// Hook for single element reveal
export function useScrollReveal<T extends HTMLElement>(): RefObject<T | null> {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

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

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return ref;
}

// Hook for observing a container and revealing all child .reveal elements
export function useContainerReveal<T extends HTMLElement>(): RefObject<T | null> {
  const containerRef = useRef<T | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const revealElements = container.querySelectorAll('.reveal, .reveal-scale, .reveal-left, .reveal-right');
    
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

    revealElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return containerRef;
}

// Global scroll reveal observer - call once in layout or page
export function initScrollReveal(): () => void {
  if (typeof window === 'undefined') return () => {};

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

  // Observe all reveal elements
  const revealElements = document.querySelectorAll('.reveal, .reveal-scale, .reveal-left, .reveal-right');
  revealElements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}
