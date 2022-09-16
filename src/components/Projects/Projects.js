import React from "react";
// import Button from '../UI/Button';

import styles from "./Projects.module.css";
import Button from "../UI/Button";

const Projects = (props) => {
  const myProjects = [
    {
        title: "Quiz App",
        img: "quiz2",
        github: "https://github.com/its-kunaldev/quiz-app",
        demo: "https://its-kunaldev.github.io/quiz-app/",
    },
    {
      title: "Movie App",
      img: "movieApp",
      github: "https://github.com/its-kunaldev/movies-app",
      demo: "https://stalwart-crumble-0a30a0.netlify.app/",
    },
    {
      title: "Country Info",
      img: "countryInfo",
      github: "https://github.com/its-kunaldev/countryInfo",
      demo: "https://its-kunaldev.github.io/countryInfo/",
    },
    {
      title: "Bankist App",
      img: "bankistApp",
      github: "https://github.com/its-kunaldev/bankistApp",
      demo: "https://dmxddjpo16m8bi6gs30tma.on.drv.tw/bankist%20app/bankist%20app/",
    },
    {
      title: "Digital Clock",
      img: "digitalClock",
      github: "https://github.com/its-kunaldev/digital-clock",
      demo: "https://dmxddjpo16m8bi6gs30tma.on.drv.tw/clock project/digital clock/",
    },
    {
      title: "Guessing Game",
      img: "guessingGame",
      github: "https://github.com/its-kunaldev/guessing-number",
      demo: "https://dmxddjpo16m8bi6gs30tma.on.drv.tw/project1/guess my number game/guess number.html",
    },
    {
      title: "TicTacToe",
      img: "tictactoe",
      github: "https://github.com/its-kunaldev/tictactoe",
      demo: "https://dmxddjpo16m8bi6gs30tma.on.drv.tw/tictactoe%20game/tictactoe/",
    },
    {
      title: "Calculator",
      img: "calculator",
      github: "https://github.com/its-kunaldev/calculator",
      demo: "https://its-kunaldev.github.io/calculator/",
    },
    {
      title: "Scorekeeper",
      img: "scorekeeper",
      github: "https://github.com/its-kunaldev/scoreKeeper",
      demo: "https://dmxddjpo16m8bi6gs30tma.on.drv.tw/project2/scorekeeper games/scorekeeper.html",
    }
  ];
  return (
    <section className={`${styles["projects-section"]}`} id="Projects">
      <p>My recent works</p>
      <h2>My Projects</h2>
      <div className={styles["my-projects"]}>

        {myProjects.map((project) => (
          <div key={project.title} className={styles["project"]}>
            <a href={require(`../../assests/pics/${project.img}.jpg`)}>
              <img
                src={require(`../../assests/pics/${project.img}.jpg`)}
                alt={project.title}
              />
            </a>
            <div className={styles["project-info"]}>
              <h3>{project.title}</h3>
              <div className={styles["explore-btns"]}>
                <a
                  href={project.github}
                  rel="noreferrer"
                  target={"_blank"}
                >
                  <Button className={styles["github-btn"]}>Github</Button>
                </a>
                <a
                  href={project.demo}
                  rel="noreferrer"
                  target={"_blank"}
                >
                  <Button className={styles["demo-btn"]}>Demo</Button>
                </a>
              </div>
            </div>
          </div>
        ))}

        {/* <div className={styles["project"]}>
          <a href={require("../../assests/pics/movieApp.jpg")}>
            <img
              src={require("../../assests/pics/movieApp.jpg")}
              alt="showtime"
            />
          </a>
          <div className={styles["project-info"]}>
            <h3>Movie App</h3>
            <div className={styles["explore-btns"]}>
              <a
                href="https://github.com/its-kunaldev/movies-app"
                rel="noreferrer"
                target={"_blank"}
              >
                <Button className={styles["github-btn"]}>Github</Button>
              </a>
              <a
                href="https://stalwart-crumble-0a30a0.netlify.app/"
                rel="noreferrer"
                target={"_blank"}
              >
                <Button className={styles["demo-btn"]}>Demo</Button>
              </a>
            </div>
          </div>
        </div>

        <div className={styles["project"]}>
          <a href={require("../../assests/pics/countryInfo.jpg")}>
            <img
              src={require("../../assests/pics/countryInfo.jpg")}
              alt="countries info"
            />
          </a>
          <div className={styles["project-info"]}>
            <h3>Country Info</h3>
            <div className={styles["explore-btns"]}>
              <a
                href="https://github.com/its-kunaldev/countryInfo"
                rel="noreferrer"
                target={"_blank"}
              >
                <Button className={styles["github-btn"]}>Github</Button>
              </a>
              <a
                href="https://kunal-13-dev.github.io/countriesInfo/"
                rel="noreferrer"
                target={"_blank"}
              >
                <Button className={styles["demo-btn"]}>Demo</Button>
              </a>
            </div>
          </div>
        </div>

        <div className={styles["project"]}>
          <a href={require("../../assests/pics/bankistApp.png")}>
            <img
              src={require("../../assests/pics/bankistApp.png")}
              alt="bankist app"
            />
          </a>
          <div className={styles["project-info"]}>
            <h3>Bankist App</h3>
            <div className={styles["explore-btns"]}>
              <a
                href="https://github.com/its-kunaldev/bankistApp"
                rel="noreferrer"
                target={"_blank"}
              >
                <Button className={styles["github-btn"]}>Github</Button>
              </a>
              <a
                href="https://dmxddjpo16m8bi6gs30tma.on.drv.tw/bankist%20app/bankist%20app/"
                rel="noreferrer"
                target={"_blank"}
              >
                <Button className={styles["demo-btn"]}>Demo</Button>
              </a>
            </div>
          </div>
        </div>

        <div className={styles["project"]}>
          <a href={require("../../assests/pics/digitalClock.jpg")}>
            <img
              src={require("../../assests/pics/digitalClock.jpg")}
              alt="digital clock"
            />
          </a>
          <div className={styles["project-info"]}>
            <h3>Digital Clock</h3>
            <div className={styles["explore-btns"]}>
              <a
                href="https://github.com/its-kunaldev/digital-clock"
                rel="noreferrer"
                target={"_blank"}
              >
                <Button className={styles["github-btn"]}>Github</Button>
              </a>
              <a
                href="https://dmxddjpo16m8bi6gs30tma.on.drv.tw/clock project/digital clock/"
                rel="noreferrer"
                target={"_blank"}
              >
                <Button className={styles["demo-btn"]}>Demo</Button>
              </a>
            </div>
          </div>
        </div>

        <div className={styles["project"]}>
          <a href={require("../../assests/pics/guessingGame.jpg")}>
            <img
              src={require("../../assests/pics/guessingGame.jpg")}
              alt="digital clock"
            />
          </a>
          <div className={styles["project-info"]}>
            <h3>Guessing Game</h3>
            <div className={styles["explore-btns"]}>
              <a
                href="https://github.com/its-kunaldev/guessing-number"
                rel="noreferrer"
                target={"_blank"}
              >
                <Button className={styles["github-btn"]}>Github</Button>
              </a>
              <a
                href="https://dmxddjpo16m8bi6gs30tma.on.drv.tw/project1/guess my number game/guess number.html"
                rel="noreferrer"
                target={"_blank"}
              >
                <Button className={styles["demo-btn"]}>Demo</Button>
              </a>
            </div>
          </div>
        </div>

        <div className={styles["project"]}>
          <a href={require("../../assests/pics/tictactoe.jpg")}>
            <img
              src={require("../../assests/pics/tictactoe.jpg")}
              alt="digital clock"
            />
          </a>
          <div className={styles["project-info"]}>
            <h3>TicTacToe</h3>
            <div className={styles["explore-btns"]}>
              <a
                href="https://github.com/its-kunaldev/tictactoe"
                rel="noreferrer"
                target={"_blank"}
              >
                <Button className={styles["github-btn"]}>Github</Button>
              </a>
              <a
                href="https://dmxddjpo16m8bi6gs30tma.on.drv.tw/tictactoe%20game/tictactoe/"
                rel="noreferrer"
                target={"_blank"}
              >
                <Button className={styles["demo-btn"]}>Demo</Button>
              </a>
            </div>
          </div>
        </div>

        <div className={styles["project"]}>
          <a href={require("../../assests/pics/calculator.jpg")}>
            <img
              src={require("../../assests/pics/calculator.jpg")}
              alt="digital clock"
            />
          </a>
          <div className={styles["project-info"]}>
            <h3>Calculator</h3>
            <div className={styles["explore-btns"]}>
              <a
                href="https://github.com/its-kunaldev/calculator"
                rel="noreferrer"
                target={"_blank"}
              >
                <Button className={styles["github-btn"]}>Github</Button>
              </a>
              <a
                href="https://its-kunaldev.github.io/calculator/"
                rel="noreferrer"
                target={"_blank"}
              >
                <Button className={styles["demo-btn"]}>Demo</Button>
              </a>
            </div>
          </div>
        </div>

        <div className={styles["project"]}>
          <a href={require("../../assests/pics/scorekeeper.jpg")}>
            <img
              src={require("../../assests/pics/scorekeeper.jpg")}
              alt="digital clock"
            />
          </a>
          <div className={styles["project-info"]}>
            <h3>Scorekeeper</h3>
            <div className={styles["explore-btns"]}>
              <a
                href="https://github.com/its-kunaldev/scoreKeeper"
                rel="noreferrer"
                target={"_blank"}
              >
                <Button className={styles["github-btn"]}>Github</Button>
              </a>
              <a
                href="https://dmxddjpo16m8bi6gs30tma.on.drv.tw/project2/scorekeeper games/scorekeeper.html"
                rel="noreferrer"
                target={"_blank"}
              >
                <Button className={styles["demo-btn"]}>Demo</Button>
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
