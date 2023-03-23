import React from 'react'
import NavBar from '../NavBar/NavBar'
import './HomePage.css'
import personalphoto from '../../personalphoto.jpg'

function HomePage() {
  return (
    <div>
      <div className="homepage">
        <div className="personalPhoto">
          <h3>Zackery Perski</h3>
          <img src={personalphoto}/>
          <h4>Details</h4>
          <span>Education: B.S. Computer Science from <a href="https://www.emich.edu/" target="_blank">EMU</a></span>
          <span>Location: Van Buren Township, MI, United States</span>
          <span>Open to: Remote, Hybrid, or In Person positions</span>
          <span>Job Titles: Full Stack Developer, Educator, FLL Coach</span>
          <h3>Social Links</h3>
          <p>
            Want to reach out or view my works directly?
            <ul>
              <li>Email me directly at: <a href="mailto:zackeryperski@gmail.com">zackeryperski@gmail.com</a></li>
              <li>Check out my GitHub: <a href="https://github.com/MrFox172" target="_blank">@MrFox172</a></li>
              <li>View my profile on LinkedIn: <a href="https://www.linkedin.com/in/zackery-perski/" target="_blank">in/zackery-perski/</a></li>
            </ul>
          </p>
        </div>
        <div className="about">
          <h3>About Me</h3>
          <p>
            Hello everyone, I'm Zackery Perski, a Computer Scientist, Full Stack Developer, and STEM Educator.
            This site was built in ReactJS to demonstrate and practice my skills, and to be a collection of resources for those that are interested in seeing more of my projects.
            I'm not too much of a UI designer, so please don't judge that aspect of my site too harshly. Now to get a bit into who I am.
          </p>
          <p>
            Starting from the furthest past, I'm a Computer Scientist from Michigan. 
            I graduated in 2018 from Eastern Michigan University with a Bachelor's in Computer Science while Minoring in Computer Engineering Technology.
            My degree focused on DSA utilizing Java as the primary language. My minor focused on <a href="https://en.wikipedia.org/wiki/PIC_microcontrollers" target="_blank">PIC microcontrollers</a>, utilizing C, Assembler and Binary coding.
            During my time at Eastern I developed a microcontroller controlled vacuum suction pump prototype that will automatically maintain a specific level of airpressure. 
            This prototype was presented to a company that was developing suction mounted emergency lights for aluminum topped vehicles.
          </p>
          <p>
            During my last year of my degree I joined a STEM Education focused startup, AccelerateKID LLC, where I remained as an educator for over four years.
            As an educator I picked up a multitude of other programming languages worked with a variety of organizations on different kinds of events, including a few collaboration events with the Michigan Department of Education to deliver computer science lessons virtually to thousands of students across Michigan live as one of my stand out achievements.
            Outside of organizing and collaborating with different organizations, internally I became the lead trainer for our company, training new hires throughout the process to make them into STEM educators. I also became involved in the technical screening part of the interview process for the company.
            During this time I also became a FLL coach, and the team I led made it to the Michigan State championships through our Innovation Project. 
          </p>
          <p>
            After leaving education, I set off to be a Full Stack Developer. Since I was out of the game for so long, with my backgorund in education, I joined Revature LLC and went through their vocational training program to become a Full Stack Developer.
            There, I became more acquainted with the AWS Cloud tech stack, particularly focusing in on: RDS, EC2, S3, Elastic Beanstalk, Lambda, and API Gateways.
            I trained in ReactJS, with Redux and Axios, although I'll be the first to admit I could use some more time with Redux. 
            I also learned the Spring Framework, and am comfortable with Spring MVC, Spring Data JPA, and Spring Boot. 
            Due to the current environment in big tech, Revature could not find work for my cohort directly, so I am making the most of my skills now in a demonstrative way.
          </p>
          
        </div>
        <div className="featured">
        <h3>Languages and Technology Known</h3>
        <p>
          <ul>
            <li>Java
              <ul>
                <li>Spring Framework
                  <ul>
                    <li>Spring Boot</li>
                    <li>Spring AOP</li>
                    <li>Spring MVC</li>
                    <li>Spring Data JPA</li>
                  </ul>
                </li>
                <li>Multi-threading</li>
                <li>Lombok</li>
                <li>JDBC</li>
                <li>Testing with JUnit5</li>
                <li>Testing with Mockito</li>
              </ul>
            </li>
            <li>Python
              <ul>
                <li>Matplotlib</li>
                <li>Pygame</li>
              </ul>
            </li>
            <li>C# (through the lens of Unity Game Engine)</li>
            <li>C++ (including Arduino)</li>
            <li>C
              <ul>
                <li>PIC16 Microcontrollers</li>
                <li>Dragon12 Boards</li>
              </ul>
            </li>
            <li>Web Technologies
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>ReactJS</li>
                <li>Angular (A smidge)</li>
              </ul>
            </li>
          </ul>
          I have additional experience in other languages not explicitly stated here, the above list is just what I felt is relevant. 
        </p>        
        <h3>Agile Methodology</h3>
          Through my recent training at Revature, I have become accustomed to the Scrum methodology within Agile development practices. 
          During my recent projects while working in a collaborative setting, I was our team's lead organizer, akin to the Product Owner on multiple occassions.
          There I maintained a unified vision for the project, and helped organized role assignments to our other team members.
          When we ran into issues in our projects, I was the lead decision maker on when to cut certain features, or to pinpoint what features to focus down on to meet Sprint and Product Backlog goals. 
        </div>
      </div>
    </div>
  )
}

export default HomePage