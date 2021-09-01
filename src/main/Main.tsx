import React from 'react';
import style from './Main.module.scss';
import photo from '../assets/image/myphoto.jpeg';
import {Animation3} from '../common/animation/ani3/Animation3';
import jsImage from '../assets/image/js.png';
import cssImage from '../assets/image/css.png';
import tsImage from '../assets/image/ts.png';
import htmlImage from '../assets/image/html.png';
import hooksImage from '../assets/image/hooks.png';
import nodeImage from '../assets/image/node.png';
import reactImage from '../assets/image/react.png';
import reduxImage from '../assets/image/redux.png';
import sassImage from '../assets/image/sass.png';
import yarnImage from '../assets/image/yarn.png';

export const Main = () => {
    const myPhoto = {
        backgroundImage: `url(${photo})`,
    };
    const logos = [
        {id: 1, image: jsImage, style: {left: '7%', top: '10%',}, class: style.moveDown,},
        {id: 2, image: cssImage, style: {left: '27%', top: '15%',}, class: style.moveDown,},
        {id: 3, image: sassImage, style: {left: '47%', top: '35%',}, class: style.moveUp,},
        {id: 4, image: htmlImage, style: {left: '67%', top: '10%',}, class: style.moveDown,},
        {id: 5, image: hooksImage, style: {left: '87%', top: '25%',}, class: style.moveUp,},
        {id: 6, image: nodeImage, style: {left: '7%', top: '85%',}, class: style.moveDown,},
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
                    <div className={style.text} >Frontend Developer</div>
                    <Animation3 value={'Download CV'}/>
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

