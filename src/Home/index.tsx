import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Box from '../components/box';

import a from '../assets/b.mp4';

import './style.css';

export default function Index() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.to('.container', {
        ease: 'none',
        rotation: 360,
        scale: 2,
        duration: 1,
        repeat: 0,
      });

      ScrollTrigger.create({
        animation: tl,
        trigger: '.container',
        pin: true,
        start: 'top top',
        end: '+=900',
        scrub: true,
        anticipatePin: 1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className='container'>
      {[a, a, a, a, a, a, a, a].map((item, key) => (
        <Box key={key} className={`v${key}`} src={item} />
      ))}
    </div>
  );
}

