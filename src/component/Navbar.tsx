import React from "react";
import {Link} from "react-scroll";
import style from './Style.module.css'

export const Navbar = () => {
    return (
        <nav className={style.nav} id={'navbar'}>
            <div className={style.navContent}>
                <ul className={style.navItems}>
                    <li className={style.navItem}>
                        <Link to={'/nav'} spy={true} smooth={true} offset={-70} activeClass={"active"}>Section 1</Link>
                    </li>
                    <li className={style.navItem}>
                        <Link to={'section2'} spy={true} smooth={true} offset={-70} activeClass={"active"}>Section 2</Link>
                    </li>
                    <li className={style.navItem}>
                        <Link to={'section3'} spy={true} smooth={true} offset={-70} activeClass={"active"}>Section 3</Link>
                    </li>
                    <li className={style.navItem}>
                        <Link to={'section4'} spy={true} smooth={true} offset={-70} activeClass={"active"}>Section 4</Link>
                    </li>
                    <li className={style.navItem}>
                        <Link to={'section5'} spy={true} smooth={true} offset={-70} activeClass={"active"}>Section 5</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
