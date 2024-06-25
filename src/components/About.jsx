// About.jsx

import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap } from "react-icons/fa";
import educationData from '../data/education.json';

const About = () => {
    return (
      <div className="container my-1" >
        <h1 className="text-center text-warning" id='about'>About Me</h1>
        <VerticalTimeline>
          {educationData.map(event => (
            <VerticalTimelineElement
              key={event.id}
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'black', color: 'red' }} // Background and text color
              contentArrowStyle={{ borderRight: '7px solid yellow' }} // Arrow color
              date={event.session}
              iconStyle={{ background: 'black', color: 'yellow' }}
              icon={<FaGraduationCap />}
            >
              <h5 className="vertical-timeline-element-subtitle text-warning">{event.course}</h5>
              <h6 className="vertical-timeline-element-title text-success">{event.title}</h6>
              <h6>{event.place}</h6>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
        </div>
      );
    };

export default About;
