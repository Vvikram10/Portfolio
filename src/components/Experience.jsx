import React from 'react';
import experience from "../data/experience.json";

const Experience = () => {
  return ( 
    <div className='margin-top'>
      <div className="my-5 py-5  " id='experience'>
        <div className="container ex my-2  ">
          <h1 className='text-center my-2 text-warning text-shadow'>Experience</h1>
          <hr />
          {experience.map((data) => {
            return (
              <div key={data.id} className='ex-items d-flex flex-wrap row my-3 '>
                <div className="col-lg-6 col-md-12 mb-3 text-center py-3">
                  <img src={data.imgrc} alt={data.project} className="img-fluid rounded" />
                </div>
                <div className="col-lg-6 col-md-12 py-3">
                  <h5 className='text-info'>{data.role}</h5>
                  <h6 className='text-success'>{data.organisation}</h6>
                  <h6>{data.duration}</h6>
                  <h6>{data.location}</h6>
                  <h6 className='text-danger'>{data.project}</h6>
                  <h6>{data.technology[0]}</h6>
                  <h6>{data.technology[1]}</h6>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
