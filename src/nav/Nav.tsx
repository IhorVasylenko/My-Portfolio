import React from 'react';
import style from './Nav.module.scss';

export const Nav = () => {
    return (
        <div className={style.nav}>
            <a href="">Home</a>
            <a href="">Projects</a>
            <a href="">Skills</a>
            <a href="">Contacts</a>
        </div>
    );
};
