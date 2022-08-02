import React from 'react';
// import Button from '../UI/Button';

import styles from './About.module.css';
import myPic from "../../assests/pics/kunal profile pic.jpg";

import { FaAward } from 'react-icons/fa';
import { BsFolder } from 'react-icons/bs';
import { BsStar } from 'react-icons/bs';

const About = props => {
    return(
        <section className={`${styles['about-section']} section section--hidden`} id='about'>
            <p>Get To know</p>
            <h2>About Me</h2>
            <div className={styles["about-me"]}>
                <div className={styles["my-pic"]}>
                    <img src={myPic} alt="my-pic" />
                </div>
                <div className={styles["my-experience"]}>
                    <div className={styles['about-experince']}>
                        <div>
                            <FaAward className={styles['about_icons']}/>
                            <h3>Experience</h3>
                            <p>Currently Studying</p>
                        </div>
                        <div>
                            <BsFolder className={styles['about_icons']}/>
                            <h3>Projects</h3>
                            <p>20+</p>
                        </div>
                        <div>
                            <BsStar className={styles['about_icons']}/>
                            <h3>Achivements</h3>
                            <p>10</p>
                        </div>
                    </div>
                    <div className={styles['my-bio']}>
                        <p>Hello guys! My name is <span className={styles.highlighted}>Kunal Thakur</span>. I'm a web developer with a focus on the MERN stack, but stil
                         exploring other technologies and framewroks that catch my interest! As an artist, my first love will be 
                          crafting the visual. I spend most days branding, designing and building out web interfaces as a freelancer. 
                          if you're looking for a developer to add to your team. I'd love to hear from you.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;