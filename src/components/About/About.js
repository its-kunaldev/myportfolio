import React from 'react';
// import Button from '../UI/Button';

import styles from './About.module.css';
import myPic from "../../assests/pics/kunal profile pic.jpg";

import { FaAward } from 'react-icons/fa';
import { BsFolder } from 'react-icons/bs';
import { BsStar } from 'react-icons/bs';

const About = props => {
    return(
        <section className={styles['about-section']} id='about'>
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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, tempore voluptatum. Rerum saepe
                             porro, iste amet possimus non, vel aperiam perferendis et iure alias eius, deleniti adipisci quisquam 
                             doloribus repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum impedit at 
                             temporibus debitis suscipit beatae assumenda, earum fuga, ad nobis molestiae iusto itaque porro cumque
                             eveniet, maxime qui labore eligendi!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;