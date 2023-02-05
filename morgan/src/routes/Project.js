import React from "react";
import img from "./logo512.png";
import img1 from "../images/ass.jpg";
import img2 from "../images/ject.png";
 import img3 from "../images/Pro.jpg";
import img4 from "../images/hope.png";
const Project = () => {
  return (
    <div className="container d-flex justify-content-center">
      <div className="row row-cols-lg-2 d-flex justify-content-center">
        <ProjectCard
          img={img1}
          link={{
            live: "#",
            source: "#",
          }}
        ></ProjectCard>
        <ProjectCard
          img={img2}
          link={{
            live: "#",
            source: "#",
          }}
        ></ProjectCard>
        <ProjectCard
          img={img3}
          link={{
            live: "#",
            source: "#",
          }}
        ></ProjectCard>
        <ProjectCard
          img={img4}
          link={{
            live: "#",
            source: "# ",
          }}
  
        ></ProjectCard>
      </div>
    </div>
  );
};

export default Project;

const ProjectCard = ({ img, link }) => {
  return (
    <div className="py-4">
      <img src={img} alt="img" className="aer" height={300} />
      <div className="mony">
        <button className="btn btn-outline-dark my-2 ett">
          <a href={link.live}>Live Demo</a>
        </button>
        <br />
        <button className="btn btn-outline-dark my-2 ett">
          <a href={link.source}>Source code</a>
        </button>
      </div>
    </div>
  );
};
