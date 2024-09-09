import React from "react";
import Head from "next/head";
import { ProjectCard as ProjectCardComponent } from "./project-card";
import { styled } from "../stitches.config";

interface Project {
  name: string;
  url?: string;
  image: string;
  imagePosition: string;
  description: string;
  tech: string;
  press?: { name: string; url: string }[];
}

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <Wrapper>
      <Head>
        <title>Projects by Flowen</title>
      </Head>

      <ProjectsContainer>
        {projects.map((project, index) => (
          <ProjectCardComponent
            key={project.name}
            project={project}
            index={index}
          />
        ))}
      </ProjectsContainer>
    </Wrapper>
  );
}

const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  margin: "2.5vh 0",
});

const ProjectsContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
});

import { GetStaticProps } from "next";
import fsPromises from "fs/promises";
import path from "path";

export const getStaticProps: GetStaticProps = async () => {
  const filePath = path.join(process.cwd(), "data.json");
  const jsonData = await fsPromises.readFile(filePath, "utf8");
  const data = JSON.parse(jsonData);

  return {
    props: data,
  };
};
