'use client';

import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

import sheif from '@/assets/sheif.png';
import burger from '@/assets/burger.png';
import pizza from '@/assets/pizza.png';
import coffe from '@/assets/coffe.png';
import noodles from '@/assets/noodles.png';
import ramen from '@/assets/ramen.png';

const foods = [
  sheif,
  burger,
  pizza,
  coffe,
  noodles,
  ramen,
];

export default function InfiniteFoodScroll() {
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const track = trackRef.current;

    if (!track) return;

    const singleSetWidth = track.scrollWidth / 4;

    const tween = gsap.to(track, {
      x: -singleSetWidth,
      duration: 10,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => {
          return parseFloat(x) % singleSetWidth;
        }),
      },
    });

    return () => tween.kill();
  }, []);

  return (
    <section className="relative w-full overflow-hidden rounded-4xl bg-secondary py-6 mt-10">
      {/* Left fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-linear-to-r from-secondary to-transparent" />

      {/* Right fade */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-linear-to-l from-secondary to-transparent" />

      <div
        ref={trackRef}
        className="flex w-max items-center gap-5 will-change-transform md:gap-8"
      >
        {[...foods, ...foods, ...foods, ...foods,...foods , ...foods].map(
          (food, index) => (
            <div
              key={index}
              className="flex size-20 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/20 p-4 shadow-lg backdrop-blur-xl md:size-28"
            >
              <Image
                src={food}
                alt={`food-${index}`}
                className="h-full w-full object-contain"
                priority
              />
            </div>
          )
        )}
      </div>
    </section>
  );
}