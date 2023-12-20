import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';

const BlogPost = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.info}>
                    <h1 className={styles.title}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit.
                    </h1>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Expedita nisi recusandae quis, libero ratione
                        odit. Unde, temporibus aut. Minima suscipit vitae
                        nesciunt facere nihil explicabo optio deleniti in
                        molestias voluptate?
                    </p>
                    <div className={styles.author}>
                        <Image
                            src="/man.webp"
                            alt=""
                            width={40}
                            height={40}
                            className={styles.avatar}
                        />
                        <span className={styles.username}> John Doe</span>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image
                        src="https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt=""
                        fill={true}
                        className={styles.image}
                    />
                </div>
            </div>
            <div className={styles.content}>
                <p className={styles.text}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Labore, libero. Iure deleniti quo eligendi iste adipisci,
                    ullam deserunt perspiciatis in dolore, accusamus atque
                    reiciendis libero, facilis voluptate totam. Dicta, fugit
                    necessitatibus at ducimus accusamus reiciendis adipisci fuga
                    sit voluptatum. Sequi, labore. Impedit quas voluptatibus
                    earum ut ea aut, maxime quibusdam ex aspernatur molestiae in
                    maiores repudiandae totam distinctio quidem aliquid.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Fuga ipsam commodi, voluptas quaerat excepturi soluta
                    repellat at cupiditate natus iste vitae eveniet magnam
                    voluptates, modi quae fugit aspernatur, voluptatum neque!
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Qui, rerum alias nesciunt itaque, sapiente sunt autem, optio
                    corporis ex laudantium facilis recusandae nam mollitia ut
                    excepturi. Possimus dolor ullam quisquam cumque eligendi
                    expedita aut neque repellendus quia recusandae velit, magnam
                    optio nemo pariatur consectetur corporis alias dolorum ut
                    nihil praesentium. Optio, facere consectetur, perspiciatis
                    corporis debitis aliquam iure, rem molestias adipisci
                    eligendi cum? Perferendis dicta saepe placeat autem
                    voluptatem incidunt tempora magnam, quaerat aliquid
                    reiciendis, doloribus dolore? Aliquam impedit praesentium
                    assumenda quos rem eveniet dolor error, inventore quae,
                    incidunt ratione.
                </p>
            </div>
        </div>
    );
};

export default BlogPost;
