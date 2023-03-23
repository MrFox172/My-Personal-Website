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
          <h4>Education: B.S. Computer Science from <a href="https://www.emich.edu/" target="_blank">EMU</a></h4>
          <h4>Location: Van Buren Township, MI, United States</h4>
          <h4>Open to: Remote, Hybrid, or In Person positions</h4>
          <h4>Job Titles: Full Stack Developer, STEM Educator, FLL Coach</h4>
        </div>
        <div className="about">
          <h3>About Me</h3>
          <p>
            Hello everyone, I'm Zackery Perski, a Computer Scientist, Full Stack Developer, and STEM Educator
          </p>
          <h3>Social Links</h3>
          <p>
            Want to reach out or view my works directly?
            <ul>
              <li>Email me directly at: <a href="mailto:zackeryperski@gmail.com">zackeryperski@gmail.com</a></li>
              <li>Check out my GitHub: <a href="https://github.com/MrFox172" target="_blank">@MrFox172</a></li>
              <li>View my profile on LinkedIn: <a href="https://www.linkedin.com/in/zackery-perski/" target="_blank">in/zackery-perski/</a></li>
              <li>Models and Electronics on TinkerCAD: <a href="https://www.tinkercad.com/users/39KCnF6q3SE-zackery-perski" target="_blank">(Requires Sign In)</a></li>
            </ul>
          </p>
        </div>
        <div className="featured">
        <h3>Featured</h3>
          temp3
        </div>
      </div>
    </div>
  )
}

export default HomePage