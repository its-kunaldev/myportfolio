import React, { useEffect, useState } from 'react';
import Button from '../UI/Button';

import styles from './Home.module.css';
import "../../index.css";

import myPic from "../../assests/pics/hacker.png";
import TypingEffect from './TypingEffect';

const Home = props => {

    let texts = ['Programmer', 'Developer', 'Student'];

    const Text = () => {
        const [index, setIndex] = useState(0);
        useEffect(() => {
            const timer = () => {
                setIndex(prevIndex => {
                    if (prevIndex === texts.length - 1) {
                        return 0;
                    }
                    return prevIndex + 1;
                })
            };
            setInterval(timer, 2000);
            return () => { clearInterval(timer); }
        }, []);
        return <p>{texts[index]}</p>
    }

    return (
        <section className={`${styles.home} section section--hidden`} id="home">
            <div className={styles.info}>
                <p>Hi, my name is</p>
                {/* <h1>Kunal Thakur</h1> */}
                <TypingEffect />
                <Text />
            </div>
            <div>
                <a href={require("../../assests/my-resume/myResume.pdf")} download="myResume" rel='noreferrer' target={'_blank'}><Button className={styles["download-btn"]}>Download CV</Button></a> 
                <a href="#contact"><Button className={styles["hello-btn"]}>Let's talk</Button></a> 
            </div>
            <div className={styles["img-container"]}>
                <img src={myPic} alt="" />
            </div>
        </section>
    )
}

export default Home;