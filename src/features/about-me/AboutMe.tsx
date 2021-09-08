import React from 'react';
import style from './AboutMe.module.scss';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import githubIcon from '../../assets/image/githubIcon.png';
import linkedinIcon from '../../assets/image/linkedinIcon.png';
import telegramIcon from '../../assets/image/telegram.png';
import codewarsIcon from '../../assets/image/codewars.png';


export const AboutMe: React.FC<PropsType> = () => {

    const skills = [
        {id: 1, name: 'HTML', value: 75, style: {width: '75%'},},
        {id: 2, name: 'CSS', value: 65, style: {width: '65%'},},
        {id: 3, name: 'JavaScript', value: 70, style: {width: '70%'},},
        {id: 4, name: 'React', value: 90, style: {width: '90%'},},
        {id: 5, name: 'Redux', value: 80, style: {width: '80%'},},
    ];

    return (
        <div className={style.aboutMe}>
            <div className={style.info}>
                <div className={style.stars}/>
                <div className={style.stars2}/>
                <div className={style.stars3}/>
                <div className={style.content}>
                    <h4>About Me</h4>
                    <h3>Trust Me, I’m a Frontend Developer ;)</h3>
                    <div className={style.separator}/>
                    <p>The amount I've grown lately is incredible.
                        I look back at work I did before I started and I cringe.
                        My next steps as a developer are to continue to develop my JavaScript skills
                        and learn frameworks.
                        I am also looking for innovative ways , by improving workflow and reducing project times,
                        or by making things more component-based to reduce the number of bugs .
                        The future is bright and I can’t wait to learn more!
                    </p>
                    <div className={style.socialIcon}>
                        <a href="https://github.com/IhorVasylenko">
                            <img src={githubIcon} alt="github.com"/>
                        </a>
                        <a href="https://linkedin.com/in/игорь-василенко-48944811b">
                            <img src={linkedinIcon} alt="linkedinIcon.com"/>
                        </a>
                        <a href="https://www.codewars.com/users/Ihor_Vasylenko">
                            <img src={codewarsIcon} alt="instagramIcon.com"/>
                        </a>
                        <a href="https://www.facebook.com/igor.vasylenko.965/">
                            <img src={telegramIcon} alt="facebookIcon.com"/>
                        </a>
                    </div>
                </div>
            </div>
            <div className={style.skills}>
                <h4>My Skills</h4>
                <VisibilitySensor partialVisibility={true} offset={{bottom: 0}}>
                    {({isVisible}) => (
                        <div style={{height: 350}}>
                            {isVisible ?
                                <div className={style.skillsContainer}>
                                    {skills.map((s) =>
                                        <div key={s.id} className={style.progressContainer}>
                                            <span className={style.name}>{s.name}</span>
                                            <span className={style.value}>
                                                <span>
                                                     <CountUp end={s.value} duration={6}/>
                                                </span>
                                                 %
                                            </span>
                                            <div className={style.indicator} style={s.style}/>
                                        </div>)}
                                </div>
                                : null}
                        </div>
                    )}
                </VisibilitySensor>
            </div>
        </div>
    );
};


//types
type PropsType = {
    id?: string
};

