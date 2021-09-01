import React from 'react';
import style from './Skills.module.scss';
import {Skill} from "./skill/Skill";
import {Item} from "./item/Item";
import {Animation5} from "../common/animation/ani5/Animation5";
import VisibilitySensor from "react-visibility-sensor";
import {SiReact} from "react-icons/si";
import {SiTypescript} from 'react-icons/si';
import {SiStorybook} from 'react-icons/si';
import {SiLinkedin} from 'react-icons/si';
import {SiGithub} from 'react-icons/si';
import {SiVueDotJs} from 'react-icons/si';
import {MdBrightness4} from 'react-icons/md';
import {IoCodeSlashSharp} from 'react-icons/io5';
import {ImDatabase} from 'react-icons/im';
import {ImHappy} from 'react-icons/im';

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={style.title}>
                <h4>Services</h4>
                <Animation5 title={'What I Do'} positionStyle={''}/>
            </div>
            <div className={style.skills}>
                <VisibilitySensor partialVisibility={true} offset={{bottom: 0}}>
                    {({isVisible}) => (
                        <div style={{height: 400}}>
                            {isVisible ?
                                <div className={style.container}>
                                    <div className={style.service}>
                                        <Skill title={"Front-end React"}
                                               animationClass={"left"}
                                               icon={<SiReact color={'#eb83f8'} size={'60px'}/>}
                                               description={"some text some text some text some text some text some text "}/>
                                    </div>
                                    <div className={`${style.service} ${style.border}`}>
                                        <Skill title={"Only TypeScript"}
                                               animationClass={"top"}
                                               icon={<SiTypescript color={'#eb83f8'} size={'60px'}/>}
                                               description={"some text some text some text some text some text some text "}/>
                                    </div>
                                    <div className={style.service}>
                                        <Skill title={"I'm Starting To Learn Vue"}
                                               animationClass={"right"}
                                               icon={<SiVueDotJs color={'#eb83f8'} size={'60px'}/>}
                                               description={"some text some text some text some text some text some text "}/>
                                    </div>
                                    <div className={style.service}>
                                        <Skill title={"I'm Social"}
                                               animationClass={"left"}
                                               icon={<SiLinkedin color={'#eb83f8'} size={'60px'}/>}
                                               description={"some text some text some text some text some text some text "}/>
                                    </div>
                                    <div className={`${style.service} ${style.border}`}>
                                        <Skill title={"Work With Storybook"}
                                               animationClass={"bottom"}
                                               icon={<SiStorybook color={'#eb83f8'} size={'60px'}/>}
                                               description={"some text some text some text some text some text some text "}/>
                                    </div>
                                    <div className={style.service}>
                                        <Skill title={"Github It's Not a Problem"}
                                               animationClass={"right"}
                                               icon={<SiGithub color={'#eb83f8'} size={'60px'}/>}
                                               description={"some text some text some text some text some text some text "}/>
                                    </div>
                                </div>
                                : null}
                        </div>
                    )}
                </VisibilitySensor>
            </div>
            <div className={style.experience}>
                <Item icon={<MdBrightness4 color={'#fff'} size={'40px'}/>} value={365} subscribe={"Sleepless Nights"}/>
                <Item icon={<IoCodeSlashSharp color={'#fff'} size={'40px'}/>} value={99999} subscribe={"Lines Of Code"}/>
                <Item icon={<ImDatabase color={'#fff'} size={'40px'}/>} value={1024} subscribe={"Gigabyte Of Information"}/>
                <Item icon={<ImHappy color={'#fff'} size={'40px'}/>} value={100} subscribe={"Good Mood"}/>
            </div>
        </div>
    );
};








