import React, { useEffect, useState } from 'react';
import Button from '../UI/Button';

import styles from './Home.module.css';
import myPic from "../../assests/pics/user4.png";
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
            setInterval(timer, 3000);
            return () => { clearInterval(timer); }
        }, []);
        return <p>{texts[index]}</p>
    }

    return (
        <section className={styles.home} id="home">
            <div className={styles.info}>
                <p>Hi, my name is</p>
                {/* <h1>Kunal Thakur</h1> */}
                <TypingEffect />
                <Text />
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