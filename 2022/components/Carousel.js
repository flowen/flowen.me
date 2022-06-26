import { useRef, useState } from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import { styled } from "stitches.config";

import { easeInOut } from "@/utils/easing";
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
  );
}

const _Carousel = styled(motion.div, {
  position: "relative",
  width: "100%",
  height: "100%",

  "& .active": {
    zIndex: "100 !important",
  },
});
