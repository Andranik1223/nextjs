import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Button from '../components/Button/button';

export const metadata = {
    title: 'Vision Vortex Contact Information',
    description: 'This is Contact Page',
};

const Contact = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Get In Touch</h1>
            <div className={styles.content}>
                <div className={styles.imgContainer}>
                    <Image
                        src="https://images.pexels.com/photos/3639873/pexels-photo-3639873.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt=""
                        fill={true}
                        className={styles.image}
                    />
                </div>
                <form className={styles.form}>
                    <input
                        type="text"
                        placeholder="name"
                        className={styles.input}
                    />
                    <input
                        type="text"
                        placeholder="email"
                        className={styles.input}
                    />
                    <textarea
                        className={styles.textArea}
                        placeholder="message"
                        cols="30"
                        rows="10"
                    ></textarea>
                    <Button url="#" text="Send" />
                </form>
            </div>
        </div>
    );
};
export default Contact;
