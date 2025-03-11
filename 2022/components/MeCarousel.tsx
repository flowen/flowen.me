"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/legacy/image";
import { motion } from "motion/react";
import { styled } from "stitches.config";
import { easeInOut } from "@/utils/easing";

interface MeCarouselProps {
  carouselStartDelay: number;
  height: string | number;
}

const meImages = [
  "me.webp", // This is the main image that will be shown first
  "me/me1.webp",
  "me/me2.webp",
  "me/me3.webp",
  "me/me4.webp",
  "me/me5.webp",
  "me/me6.webp",
  "me/me7.webp",
  "me/me8.webp",
];

export default function MeCarousel({
  carouselStartDelay,
  height,
}: MeCarouselProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number>(0);
  const [carouselStarted, setCarouselStarted] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCarouselStarted(true);
    }, carouselStartDelay * 1000);

    return () => clearTimeout(timer);
  }, [carouselStartDelay]);

  useEffect(() => {
    if (!ref.current || !carouselStarted) return;

    if (active >= meImages.length) {
      setActive(0);
      return;
    }

    const timer = setTimeout(() => {
      setActive(active + 1);
    }, 400);

    return () => clearTimeout(timer);
  }, [ref, active, carouselStarted]);

  return (
    <motion.div
      layoutId="me-image"
      style={{
        position: "relative",
        width: "100%",
        height,
        overflow: "hidden",
      }}
      initial={{ y: 0 }}
      exit={{ y: "-101%" }}
      transition={{ ease: easeInOut }}
    >
      <_Carousel ref={ref}>
        {meImages.map((image, index) => (
          <div
            key={image}
            className={`image-container ${active === index ? "active" : ""}`}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
            }}
          >
            <Image
              src={`/assets/img/${image}`}
              alt={index === 0 ? "me" : `Me ${index}`}
              layout="fill"
              objectFit="cover"
              objectPosition={index === 0 ? "center -20px" : "center"}
              priority={index === 0}
            />
          </div>
        ))}
      </_Carousel>
    </motion.div>
  );
}

const _Carousel = styled(motion.div, {
  position: "relative",
  width: "100%",
  height: "100%",

  "& .image-container": {
    opacity: 0,
    transition: "none",
  },

  "& .active": {
    opacity: 1,
    zIndex: "100 !important",
  },
});
