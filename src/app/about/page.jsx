import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Button from '../components/Button/button';

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image
                    src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    fill={true}
                    alt=""
                    className={styles.img}
                />
                <div className={styles.imgText}>
                    <h1 className={styles.imgTitle}>Digital Storytellers</h1>
                    <h2 className={styles.imgDescriptions}>
                        handcrafting award winning digital experiences
                    </h2>
                </div>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.item}>
                    <h1 className={styles.title}>Who Are We?</h1>
                    <p className={styles.description}>
                        Business development is the strategic pursuit of
                        opportunities to drive growth and create value. It
                        involves fostering relationships, identifying market
                        trends, and implementing innovative strategies. By
                        expanding market reach, forging partnerships, and
                        optimizing internal processes, organizations can enhance
                        their competitive position.
                        <br />
                        <br />
                        Successful business development requires a deep
                        understanding of customer needs, industry dynamics, and
                        a proactive approach to capitalize on emerging trends.
                        It is a dynamic process that aligns market demands with
                        organizational capabilities, fueling sustainable
                        success.
                    </p>
                </div>
                <div className={styles.item}>
                    <h1 className={styles.title}>What We Do?</h1>
                    <p className={styles.description}>
                        In business development, adaptability is key—navigating
                        change, seizing opportunities, and fostering networks.
                        From mergers to innovation, staying agile ensures
                        sustained growth. Effective strategies prioritize
                        long-term sustainability over short-term gains, creating
                        a dynamic framework for success.
                        <br />
                        <br /> --Dynamic Websites
                        <br />
                        <br />
                        -- Fast and Handy
                        <br />
                        <br />
                        -- Mobile Apps
                    </p>
                    <Button url="/contact" text="Contact" />
                </div>
            </div>
        </div>
    );
};

export default About;
