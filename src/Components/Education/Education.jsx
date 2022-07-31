import React from 'react'
import "./Education.css"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {ImBooks} from "react-icons/im"
import {IoSchoolSharp} from "react-icons/io5"
import {HiOfficeBuilding} from "react-icons/hi"
const Education = () => {
  return (
    <div style={{ margin: "0 0 5rem 0"}} className="Education-container" id="Education">
      <div className="Education-heading">
      <h5>
         Educational Quaifications
      </h5>

      <h2>My Experience</h2>

      </div>
      <VerticalTimeline style={{margin:"0 0 5rem 0"}}>
<VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2016 - 2017"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<ImBooks />}
  >
    <h3 className="vertical-timeline-element-title">Senior Secondary Education </h3>
    <h4 className="vertical-timeline-element-subtitle">Kenderiya Vidyalaya No.2, Ambala Cantt, Haryana</h4>
    <p>
     Completed class 12th with Non-Medical + Computer Science stream with 81.5%   
    </p>
  </VerticalTimelineElement>

<VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2018 - 2021"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<IoSchoolSharp />}
  >
    <h3 className="vertical-timeline-element-title">Bachelor of Computer Science (Bsc)</h3>
    <h4 className="vertical-timeline-element-subtitle">Sanatan Dharma College , Ambala Cantt, Haryana</h4>
    <p>
     - Begining of my Web Developement journey.<br/>
     - Learned C/C++ language, HTML, CSS, Bootstrap, MySQL.<br/>
     - Begin my Freelancing journey at last year of my Graduation. 
    </p>
  </VerticalTimelineElement>

<VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2021 - Present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<IoSchoolSharp />}
  >
    <h3 className="vertical-timeline-element-title">Master of Computer Application (MCA)</h3>
    <h4 className="vertical-timeline-element-subtitle">Chitkara University, Punjab</h4>
    <p>
      - Begin my FullStack Web Developer journey.<br/>
      - Learned Javascript, React.js, Material UI, Node.js, Git etc.<br/>
      - Learning Backend Development with Node.js, Express.js, MongoDB, Firebase.<br/>
      - Secured 9.78 CGPA till now. 
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="Apr 2022 - June 2022"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<HiOfficeBuilding />}
  >
    <h3 className="vertical-timeline-element-title">Full Stack Web Developer Intern</h3>
    <h4 className="vertical-timeline-element-subtitle">MadScientist, Hyderabad</h4>
    <p>
    - Learned about the Working Environment and Culture of a Startup.<br/>
    - Developed Significant UI Component and their logical functionalities.<br/>
    - Contribution in Integrating Backend with developed Frontend UI.<br/> 
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>

    </div>
  )
}

export default Education