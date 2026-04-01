"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import { motion } from "motion/react";

import ProjectCard from "./project-card";
import { styled } from "../stitches.config";
import { easeOut } from "@/utils/easing";

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
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [visibleProjects, setVisibleProjects] = useState<Set<string>>(
    new Set(),
  );

  // Set the first visible project as active by default
  useEffect(() => {
    if (visibleProjects.size > 0 && !activeProject) {
      const firstVisible = projects.find((p) => visibleProjects.has(p.name));
      if (firstVisible) {
        setActiveProject(firstVisible);
      }
    }
  }, [visibleProjects, activeProject, projects]);

  // Handle project visibility changes
  const handleProjectVisibilityChange = (
    project: Project,
    isVisible: boolean,
  ) => {
    setVisibleProjects((prev) => {
      const newSet = new Set(prev);
      if (isVisible) {
        newSet.add(project.name);
      } else {
        newSet.delete(project.name);
      }
      return newSet;
    });
  };

  const handleProjectOpenChange = (project: Project, isOpen: boolean) => {
    if (isOpen) {
      setActiveProject(project);
    }
  };

  const getMetaTitle = () => {
    if (activeProject) {
      return `${activeProject.name} | Rou Hun Fan | Frontend Developer & Designer`;
    }
    return "Projects | Rou Hun Fan | Frontend Developer & Designer";
  };

  const getMetaDescription = () => {
    if (activeProject) {
      return activeProject.description;
    }
    return "Explore my portfolio of frontend development and design projects. Specializing in creating engaging, interactive web experiences.";
  };

  const getMetaKeywords = () => {
    if (activeProject) {
      return `${activeProject.name}, ${activeProject.tech}, frontend development, UI design, web development`;
    }
    return "frontend development, UI design, web projects, portfolio, interactive websites";
  };

  return (
    <Wrapper>
      <Head>
        <title>{getMetaTitle()}</title>
        <meta name="description" content={getMetaDescription()} />
        <meta name="keywords" content={getMetaKeywords()} />
        {activeProject && activeProject.image && (
          <meta
            property="og:image"
            content={`/assets/img/projects/${activeProject.image}`}
          />
        )}
      </Head>

      <ArchiveLink
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: 0, rotate: 10, opacity: 1 }}
        exit={{ y: "-25%", opacity: 0 }}
        transition={{
          ease: easeOut,
        }}
        href="/projects-archive"
        scroll={false}
      >
        archive
      </ArchiveLink>

      <ProjectsContainer>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.name}
            project={project}
            index={index}
            onVisibilityChange={(isVisible) =>
              handleProjectVisibilityChange(project, isVisible)
            }
            onOpenChange={(isOpen) => handleProjectOpenChange(project, isOpen)}
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
  zIndex: 10,
});

const ArchiveLink = styled(motion.create(Link), {
  zIndex: 200,
  position: "fixed",
  right: 50,
  bottom: 40,
  display: "block",
  whiteSpace: "nowrap",
  fontSize: "7.5vw",
  include: "fontAlt",
  mixBlendMode: "difference",
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
