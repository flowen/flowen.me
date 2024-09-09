import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { InView } from "react-intersection-observer";
import { styled } from "../stitches.config";
import { easeOut, easeInOut } from "../utils/easing";

interface ProjectCardProps {
  project: {
    name: string;
    image: string;
    imagePosition?: string;
    description: string;
    tech: string;
    press?: Array<{ name: string; url: string }>;
    url?: string;
  };
  index: number;
}

const projectVariants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: easeOut,
    },
  }),
  exit: {
    y: 100,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: easeInOut,
    },
  },
};

const yVariants = {
  initial: {
    y: 100,
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
};

const shadowVariants = {
  initial: { y: 0 },
  animate: (inView: boolean) => ({
    x: inView ? 8 : 4,
    y: inView ? 15 : 0,
    transition: {
      duration: 0.5,
      delay: 0.75,
      ease: easeInOut,
    },
  }),
};

const linkVariant = {
  initial: {
    opacity: 0,
  },
  animate: (inView: boolean) => ({
    opacity: inView ? 1 : 0,
    transition: {
      duration: 0.3,
      ease: easeOut,
    },
  }),
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (!project) {
    return null;
  }

  const { name, image, imagePosition } = project;

  if (!name || !image) {
    return null;
  }

  return (
    <InView threshold={0.2} triggerOnce>
      {({ ref, inView }) => (
        <ProjectWrapper layout transition={{ duration: 0.5, ease: easeOut }}>
          <Anchor
            onClick={() => setIsOpen(!isOpen)}
            variants={linkVariant}
            initial="initial"
            animate="animate"
            custom={inView}
          >
            <_Project
              variants={projectVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={index}
              ref={ref}
            >
              <Inner>
                <ImageWrapper
                  variants={yVariants}
                  initial="initial"
                  animate="animate"
                  whileHover={{ scale: 1.1 }}
                >
                  <Image
                    src={`/assets/img/projects/${image}`}
                    alt={name}
                    layout="fill"
                    objectFit="cover"
                    objectPosition={imagePosition || "center"}
                    style={{
                      pointerEvents: "none",
                      position: "unset",
                      width: "unset",
                      height: "unset",
                    }}
                  />
                </ImageWrapper>

                <Name
                  data-name={name}
                  variants={yVariants}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: 0.5 }}
                >
                  {name}
                </Name>
              </Inner>

              <Shadow
                variants={shadowVariants}
                initial="initial"
                animate="animate"
                custom={inView}
              />
            </_Project>
          </Anchor>

          <AnimatePresence>
            {isOpen && (
              <ProjectDetails
                layout
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{ duration: 0.3 }}
                style={{ height: isOpen ? "auto" : 0 }}
              >
                <p>{project.description}</p>
                <div>
                  <strong>Tech:</strong> {project.tech}
                </div>
                {project.press && (
                  <div>
                    <strong>Press:</strong>
                    <ul>
                      {project.press.map((item, idx) => (
                        <li key={idx}>
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Project
                  </a>
                )}
              </ProjectDetails>
            )}
          </AnimatePresence>
        </ProjectWrapper>
      )}
    </InView>
  );
}

const Anchor = styled(motion.div, {
  display: "flex",
  cursor: "pointer",
  width: "100%",
});

const _Project = styled(motion.div, {
  position: "relative",
  width: "100%",
  border: "3px solid #fff",
  // height: "100%",
});

const Inner = styled("div", {
  position: "relative",
  overflow: "hidden",
  width: "100%",
  height: "100%",
});

const ImageWrapper = styled(motion.div, {
  position: "relative",
  width: "100%",
  height: "100%",

  "& > span": {
    position: "unset !important",
  },

  "& img": {
    position: "relative !important",
    width: "100% !important",
    height: "unset !important",
    objectFit: "cover",
    aspectRatio: "20 / 9",
  },
});

const Name = styled(motion.h2, {
  zIndex: "500",
  position: "absolute",
  bottom: "1rem",
  left: "1rem",
  fontSize: "5vw",
  mixBlendMode: "difference",
  whiteSpace: "nowrap",

  "&::before": {
    zIndex: "500",
    content: "attr(data-name)",
    position: "absolute",
    bottom: "3px",
    left: "3px",
    whiteSpace: "nowrap",
    mixBlendMode: "difference",
    backgroundColor: "black",
  },

  "&::after": {
    zIndex: "500",
    content: "attr(data-name)",
    position: "absolute",
    bottom: "3px",
    left: "3px",
    whiteSpace: "nowrap",
    mixBlendMode: "difference",
    backgroundColor: "white",
  },
});

const Shadow = styled(motion.div, {
  zIndex: -1,
  position: "absolute",
  width: "100%",
  height: "100%",
  bottom: "-4px",
  left: "4px",
  background: "red",
  mixBlendMode: "difference",
});

const ProjectDetails = styled(
  motion.div,
  {
    transformOrigin: "top",
    overflow: "hidden",
    height: "auto", // Remove the conditional height
    padding: "1rem",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    color: "#000",

    "& p, div, > a": {
      fontSize: "0.25em",
    },

    "p, div": {
      marginBottom: "1em",
    },

    "& ul": {
      display: "inline-flex",
      gap: "1em",
      listStyle: "disc",
      marginLeft: "1rem",
    },

    "& a": {
      color: "blue",
      textDecoration: "underline",
    },
  },
  { shouldForwardProp: (prop: string) => prop !== "isOpen" }
);

const ProjectWrapper = styled(motion.div, {
  marginBottom: "5vh",
});
