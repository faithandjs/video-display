import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect } from 'react';

export default function Box({
  className,
  src,
}: {
  className: string;
  src: string;
}) {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const child = gsap.timeline();

      child.to('.box img', {
        ease: 'none',
        rotation: -270,
        scale: 2.3,
        duration: 1,
        repeat: 0,
      });

      ScrollTrigger.create({
        animation: child,
        start: 'top top',
        end: '+=900',
        scrub: true,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className={'box ' + className}>
      {/* <video src={src} autoPlay muted loop playsInline>
        Your browser does not support the video tag.
      </video> */}
      <img src={src} alt='' />
    </div>
  );
}

