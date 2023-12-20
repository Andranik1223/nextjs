'use client';

import React, { useContext } from 'react';
import styles from './darkModeToggle.module.css';
import { ThemeContext } from '@/app/context/Theme.Context';

function DarkModeToggle() {
    const { toggle, mode } = useContext(ThemeContext);
    return (
        <div className={styles.container} onClick={toggle}>
            <div className={styles.icon}>🌙</div>
            <div className={styles.icon}>☀️</div>
            <div
                className={styles.ball}
                style={mode === 'light' ? { right: '6px' } : { left: '6px' }}
            />
        </div>
    );
}

export default DarkModeToggle;
