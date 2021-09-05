import React from 'react';
import style from './Skills.module.scss';
import {Skill} from './skill/Skill';
import {Item} from './item/Item';
import {AnimationCodeTitle} from '../../common/animation/animationCodeTitle/AnimationCodeTitle';
import VisibilitySensor from "react-visibility-sensor";
import {SiReact} from 'react-icons/si';
import {SiTypescript} from 'react-icons/si';
import {SiStorybook} from 'react-icons/si';
import {SiLinkedin} from 'react-icons/si';
import {SiGithub} from 'react-icons/si';
import {SiNodeDotJs} from 'react-icons/si';
import {MdBrightness4} from 'react-icons/md';
import {IoCodeSlashSharp} from 'react-icons/io5';
import {ImDatabase} from 'react-icons/im';
import {ImHappy} from 'react-icons/im';
import {useMediaQuery} from "@material-ui/core";

export const Skills: React.FC<PropsType> = () => {

    const isSmall = useMediaQuery('(max-width: 575px)');

    return (
        <div className={style.skillsBlock}>
            <div className={style.title}>
                <h4>Services</h4>
                <AnimationCodeTitle title={'What I Do'} positionStyle={''}/>
            </div>
            <div className={style.skills}>
                {
                    isSmall
                        ? <VisibilitySensor partialVisibility={true} offset={{bottom: 0}}>
                            {({isVisible}) => (
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    width: '320px',
                                    height: '180vh'
                                }}>
                                    {
                                        isVisible
                                            ? <div className={style.container}>
                                                <div className={`${style.skill} ${style.left}`}>
                                                    <div className={style.icon}>
                                                        <SiReact color={'#eb83f8'} size={'50px'}/>
                                                    </div>
                                                    <h4>Front-end React</h4>
                                                    <p className={style.description}>
                                                        Build a Single Page Applications (SPA) with a rich user
                                                        interface that works on almost any device!
                                                    </p>
                                                </div>
                                                <div className={`${style.skill} ${style.right} ${style.borderT}`}>
                                                    <div className={style.icon}>
                                                        <SiNodeDotJs color={'#eb83f8'} size={'50px'}/>
                                                    </div>
                                                    <h4>I'm Starting To Learn Node.js</h4>
                                                    <p className={style.description}>
                                                        I want to learn the server side and become a full stack developer.
                                                    </p>
                                                </div>
                                                <div className={`${style.skill} ${style.left} ${style.borderT}`}>
                                                    <div className={style.icon}>
                                                        <SiGithub color={'#eb83f8'} size={'50px'}/>
                                                    </div>
                                                    <h4>Github It's Not a Problem</h4>
                                                    <p className={style.description}>
                                                        GitHub allows us to collaborate with others around the world,
                                                        plan our projects, and track our work.
                                                    </p>
                                                </div>
                                                <div className={`${style.skill} ${style.right} ${style.borderT}`}>
                                                    <div className={style.icon}>
                                                        <SiStorybook color={'#eb83f8'} size={'50px'}/>
                                                    </div>
                                                    <h4>Work With Storybook</h4>
                                                    <p className={style.description}>
                                                        Storybook is a very handy tool. good because it allows you to
                                                        view the library of components, see the states of components
                                                        and test them.
                                                    </p>
                                                </div>
                                                <div className={`${style.skill} ${style.left} ${style.borderT}`}>
                                                    <div className={style.icon}>
                                                        <SiLinkedin color={'#eb83f8'} size={'50px'}/>
                                                    </div>
                                                    <h4>I'm Social</h4>
                                                    <p className={style.description}>
                                                        On social networks, you can find a huge number of communities
                                                        dedicated to programming languages, software or the IT industry.
                                                    </p>
                                                </div>
                                                <div className={`${style.skill} ${style.right} ${style.borderT}`}>
                                                    <div className={style.icon}>
                                                        <SiTypescript color={'#eb83f8'} size={'50px'}/>
                                                    </div>
                                                    <h4>Only TypeScript</h4>
                                                    <p className={style.description}>
                                                        Making types explicit focuses our attention on how exactly our
                                                        system is built, and how different parts of it interact with
                                                        each other.
                                                    </p>
                                                </div>
                                            </div>
                                            : null
                                    }
                                </div>
                            )}
                        </VisibilitySensor>
                        : <VisibilitySensor partialVisibility={true} offset={{bottom: 0}}>
                            {({isVisible}) => (
                                <div style={{height: 400}}>
                                    {
                                        isVisible
                                            ? <div className={style.container}>
                                                <div className={style.service}>
                                                    <Skill title={"Front-end React"}
                                                           animationClass={"left"}
                                                           icon={<SiReact color={'#eb83f8'} size={'60px'}/>}
                                                           description={"Build a Single Page Applications (SPA) with a " +
                                                           "rich user interface that works on almost any device!"}/>
                                                </div>
                                                <div className={`${style.service} ${style.borderLR}`}>
                                                    <Skill title={"I'm Starting To Learn Node.js"}
                                                           animationClass={"top"}
                                                           icon={<SiNodeDotJs color={'#eb83f8'} size={'60px'}/>}
                                                           description={"I want to learn the server side and become a " +
                                                           "full stack developer."}/>
                                                </div>
                                                <div className={style.service}>
                                                    <Skill title={"Github It's Not a Problem"}
                                                           animationClass={"right"}
                                                           icon={<SiGithub color={'#eb83f8'} size={'60px'}/>}
                                                           description={"GitHub allows us to collaborate with others " +
                                                           "around the world, plan our projects, and track our work."}/>
                                                </div>
                                                <div className={style.service}>
                                                    <Skill title={"Work With Storybook"}
                                                           animationClass={"left"}
                                                           icon={<SiStorybook color={'#eb83f8'} size={'60px'}/>}
                                                           description={"Storybook is a very handy tool. good because" +
                                                           " it allows you to view the library of components, see the" +
                                                           " states of components and test them."}/>
                                                </div>
                                                <div className={`${style.service} ${style.borderLR}`}>
                                                    <Skill title={"I'm Social"}
                                                           animationClass={"bottom"}
                                                           icon={<SiLinkedin color={'#eb83f8'} size={'60px'}/>}
                                                           description={"On social networks, you can find a huge " +
                                                           "number of communities dedicated to programming languages," +
                                                           " software or the IT industry."}/>
                                                </div>
                                                <div className={style.service}>
                                                    <Skill title={"Only TypeScript"}
                                                           animationClass={"right"}
                                                           icon={<SiTypescript color={'#eb83f8'} size={'60px'}/>}
                                                           description={"Making types explicit focuses our attention on " +
                                                           "how exactly our system is built, and how different parts " +
                                                           "of it interact with each other. "}/>
                                                </div>
                                            </div>
                                            : null
                                    }
                                </div>
                            )}
                        </VisibilitySensor>
                }
            </div>
            <div className={style.experience}>
                <Item icon={<MdBrightness4 color={'#fff'} size={'40px'}/>} value={455} subscribe={"Sleepless Nights"}/>
                <Item icon={<IoCodeSlashSharp color={'#fff'} size={'40px'}/>} value={99999}
                      subscribe={"Lines Of Code"}/>
                <Item icon={<ImDatabase color={'#fff'} size={'40px'}/>} value={1024}
                      subscribe={"Gigabyte Of Information"}/>
                <Item icon={<ImHappy color={'#fff'} size={'40px'}/>} value={100} subscribe={"% Good Mood"}/>
            </div>
        </div>
    );
};


//types
type PropsType = {
    id?: string
};








