import React, {Dispatch, SetStateAction, useState} from 'react';
import style from './HamburgerMenu.module.scss'

export type HamburgerMenuPropsType = {
    id: string,
    menuPositions: Array<MenuPositionType>,
};

export type MenuPositionType = {
    id: string,
    title: string,
    active?: boolean,
    path: Dispatch<SetStateAction<number>>,
};

function HamburgerMenu (props: HamburgerMenuPropsType) {

    let [classStyles, setClassStyles] = useState('')

    const changeClassHandler = () => {
        if (classStyles === '') {
            setClassStyles(`${style.active}`)
        } else {
            setClassStyles('')
        }
    }

    const MenuPositions = props.menuPositions.map(p =>
        <li key={p.id} className={style.menuPositionLi}>
            <button  className={style.link} onClick={() => {
                changeClassHandler()
                p.path(+p.id - 1)
            }}>
                {p.title}
            </button>
        </li>
    )

    return (
        <div className={style.container}>
            <div className={classStyles}>
                <button className={style.navTgl} type='button' aria-label="toggle menu"
                        onClick={() => changeClassHandler()}>
                    <span aria-hidden="true"> </span>
                </button>
                <nav className={style.nav}>
                    { (classStyles === `${style.active}`) ? <ul>{MenuPositions}</ul> : null}
                </nav>
            </div>
        </div>
    )
}

export default HamburgerMenu