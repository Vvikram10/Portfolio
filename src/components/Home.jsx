import React, { useEffect, useRef } from "react";
import pdf from "../pdf/vikram_resume_.pdf";
import img from "../assets/new1.jpeg";

import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile",
        "I'm Vikram verma",
        "Python Full stack developer"
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      showCursor: false,
    };
    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <div className="container home h-100 pt-5">
        <div className="row my-5 pb-3">
          <div className=" left col-lg-8 col-sm-6 text-center my-5 py-3">
            <h5 ref={typedRef} className="typed-text text-warning"></h5>

            <a
              href={pdf}
              download="vikram_verma_resume.pdf"
              className="btn btn-outline-warning  mt-2"
            >
              Download Resume
            </a>
          </div>
          <div className=" right col-lg-4 col-sm-6 mb-5">
            <div className="image d-flex align-items-center justify-content-center ">
              <img src={img} alt="pic" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
//  7493969605 
