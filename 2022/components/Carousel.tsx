"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/legacy/image";

import { motion } from "framer-motion";
import { styled } from "stitches.config";

import { Overlay } from "../pages/project-card";
import { easeOut, easeInOut } from "@/utils/easing";
import { Timeline } from "@/pages/index";
interface Project {
  name: string;
  image: string;
  imagePosition: string;
}

interface CarouselProps {
  projects: Project[];
  tl: Timeline;
}

const overlayVariants = {
  initial: { opacity: 0, scale: [1, 0] },
  animate: (delay: number) => {
    return {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.25,
        delay: delay,
      },
    };
  },
};

export default function Carousel({ projects, tl }: CarouselProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number>(0);

  useEffect(() => {
    if (!ref.current) return;

    if (active >= projects.length) {
      setActive(0);
      return;
    }

    const timer = setTimeout(() => {
      setActive(active + 1);
    }, 400);

    return () => clearTimeout(timer);
  }, [ref, active, projects.length]);

  return (
    <Wrapper>
      <_Carousel
        ref={ref}
        initial={{ y: "-101%" }}
        animate={{ y: 0 }}
        exit={{ y: "-101%" }}
        transition={{ delay: tl.imgProjects, ease: easeInOut }}
      >
        {projects.map((project, index) => (
          <Image
            key={project.name}
            className={active === index ? "active" : ""}
            src={`/assets/img/projects/${project.image}`}
            alt={project.name}
            layout="fill"
            objectFit="cover"
            objectPosition={project.imagePosition}
            priority={true}
          />
        ))}
        <Overlay
          variants={overlayVariants}
          initial="initial"
          animate="animate"
          custom={tl.imgProjects + 0.2}
        />
      </_Carousel>

      <CarouselTitle
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: 0, rotate: -10, opacity: 1 }}
        exit={{ y: "-25%", opacity: 0 }}
        transition={{ ease: easeOut, delay: tl.imgProjects - 0.2 }}
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
  bottom: "-20px",
  left: "-10px",
  width: "100%",
  whiteSpace: "nowrap",
  fontSize: "7.5vw",
  include: "fontAlt",
  zIndex: 100,
  // mixBlendMode: "difference",
});
