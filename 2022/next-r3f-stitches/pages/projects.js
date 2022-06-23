import Image from "next/image";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

import { styled } from "stitches.config";
import { easeInOut } from "@/utils/easing";

const projectVariants = {
  initial: { y: "200vh" },
  animate: (index) => ({
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.1,
      ease: easeInOut,
    },
  }),
  exit: (index) => ({
    y: "200vh",
    transition: {
      duration: 0.5,
      delay: index * 0.1,
    },
  }),
};

const yVariants = {
  initial: { y: 15 },
  animate: {
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeInOut,
    },
  },
};

const shadowVariants = {
  initial: { y: 0 },
  animate: (inView) => ({
    y: inView ? 15 : 0,
    transition: {
      duration: 0.5,
      ease: easeInOut,
    },
  }),
};

const wrapVariants = {
  initial: { y: 0 },
  animate: (inView) => ({
    y: inView ? -30 : 0,
    transition: {
      duration: 0.5,
      ease: easeInOut,
    },
  }),
};

export default function Projects({ projects, introIsDone }) {
  // useLayoutEffect(() => {
  //   // always start at top of the page
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <Wrapper>
      {projects.map((project, index) => (
        <InView key={index} threshold={1} triggerOnce={introIsDone}>
          {({ ref, inView }) => {
            return (
              <motion.div
                variants={wrapVariants}
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
                      whileHover={{ scale: 1.05 }}
                    >
                      <Image
                        src={`/assets/img/${project.image}`}
                        alt={project.name}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center center"
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

                    <URL
                      variants={yVariants}
                      initial="initial"
                      animate="animate"
                      transition={{ delay: 1.5 }}
                    >
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={project.name}
                      >
                        OPEN URL
                      </a>
                    </URL>
                  </Inner>

                  <Shadow
                    variants={shadowVariants}
                    initial="initial"
                    animate="animate"
                    custom={inView}
                  />
                </_Project>
              </motion.div>
            );
          }}
        </InView>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  margin: "2.5vh 0",
});

const _Project = styled(motion.div, {
  position: "relative",
  width: "100%",
  height: "35vh",
  minHeight: "300px",
  margin: "5vh 0",
  border: "3px solid #fff",

  "& img": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
});

const Inner = styled("div", {
  position: "relative",
  overflow: "hidden",
  width: "100%",
  height: "100%",
});

const URL = styled(motion.h3, {
  position: "absolute",
  top: "1rem",
  right: "1rem",
  fontSize: "2.5vw",
  mixBlendMode: "difference",
  whiteSpace: "nowrap",
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
  bottom: "-8px",
  left: "8px",
  background: "red",
  mixBlendMode: "difference",
});

// Fetching data from the JSON file
import fsPromises from "fs/promises";
import path from "path";
import Link from "next/link";

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data.json");
  const jsonData = await fsPromises.readFile(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: data,
  };
}
