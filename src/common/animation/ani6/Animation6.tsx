import React from 'react';
import style from './Animation6.module.scss';

type PropsType = {title: string}

export const Animation6 = (props: PropsType) => {
    return (
        <div className={style.wrapper}>
            <div className={style.letters}>
                {props.title.split('').map((l) => <span className={style.letter}>{l}</span>)}

                {/*<span className={style.letter}>P</span>
                <span className={style.letter}>A</span>
                <span className={style.letter}>L</span>
                <span className={style.letter}>M</span>
                <span className={style.letter}> </span>
                <span className={style.letter}>D</span>
                <span className={style.letter}>E</span>
                <span className={style.letter}>S</span>
                <span className={style.letter}>I</span>
                <span className={style.letter}>G</span>
                <span className={style.letter}>N</span>
                <span className={style.letter}>.</span>
                <span className={style.letter}>C</span>
                <span className={style.letter}>O</span>
                <span className={style.letter}>M</span>*/}
            </div>
        </div>
    )
}
