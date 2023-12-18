import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div>©2023 Vision Vortex. All rights reserved.</div>
            <div className={styles.social}>
                <Image
                    src="/1.png"
                    width={30}
                    height={30}
                    alt="VV Dev Facebook"
                    className={styles.icon}
                />
                <Image
                    src="/2.png"
                    width={30}
                    height={30}
                    alt="VV Dev Instagram"
                    className={styles.icon}
                />
                <Image
                    src="/3.png"
                    width={30}
                    height={30}
                    alt="VV Dev Twitter"
                    className={styles.icon}
                />
                <Image
                    src="/4.png"
                    width={30}
                    height={30}
                    alt="VV Dev YouTube"
                    className={styles.icon}
                />
            </div>
        </div>
    );
};

export default Footer;
