import React from "react";
import project from "../data/project.json";

const Projects = () => {
  return (
    <div className="container project">
      <h1 className="text-center my-3 py-3 mb-5 text-warning" id="projects">Projects</h1>
      <div className="row justify-content-center">
        {project.map((data) => (
          <div key={data.id} className="col-lg-3 col-md-4 col-sm-6 mb-4 d-flex align-items-stretch">
            <div className="card bg-dark text-light outline-red project-card">
              <div className="img my-3 mx-3">
                <img src={data.imagesrc} className="card-img-top project-image" alt={data.title} />
              </div>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-danger text-center">{data.title}</h5>
                <p className="card-text text-center">{data.description}</p>
                <div className="mt-auto container d-flex justify-content-center">
                  <a href={data.demo} className="btn btn-warning mx-3 fw-bold">
                    Demo
                  </a>
                  <a href={data.source} className="btn btn-info mx-3 fw-bold">
                    Source
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
