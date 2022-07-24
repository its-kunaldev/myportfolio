import React from 'react';
import Button from '../UI/Button';

import styles from './Home.module.css';
import myPic from "../../assests/pics/user4.png"; 

const Home = props => {
    return(
        <section className={styles.home} id="home">
            <div className={styles.info}>
                <p>Hi, my name is</p>
                <h1>Kunal Thakur</h1>
                <p>Programmer</p>
            </div>
            <div>
                <Button className={styles["download-btn"]}>Download CV</Button>
                <Button className={styles["hello-btn"]}>Say, Hello</Button>
            </div>
            <div className={styles["img-container"]}>
                <img src={myPic} alt="" />
            </div>
        </section>
    )
}

export default Home;