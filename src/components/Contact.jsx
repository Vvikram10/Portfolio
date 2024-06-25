import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

const Contact = () => {
  return (
    <>
      <div className="container contact h-75 mt-5">
        <h1 className='text-center text-warning' id='contacts'>Contacts</h1>
        <div className="contact-icon d-flex justify-content-center align-items-center ">
          <a href='https://www.instagram.com/v_vik_ram_/'target='_blank' className="items"><FaInstagram  className='icons'/></a>
          <a href='http://www.linkedin.com/in/vvikram10'target='_blank' className="items"><FaLinkedin  className='icons'/></a>
          <a href='mailto:vvikram3312@gmail.com'target='_blank' className="items"><CgMail  className='icons'/></a>
          <a href='https://github.com/Vvikram10'target='_blank' className="items"><BsGithub className='icons' /></a>
        </div>
      </div>
    </>
  )
}   

export default Contact
