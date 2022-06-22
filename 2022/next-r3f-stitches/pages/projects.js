export default function Projects({ projects }) {
  return (
    <div className="wrapper">
      {projects.map((project, index) => {
        return (
          <div className="project" key={project.name}>
            <img src={project.image} alt={project.title} />

            <div className="project-name">
              <h2>{project.name}</h2>
            </div>

            <div className="project-description">
              <p>{project.description}</p>
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
          </div>
        );
      })}
    </div>
  );
}

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
