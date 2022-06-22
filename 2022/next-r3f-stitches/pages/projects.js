import { styled } from "stitches.config";
import Image from "next/image";

export default function Projects({ projects }) {
  return (
    <Wrapper>
      {projects.map((project, index) => {
        return (
          <Project key={project.name}>
            <Image
              src={`/assets/img/${project.image}`}
              alt={project.name}
              layout="fill"
              objectFit="cover"
              objectPosition="center center"
            />

            <div className="project-name">
              <h2>{project.name}</h2>
            </div>

            <div className="project-url">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                key={project.name}
              >
                {project.name}
              </a>
            </div>

            {project.press && (
              <div className="project-links">
                {project.press.map((link) => (
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={link.name}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            )}
          </Project>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
});

const Project = styled("div", {
  position: "relative",

  "& img": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
});

// Fetching data from the JSON file
import fsPromises from "fs/promises";
import path from "path";

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data.json");
  const jsonData = await fsPromises.readFile(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: data,
  };
}
