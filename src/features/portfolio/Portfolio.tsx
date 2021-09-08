import React from 'react';
import style from './Portfolio.module.scss';
import {AnimationCodeTitle} from "../../common/animation/animationCodeTitle/AnimationCodeTitle";
import {AnimationImage} from "../../common/animation/animationImage/AnimationImage";
import {useMediaQuery} from "@material-ui/core";
import SN from '../../assets/image/SN.jpeg';
import TL from '../../assets/image/TL.png';
import Tasks from '../../assets/image/Tasks.jpeg';


export const Portfolio: React.FC<PropsType> = () => {

    const isSmall = useMediaQuery('(max-width: 991px)');

    const projects = [
        {
            id: 1, image: TL, size: 300, title: 'Todo List', status: 'in progress',
            description: 'My project is specifically for the portfolio, it also uses the React library, ' +
                'as well as Redux and more.', urlG: 'https://github.com/IhorVasylenko/TodoList',
            urlP: 'https://IhorVasylenko.github.io/TodoList',
        },
        {
            id: 2, image: Tasks, size: 300, title: 'Learning Cards', status: 'in progress',
            description: 'My first team development experience.React, Redux, Axios, etc',
            urlG: 'https://github.com/lismgmk/My_pet_project',
            urlP: 'https://lismgmk.github.io/My_pet_project/',
        },
        {
            id: 3, image: SN, size: 300, title: 'Social Network', status: 'coming soon',
            description: 'A large project using a large number of technologies from the React library and not only.',
            urlG: 'https://github.com/IhorVasylenko/SocialNtetworkNew', urlP: '',
        },
    ];

    return (
        <div className={style.portfolio}>
            <div className={style.title}>
                <AnimationCodeTitle title={'Portfolio'} positionStyle={isSmall ? '' : 'vertical'}/>
            </div>
            <div className={style.container}>
                <div className={style.projects}>
                    {projects.map(p => <a href={p.urlG} className={style.hover}>{p.title}</a>)}
                </div>
                <div className={style.content}>
                    <div className={style.wrapper}>
                        {projects.map((p) => <div key={p.id} className={`${style.item} ${style.allProjects}`}>
                            <div className={style.animated}>
                                <img className={`${style.screensProjects} ${style.screensAllProjects}`}
                                     src={p.image} alt={p.title}/>
                                <div className={style.tilt}>
                                    <div className={style.overlay2}>
                                        <AnimationImage
                                            image={p.image}
                                            size={p.size}
                                            title={p.title}
                                            status={p.status}
                                            description={p.description}
                                            url={p.urlP}/>
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


//types
type PropsType = {
    id?: string
};

