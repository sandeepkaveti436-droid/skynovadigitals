import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimations = () => {
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  // Fade in from bottom on scroll
  const fadeInUp = (element: HTMLElement | null, delay = 0) => {
    if (!element) return;

    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay,
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          end: "top 40%",
          scrub: false,
          markers: false,
        },
      },
    );
  };

  // Fade in from left on scroll
  const fadeInLeft = (element: HTMLElement | null, delay = 0) => {
    if (!element) return;

    gsap.fromTo(
      element,
      {
        opacity: 0,
        x: -80,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        delay,
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          end: "top 40%",
          scrub: false,
          markers: false,
        },
      },
    );
  };

  // Fade in from right on scroll
  const fadeInRight = (element: HTMLElement | null, delay = 0) => {
    if (!element) return;

    gsap.fromTo(
      element,
      {
        opacity: 0,
        x: 80,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        delay,
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          end: "top 40%",
          scrub: false,
          markers: false,
        },
      },
    );
  };

  // Parallax effect
  const parallax = (element: HTMLElement | null, speed = 0.5) => {
    if (!element) return;

    gsap.to(element, {
      y: () => ScrollTrigger.getAll()[0]?.getVelocity() * speed || 0,
      scrollTrigger: {
        trigger: element,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        markers: false,
      },
    });
  };

  // Scale and fade on scroll
  const scaleInUp = (element: HTMLElement | null, delay = 0) => {
    if (!element) return;

    gsap.fromTo(
      element,
      {
        opacity: 0,
        scale: 0.8,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        delay,
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          end: "top 40%",
          scrub: false,
          markers: false,
        },
      },
    );
  };

  // Staggered animation for multiple elements
  const staggerAnimation = (
    elements: (HTMLElement | null)[],
    animation: "fadeInUp" | "fadeInLeft" | "scaleInUp" = "fadeInUp",
  ) => {
    const validElements = elements.filter((el) => el !== null) as HTMLElement[];

    validElements.forEach((element, index) => {
      if (animation === "fadeInUp") {
        fadeInUp(element, index * 0.1);
      } else if (animation === "fadeInLeft") {
        fadeInLeft(element, index * 0.1);
      } else if (animation === "scaleInUp") {
        scaleInUp(element, index * 0.1);
      }
    });
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return {
    fadeInUp,
    fadeInLeft,
    fadeInRight,
    parallax,
    scaleInUp,
    staggerAnimation,
    elementsRef,
  };
};
