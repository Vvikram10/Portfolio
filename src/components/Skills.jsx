import React from "react";
import skills from "../data/skills.json";


const Skills = () => {
  return (
    <div className="container Skills my-5">
      <h1 className="text-center mb-5 text-warning" id="skills">Skills</h1>
      <div className="row">
        {skills.map((data) => (
          <div className="col-sm-6 col-md-4 col-lg-3 mb-4 items" key={data.id}>
            <div className="  text-center item">
              <img src={data.imagesrc} alt={data.title} className=" custom-img " />
              <div className="my-2">
                <h6 className="card-title">{data.title}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
