import React, {ReactComponentElement} from 'react';
import style from './Skill.module.scss';
import classNames from "classnames";


export const Skill: React.FC<SkillPropsType> = (props) => {

    const {
        icon,
        title,
        animationClass,
        description,
    } = props;

    let myClasses = classNames({
        [style.skill]: true,
        [style[animationClass]]: true
    });

    return (
        <div className={myClasses}>
            <div className={style.icon}>
                {icon}
            </div>
            <h4>{title}</h4>
            <p className={style.description}>{description}</p>
        </div>
    );
};


// types
type SkillPropsType = {
    title: string
    description: string
    animationClass: string
    icon: ReactComponentElement<any>
};

