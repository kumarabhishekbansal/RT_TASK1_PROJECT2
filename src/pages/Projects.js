import { useState, useEffect } from "react";
import Link from "../components/Link";
import "./Profile.css";
import List from "../components/List";

function Projects({ userName }) {
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const project = await fetch(
        `https://api.github.com/users/${userName}/repos`
      );
      const result = await project.json();
      if (result) {
        setProjects(result);
        setLoading(false);
      }
    }
    fetchData();
  }, [userName]);
  return (
    <div className="Projects-container">
      <h2>Projects</h2>
      {loading ? (
        <span>Loading...</span>
      ) : (
        <div>
          <List
            items={projects.map((project) => ({
              field: project.name,
              value: <Link url={project.html_url} title={project.html_url} />,
            }))}
          />
        </div>
      )}
    </div>
  );
}
export default Projects;
