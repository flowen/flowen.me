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

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);

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
                <motion.div
                  variants={yVariants}
                  initial="initial"
                  animate="animate"
                  style={{ height: "100%" }}
                  whileHover={{ scale: 1.1 }}
                >
                  <Image
                    src={`/assets/img/projects/${project.image}`}
                    alt={project.name}
                    layout="fill"
                    objectFit="cover"
                    objectPosition={project.imagePosition}
                    style={{
                      pointerEvents: "none",
                    }}
                  />
                </motion.div>

                <Name
                  data-name={project.name}
                  variants={yVariants}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: 0.5 }}
                >
                  {project.name}
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
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
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
  aspectRatio: "20 / 9",
  width: "100%",
  cursor: "pointer",
});

const _Project = styled(motion.div, {
  position: "relative",
  width: "100%",
  height: "24vh",
  border: "3px solid #fff",

  "& img": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  "@tabletLandscape": {
    height: "35vh",
  },
  "@tablet": {
    minHeight: "300px",
  },
  "@laptop": {
    minHeight: "450px",
  },
});

const Inner = styled("div", {
  position: "relative",
  overflow: "hidden",
  width: "100%",
  height: "100%",
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

const ProjectDetails = styled(motion.div, {
  padding: "1rem",
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  color: "#000",
  overflow: "hidden",

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
});

const ProjectWrapper = styled(motion.div, {
  marginBottom: "5vh",
});
