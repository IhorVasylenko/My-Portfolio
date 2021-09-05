import {Link} from "react-scroll";
import React, {useState} from 'react';
import style from './HamburgerMenu.module.scss';
import {MenuPositionType} from './HamburgerMenu';


export const HamburgerMenu2: React.FC<HamburgerMenuPropsType> = (props) => {

    const {
        menuPositions,
    } = props;

    let [classStyles, setClassStyles] = useState('')

    const changeClassHandler = () => {
        if (classStyles === '') {
            setClassStyles(`${style.active}`);
        } else {
            setClassStyles('');
        }
    };

    const MenuPositions = menuPositions.map(p =>
        <li key={p.id} className={style.menuPositionLi}>
            <Link key={p.id} to={p.link} spy={true} smooth={true} offset={50} duration={500} className={style.link}
                  onClick={() => {
                      changeClassHandler();
                  }}>
                {p.title}
            </Link>
        </li>
    );

    return (
        <div className={style.container}>
            <div className={classStyles}>
                <button className={style.navTgl} type='button' aria-label="toggle menu"
                        onClick={() => changeClassHandler()}>
                    <span aria-hidden="true"> </span>
                </button>
                <nav className={style.nav}>
                    {(classStyles === `${style.active}`)
                        ? <ul>{MenuPositions}</ul>
                        : null}
                </nav>
            </div>
        </div>
    );
};


//types
export type HamburgerMenuPropsType = {
    menuPositions: Array<MenuPositionType>
};

