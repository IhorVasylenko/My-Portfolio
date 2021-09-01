import React from 'react';
import style from './Portfolio.module.scss';
import {Animation5} from "../common/animation/ani5/Animation5";
import SN from '../assets/image/SN.jpeg';
import TL from '../assets/image/TL.png';
import Counter from '../assets/image/Counter.jpeg';
import MS from '../assets/image/MS.jpeg';
import GP from '../assets/image/GP.jpeg';
import Tasks from '../assets/image/Tasks.jpeg';
import {Animation7} from "../common/animation/ani7/Animation7";

export const Portfolio = () => {

    const projects = [
        {image: SN, size: 300, title: 'Social Network', status: 'in progress',
            description: 'A large project that uses a large number of technologies from the React library.',},
        {image: TL, size: 300, title: 'Todo List', status: 'in progress',
            description: 'My project is specifically for the portfolio, it also uses the React library, as well as Redux and more.',},
        {image: Counter, size: 300, title: 'Counter', status: 'in progress',
            description: 'A small example of using localStorage.',},
        {image: MS, size: 300, title: 'Movies Searcher', status: 'in progress',
            description: 'The main idea of this project is server requests, Ajax is used.',},
        {image: GP, size: 300, title: 'Group Project', status: 'in progress',
            description: 'My first experience in commercial development.',},
        {image: Tasks, size: 300, title: 'Individual Tasks', status: 'in progress',
            description: 'Examples of solving individual tasks.',},
    ];

    return (
        <div className={style.portfolio}>
            <div className={style.title}>
                <Animation5 title={'Portfolio'} positionStyle={'vertical'}/>
            </div>
            <div className={style.container}>
                <div className={style.projects}>
                    <button className={style.project}>
                        <span className={style.hover}>first</span>
                    </button>
                    <button className={style.project}>
                        <span className={style.active}>first</span>
                    </button>
                </div>
                <div className={style.content}>
                    <div className={style.wrapper}>
                        {projects.map((p) => <div className={`${style.item} ${style.allProjects}`}>
                            <div className={style.animated}>
                                <img className={`${style.screensProjects} ${style.screensAllProjects}`}
                                     src={p.image} alt={p.title}/>
                                <div className={style.tilt}>
                                    <div className={style.overlay2}>
                                        <Animation7
                                            image={p.image}
                                            size={p.size}
                                            title={p.title}
                                            status={p.status}
                                            description={p.description}/>
                                    </div>
                                </div>
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

