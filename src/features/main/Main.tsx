import React from 'react';
import style from './Main.module.scss';
import {AnimationForButton} from '../../common/animation/animationForButton/AnimationForButton';
import photo from '../../assets/image/myphoto.jpeg';
import jsImage from '../../assets/image/js.png';
import cssImage from '../../assets/image/css.png';
import tsImage from '../../assets/image/ts.png';
import htmlImage from '../../assets/image/html.png';
import hooksImage from '../../assets/image/hooks.png';
import nodeImage from '../../assets/image/node.png';
import reactImage from '../../assets/image/react.png';
import reduxImage from '../../assets/image/redux.png';
import sassImage from '../../assets/image/sass.png';
import yarnImage from '../../assets/image/yarn.png';
import {Link} from "react-router-dom";


export const Main: React.FC<PropsType> = () => {

    const myPhoto = {
        backgroundImage: `url(${photo})`,
    };

    const logos = [
        {id: 1, image: jsImage, style: {left: '7%', top: '10%',}, class: style.moveDown,},
        {id: 2, image: cssImage, style: {left: '27%', top: '15%',}, class: style.moveDown,},
        {id: 3, image: sassImage, style: {left: '47%', top: '35%',}, class: style.moveUp,},
        {id: 4, image: htmlImage, style: {left: '67%', top: '10%',}, class: style.moveDown,},
        {id: 5, image: hooksImage, style: {left: '87%', top: '40%',}, class: style.moveUp,},
        {id: 6, image: nodeImage, style: {left: '7%', top: '80%',}, class: style.moveDown,},
        {id: 7, image: reactImage, style: {left: '27%', top: '90%',}, class: style.moveUp,},
        {id: 8, image: reduxImage, style: {left: '47%', top: '70%',}, class: style.moveDown,},
        {id: 9, image: tsImage, style: {left: '67%', top: '90%',}, class: style.moveUp,},
        {id: 10, image: yarnImage, style: {left: '87%', top: '63%',}, class: style.moveDown,},
    ];

    return (
        <div className={style.main}>
            <div className={style.content}>
                <div className={style.container}>
                    <h4>Hello, I'm</h4>
                    <div className={style.glitch} data-text="Ihor Vasylenko">Ihor Vasylenko</div>
                    <div className={style.text}>Frontend Developer</div>
                    <AnimationForButton >
                        <Link to='https://raw.githubusercontent.com/IhorVasylenko/My-Portfolio/blob/9dda45994c245ef2c7c4c58f79866a9338ecccec/public/files/Front-End_CV.pdf' target="_blank" download className={style.link}>
                            Download CV
                        </Link>
                    </AnimationForButton>
                    {
                        logos.map((l) =>
                            <img key={l.id} className={l.class} src={l.image} alt="jsImage" style={l.style}/>)
                    }
                </div>
                <div className={style.photo} style={myPhoto}>
                </div>
            </div>
        </div>
    );
};


//types
type PropsType = {
    id?: string
};

