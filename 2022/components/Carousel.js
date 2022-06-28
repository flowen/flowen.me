import { useRef, useState } from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import { styled } from "stitches.config";

import { easeOut, easeInOut } from "@/utils/easing";
import { useEffect } from "react";

export default function Carousel({ projects, delay }) {
  const ref = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    if (active >= projects.length) {
      setActive(0);
      return;
    }

    const timer = () =>
      setTimeout(() => {
        setActive(active + 1);
      }, 400);

    timer();

    return () => clearTimeout(timer);
  }, [ref, active]);

  return (
    <Wrapper>
      <_Carousel
        ref={ref}
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-100%" }}
        transition={{ delay, ease: easeInOut }}
      >
        {projects.map((project, index) => (
          <Image
            key={project.name}
            className={active === index ? "active" : ""}
            src={`/assets/img/${project.image}`}
            alt={project.name}
            layout="fill"
            objectFit="cover"
            objectPosition={project.imagePosition}
          />
        ))}
      </_Carousel>
      <CarouselTitle
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: 0, rotate: -10, opacity: 1 }}
        exit={{ y: "25%", opacity: 0 }}
        transition={{ ease: easeOut, delay: delay + 0.2 }}
      >
        Projects
      </CarouselTitle>
    </Wrapper>
  );
}

const Wrapper = styled(motion.div, {
  overflow: "hidden",
  width: "100%",
  height: "100%",
});

const _Carousel = styled(motion.div, {
  position: "relative",
  width: "100%",
  height: "100%",

  "& .active": {
    zIndex: "100 !important",
  },
});

const CarouselTitle = styled(motion.h2, {
  position: "absolute",
  bottom: "-5vh",
  left: "-1vw",
  fontSize: "7vw",
  fontFamily: "$fontAlt",
  fontFeatureSettings: '"aalt" on',
  fontWeight: "400",
  mixBlendMode: "difference",
});
