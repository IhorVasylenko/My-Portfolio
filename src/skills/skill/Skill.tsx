import React, {ReactComponentElement} from 'react';
import style from './Skill.module.scss';
import classNames from "classnames";

export const Skill = (props: SkillPropsType) => {
    let myClasses = classNames({
        [style.skill]: true,
        [style[props.animationClass]]: true
    })
    return (
        <div className={myClasses}>
            <div className={style.icon}>
                {props.icon}
            </div>
            <h4>{props.title}</h4>
            <p className={style.description}>{props.description}</p>
        </div>
    );
};


// types
type SkillPropsType = {
    title: string
    description: string
    animationClass: string
    icon: ReactComponentElement<any>
}

