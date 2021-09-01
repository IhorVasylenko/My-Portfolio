import React from "react";
import style from './Style.module.css'

export default function Section(props: PropsType) {
    const {title, subtitle, dark, id} = props

    return (
        <div className={`${style.section} ${dark ? style.sectionDark : ''} `}>
            <div className={style.sectionContent} id={id}>
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>
        </div>
    );
}

type PropsType = {
    title: string
    subtitle: string
    dark: boolean
    id: string
}