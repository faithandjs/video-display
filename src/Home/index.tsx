import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Box from '../components/box';

import b from '../assets/b.gif';
import c from '../assets/c.gif';
import d from '../assets/d.gif';
import e from '../assets/e.gif';
import f from '../assets/f.gif';
import g from '../assets/g.gif';

import './style.css';

export default function Index() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.to('.container', {
        ease: 'none',
        rotation: 270,
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
      {[e, d, f, c, f, d, b, g].map((item, key) => (
        <Box key={key} className={`v${key}`} src={item} />
      ))}
    </div>
  );
}

//[b, d, c, c, d, d, b, c]

