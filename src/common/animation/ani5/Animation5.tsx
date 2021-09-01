import React from 'react';
import style from './Animation5.module.scss';
// @ts-ignore
import Chaffle from 'chaffle';
import VisibilitySensor from "react-visibility-sensor";
import classNames from "classnames";

type PropsType = {
    title: string
    positionStyle: string
}

export const Animation5 = (props: PropsType) => {
    let myClasses = classNames({
        [style.nbrLtr]: true,
        [style[props.positionStyle]]: true
    })

    const elements = document.querySelectorAll("[data-chaffle]");
    Array.prototype.forEach.call(elements, function(el) {
        const chaffle = new Chaffle (el, {
            lang: "en",
            speed: 50,
            delay: 200
        });
        chaffle.init();
    });

    return (
        <VisibilitySensor partialVisibility={true} offset={{bottom: 0}}>
            {({isVisible}) => (
                <div style={{height: 1, width: 1}}>
                    {isVisible ?
                        <div className={style.content}>
                            <div className={style.random}>
                                <p className={myClasses} data-chaffle="en">{props.title}</p>
                            </div>
                        </div>
                        : null}
                </div>
            )}
        </VisibilitySensor>
    )
}

