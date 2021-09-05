import React, {Dispatch, SetStateAction, useState} from 'react';
import style from './HamburgerMenu.module.scss';


export const HamburgerMenu: React.FC<HamburgerMenuPropsType> = (props) => {

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
            <button className={style.link} onClick={() => {
                changeClassHandler();
                p.path(+p.id - 1);
            }}>
                {p.title}
            </button>
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
                    {(classStyles === `${style.active}`) ? <ul>{MenuPositions}</ul> : null}
                </nav>
            </div>
        </div>
    );
};


//types
export type HamburgerMenuPropsType = {
    menuPositions: Array<MenuPositionType>
};

export type MenuPositionType = {
    id: string
    title: string
    link: string
    active?: boolean
    path: Dispatch<SetStateAction<number>>
};