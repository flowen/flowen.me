import React, { useState, useEffect } from "react";
import Image from "next/legacy/image";

import { motion, AnimatePresence } from "motion/react";
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
  onVisibilityChange?: (isVisible: boolean) => void;
  onOpenChange?: (isOpen: boolean) => void;
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

const overlayVariants = {
  initial: { y: 0, scale: 0.25, opacity: 1 },
  animate: ([inView, isOpen]: [boolean, boolean]) => ({
    y: inView ? -7.5 : isOpen ? 0 : 0,
    scale: isOpen ? 1.025 : inView ? 1.025 : 0.25,
    opacity: isOpen ? 0 : 1,
    transition: {
      y: { duration: 0.5, delay: 0.25, ease: easeOut },
      scale: { duration: 0.5, delay: 0.25, ease: easeOut },
      opacity: { duration: 0.5, delay: 0, ease: easeOut },
    },
  }),
};

const detailsVariant = {
  initial: {
    height: 0,
  },
  animate: ({ isOpen }: { isOpen: boolean }) => ({
    height: isOpen ? "auto" : 0,
    transition: {
      height: { duration: 0.5, ease: easeOut },
    },
  }),
  exit: {
    height: 0,
    transition: {
      height: { duration: 0.3, ease: easeInOut },
    },
  },
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

export default function ProjectCard({
  project,
  index,
  onVisibilityChange,
  onOpenChange,
}: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Notify parent when open state changes
  useEffect(() => {
    if (onOpenChange) {
      onOpenChange(isOpen);
    }
  }, [isOpen, onOpenChange]);

  // Handle opening/closing the project details
  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  if (!project) {
    return null;
  }

  const { name, image, imagePosition } = project;

  if (!name || !image) {
    return null;
  }

  return (
    <InView
      threshold={0.2}
      triggerOnce
      onChange={(inView) => onVisibilityChange && onVisibilityChange(inView)}
    >
      {({ ref, inView }) => (
        <ProjectWrapper transition={{ duration: 0.5, ease: easeOut }}>
          <Anchor
            onClick={handleToggleOpen}
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
                      height: "100%",
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

              <Overlay
                variants={overlayVariants}
                initial="initial"
                animate="animate"
                custom={[inView, isOpen]}
                style={{ originY: 0.25 }}
              />
            </_Project>
          </Anchor>

          <AnimatePresence>
            {isOpen && (
              <ProjectDetails
                layout
                variants={detailsVariant}
                initial="initial"
                animate="animate"
                exit="exit"
                custom={{ isOpen }}
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

export const Overlay = styled(motion.div, {
  zIndex: 1000,
  position: "absolute",
  width: "100%",
  height: "100%",
  bottom: 0,
  left: 0,
  background: "red",
  mixBlendMode: "difference",
});

const ProjectWrapper = styled(motion.div, {
  position: "relative",
  width: "100%",
  marginBottom: "5vh",
});

const ProjectDetails = styled(motion.div, {
  overflow: "hidden",
  padding: "2rem",
  backgroundColor: "#fff",
  color: "#000",
  marginTop: "1rem",
  transformOrigin: "top",
  willChange: "height, opacity",

  "& *": {
    fontSize: "1.25rem",
  },

  "& p": {
    marginTop: 0,
  },

  "& div": {
    marginBottom: "1rem",
  },

  "& ul": {
    margin: 0,
    padding: 0,
    listStyle: "none",
  },

  "& a": {
    color: "#000",
    textDecoration: "none",
    borderBottom: "1px solid #000",
    paddingBottom: "2px",
    transition: "all 0.2s ease",

    "&:hover": {
      borderBottomColor: "transparent",
    },
  },
});
