import React from 'react';
import styles from './page.module.css';
import Button from '@/app/components/Button/button';
import Image from 'next/image';

const Category = ({ params }) => {
    console.log(params);
    return (
        <div className={styles.container}>
            <h1 className={styles.catTitle}>{params.category}</h1>
            <div className={styles.item}>
                <div className={styles.content}>
                    <h1 className={styles.title}>test</h1>
                    <p className={styles.description}>Desc</p>
                    <Button text="See More" url="#" />
                </div>
                <div className={styles.imgContainer}>
                    <Image
                        src="https://images.pexels.com/photos/2090104/pexels-photo-2090104.jpeg?auto=compress&cs=tinysrgb&w=600"
                        className={styles.img}
                        fill={true}
                        alt=""
                    />
                </div>
            </div>

            <div className={styles.item}>
                <div className={styles.content}>
                    <h1 className={styles.title}>test</h1>
                    <p className={styles.description}>Desc</p>
                    <Button text="See More" url="#" />
                </div>
                <div className={styles.imgContainer}>
                    <Image
                        src="https://images.pexels.com/photos/2090104/pexels-photo-2090104.jpeg?auto=compress&cs=tinysrgb&w=600"
                        className={styles.img}
                        fill={true}
                        alt=""
                    />
                </div>
            </div>

            <div className={styles.item}>
                <div className={styles.content}>
                    <h1 className={styles.title}>test</h1>
                    <p className={styles.description}>Desc</p>
                    <Button text="See More" url="#" />
                </div>
                <div className={styles.imgContainer}>
                    <Image
                        src="https://images.pexels.com/photos/2090104/pexels-photo-2090104.jpeg?auto=compress&cs=tinysrgb&w=600"
                        className={styles.img}
                        fill={true}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default Category;
