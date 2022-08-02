import React from 'react';
// import Button from '../UI/Button';

import styles from './Projects.module.css';
import Button from '../UI/Button';


const Projects = props => {
    return (
        <section className={`${styles['projects-section']} section section--hidden`} id='Projects'>
            <p>My recent works</p>
            <h2>My Projects</h2>
            <div className={styles["my-projects"]}>

                <div className={styles["project"]}>
                    <a href={require("../../assests/pics/movieApp.jpg")} ><img src={require("../../assests/pics/movieApp.jpg")} alt="showtime" /></a> 
                    <div className={styles["project-info"]}>
                        <h3>Movie App</h3>
                        <div className={styles["explore-btns"]}>

                            <a href="https://github.com/its-kunaldev/movies-app" rel='noreferrer' target={'_blank'}><Button className={styles['github-btn']}>Github</Button></a>
                            <a href="https://stalwart-crumble-0a30a0.netlify.app/" rel='noreferrer' target={'_blank'}><Button className={styles['demo-btn']}>Demo</Button></a>
                        </div>
                    </div>
                </div>

                <div className={styles["project"]}>
                    <a href={require("../../assests/pics/countryInfo.jpg")}><img src={require("../../assests/pics/countryInfo.jpg")} alt="countries info" /></a> 
                    <div className={styles["project-info"]}>
                        <h3>Country Info</h3>
                        <div className={styles["explore-btns"]}>
                            <a href="https://github.com/its-kunaldev/countryInfo" rel='noreferrer' target={'_blank'}><Button className={styles['github-btn']}>Github</Button></a>
                            <a href="https://kunal-13-dev.github.io/countriesInfo/" rel='noreferrer' target={'_blank'}><Button className={styles['demo-btn']}>Demo</Button></a>
                        </div>
                    </div>
                </div>

                <div className={styles["project"]}>
                    <a href={require("../../assests/pics/bankistApp.png")}><img src={require("../../assests/pics/bankistApp.png")} alt="bankist app" /></a> 
                    <div className={styles["project-info"]}>
                        <h3>Bankist App</h3>
                        <div className={styles["explore-btns"]}>
                            <a href="https://github.com/its-kunaldev/bankistApp" rel='noreferrer' target={'_blank'}><Button className={styles['github-btn']}>Github</Button></a>
                            <a href="https://dmxddjpo16m8bi6gs30tma.on.drv.tw/bankist%20app/bankist%20app/" rel='noreferrer' target={'_blank'}><Button className={styles['demo-btn']}>Demo</Button></a>
                        </div>
                    </div>
                </div>

                <div className={styles["project"]}>
                    <a href={require("../../assests/pics/digitalClock.jpg")}><img src={require("../../assests/pics/digitalClock.jpg")} alt="digital clock" /></a> 
                    <div className={styles["project-info"]}>
                        <h3>Digital Clock</h3>
                        <div className={styles["explore-btns"]}>
                            <a href="https://github.com/its-kunaldev/digital-clock" rel='noreferrer' target={'_blank'}><Button className={styles['github-btn']}>Github</Button></a>
                            <a href="https://dmxddjpo16m8bi6gs30tma.on.drv.tw/clock project/digital clock/" rel='noreferrer' target={'_blank'}><Button className={styles['demo-btn']}>Demo</Button></a>
                        </div>
                    </div>
                </div>

                <div className={styles["project"]}>
                <a href={require("../../assests/pics/guessingGame.jpg")}><img src={require("../../assests/pics/guessingGame.jpg")} alt="digital clock" /></a>
                    <div className={styles["project-info"]}>
                        <h3>Guessing Game</h3>
                        <div className={styles["explore-btns"]}>
                            <a href="https://github.com/its-kunaldev/guessing-number" rel='noreferrer' target={'_blank'}><Button className={styles['github-btn']}>Github</Button></a>
                            <a href="https://dmxddjpo16m8bi6gs30tma.on.drv.tw/project1/guess my number game/guess number.html" rel='noreferrer' target={'_blank'}><Button className={styles['demo-btn']}>Demo</Button></a>
                        </div>
                    </div>
                </div>

                <div className={styles["project"]}>
                <a href={require("../../assests/pics/tictactoe.jpg")}><img src={require("../../assests/pics/tictactoe.jpg")} alt="digital clock" /></a>
                    <div className={styles["project-info"]}>
                        <h3>TicTacToe</h3>
                        <div className={styles["explore-btns"]}>
                            <a href="https://github.com/its-kunaldev/tictactoe" rel='noreferrer' target={'_blank'}><Button className={styles['github-btn']}>Github</Button></a>
                            <a href="https://dmxddjpo16m8bi6gs30tma.on.drv.tw/tictactoe%20game/tictactoe/" rel='noreferrer' target={'_blank'}><Button className={styles['demo-btn']}>Demo</Button></a>
                        </div>
                    </div>
                </div>

                <div className={styles["project"]}>
                <a href={require("../../assests/pics/calculator.jpg")}><img src={require("../../assests/pics/calculator.jpg")} alt="digital clock" /></a>
                    <div className={styles["project-info"]}>
                        <h3>Calculator</h3>
                        <div className={styles["explore-btns"]}>
                            <a href="https://github.com/its-kunaldev/calculator" rel='noreferrer' target={'_blank'}><Button className={styles['github-btn']}>Github</Button></a>
                            <a href="https://its-kunaldev.github.io/calculator/" rel='noreferrer' target={'_blank'}><Button className={styles['demo-btn']}>Demo</Button></a>
                        </div>
                    </div>
                </div>

                <div className={styles["project"]}>
                <a href={require("../../assests/pics/scorekeeper.jpg")}><img src={require("../../assests/pics/scorekeeper.jpg")} alt="digital clock" /></a>
                    <div className={styles["project-info"]}>
                        <h3>Scorekeeper</h3>
                        <div className={styles["explore-btns"]}>
                            <a href="https://github.com/its-kunaldev/scoreKeeper" rel='noreferrer' target={'_blank'}><Button className={styles['github-btn']}>Github</Button></a>
                            <a href="https://dmxddjpo16m8bi6gs30tma.on.drv.tw/project2/scorekeeper games/scorekeeper.html" rel='noreferrer' target={'_blank'}><Button className={styles['demo-btn']}>Demo</Button></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;