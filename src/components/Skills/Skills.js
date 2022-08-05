import React from 'react';

import './Skills.css';
import { BsPatchCheck } from 'react-icons/bs';

const Skills = () => {
  return (
    <section id='experience' className='section section--hidden'>
      <p>Skills I have</p>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheck className='experience_details-icons' />
              <div>
                <h4>HTML5</h4>
                {/* <small className='text-light'>Experienced</small> */}
                <span className='percentage'>90%</span><progress max={"100"} value="90" className='progress-meter'></progress>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheck className='experience_details-icons' />
              <div>
                <h4>CSS</h4>
                {/* <small className='text-light'>Experienced</small> */}
                <span className='percentage'>80%</span> <progress max={"100"} value="80" className='progress-meter'></progress>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheck className='experience_details-icons' />
              <div>
                <h4>JavaScript</h4>
                {/* <small className='text-light'>Experienced</small> */}
                <span className='percentage'>85%</span><progress max={"100"} value="85" className='progress-meter'></progress>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheck className='experience_details-icons' />
              <div>
                <h4>React</h4>
                {/* <small className='text-light'>Basic</small> */}
                <span className='percentage'>70%</span><progress max={"100"} value="70" className='progress-meter'></progress>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheck className='experience_details-icons' />
              <div>
                <h4>JQuery</h4>
                {/* <small className='text-light'>Intermediate</small> */}
                <span className='percentage'>50%</span><progress max={"100"} value="50" className='progress-meter'></progress>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheck className='experience_details-icons' />
              <div>
                <h4>Typescript</h4>
                {/* <small className='text-light'>Intermediate</small> */}
                <span className='percentage'>50%</span><progress max={"100"} value="50" className='progress-meter'></progress>
              </div>
            </article>
          </div>
        </div>

        <div className="experience_backend">
        {/* <h3>Backend Development</h3> */}
        <h3>Others</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheck className='experience_details-icons' />
              <div>
                <h4>Node Js</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheck className='experience_details-icons' />
              <div>
                <h4>C++</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheck className='experience_details-icons' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheck className='experience_details-icons' />
              <div>
                <h4>DSA</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheck className='experience_details-icons' />
              <div>
                <h4>Nodemon</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheck className='experience_details-icons' />
              <div>
                <h4>AWS</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>  
  )
}

export default Skills;