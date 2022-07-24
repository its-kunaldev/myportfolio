import React from 'react';
// import Button from '../UI/Button';

import styles from './Projects.module.css';
import project1 from "../../assests/pics/Img3.jpg";
import Button from '../UI/Button';


const Projects = props => {
    return(
        <section className={styles['projects-section']} id='Projects'>
            <p>My recent works</p>
            <h2>My Projects</h2>
            <div className={styles["my-projects"]}>

                <div className={styles["project"]}>
                    <img src={project1} alt="" />
                    <div className={styles["project-info"]}>
                        <h3>Movie App</h3>
                        <div className={styles["explore-btns"]}>
                            <Button className={styles['github-btn']}>Github</Button>
                            <Button className={styles['demo-btn']}>Demo</Button>
                        </div>
                    </div>
                </div>

                <div className={styles["project"]}>
                    <img src={project1} alt="" />
                    <div className={styles["project-info"]}>
                        <h3>Country Info</h3>
                        <div className={styles["explore-btns"]}>
                            <Button className={styles['github-btn']}>Github</Button>
                            <Button className={styles['demo-btn']}>Demo</Button>
                        </div>
                    </div>
                </div>

                <div className={styles["project"]}>
                    <img src={project1} alt="" />
                    <div className={styles["project-info"]}>
                        <h3>Digital Clock</h3>
                        <div className={styles["explore-btns"]}>
                            <Button className={styles['github-btn']}>Github</Button>
                            <Button className={styles['demo-btn']}>Demo</Button>
                        </div>
                    </div>
                </div>

                <div className={styles["project"]}>
                    <img src={project1} alt="" />
                    <div className={styles["project-info"]}>
                        <h3>Guessing Game</h3>
                        <div className={styles["explore-btns"]}>
                            <Button className={styles['github-btn']}>Github</Button>
                            <Button className={styles['demo-btn']}>Demo</Button>
                        </div>
                    </div>
                </div>

                <div className={styles["project"]}>
                    <img src={project1} alt="" />
                    <div className={styles["project-info"]}>
                        <h3>Scorekeeper</h3>
                        <div className={styles["explore-btns"]}>
                            <Button className={styles['github-btn']}>Github</Button>
                            <Button className={styles['demo-btn']}>Demo</Button>
                        </div>
                    </div>
                </div>

                <div className={styles["project"]}>
                    <img src={project1} alt="" />
                    <div className={styles["project-info"]}>
                        <h3>TicTacToe</h3>
                        <div className={styles["explore-btns"]}>
                            <Button className={styles['github-btn']}>Github</Button>
                            <Button className={styles['demo-btn']}>Demo</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;