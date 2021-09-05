import React from 'react';
import style from './AnimationCodeTitle.module.scss';
import VisibilitySensor from "react-visibility-sensor";
import classNames from "classnames";
// @ts-ignore
import Chaffle from 'chaffle';


export const AnimationCodeTitle: React.FC<PropsType> = (props) => {

    const {
        title,
        positionStyle,
    } = props;

    let myClasses = classNames({
        [style.nbrLtr]: true,
        [style[positionStyle]]: true,
    });

    const elements = document.querySelectorAll("[data-chaffle]");
    Array.prototype.forEach.call(elements, function (el) {
        const chaffle = new Chaffle(el, {});
        chaffle.init();
    });

    return (
        <VisibilitySensor partialVisibility={true} offset={{bottom: 0}}>
            {({isVisible}) => (
                <div style={{height: 80, width: 320}}>
                    {isVisible ?
                        <div className={style.content}>
                            <div className={style.random}>
                                <p
                                    className={myClasses}
                                    data-chaffle="en"
                                    data-chaffle-speed="50"
                                    data-chaffle-delay="200"
                                >
                                    {title}
                                </p>
                            </div>
                        </div>
                        : null}
                </div>
            )}
        </VisibilitySensor>
    );
};


//types
type PropsType = {
    title: string
    positionStyle: string
};

