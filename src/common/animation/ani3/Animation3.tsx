import React from 'react';
import style from './Animation3.module.scss';

export const Animation3 = (props: PropsType) => {
    return (
        <div className={style.container}>
            <div className={style.bb}>
                <span className={style.text}>{props.value}</span>
            </div>
        </div>
    )
}

type PropsType = {
    value: string
}
