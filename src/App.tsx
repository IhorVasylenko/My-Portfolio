import React, {useState} from 'react';
import style from './App.module.scss';
import ReactPageScroller from 'react-page-scroller';
import {Element} from 'react-scroll';
import {useMediaQuery} from "@material-ui/core";
import {Main} from "./features/main/Main";
import {Skills} from "./features/skills/Skills";
import {AboutMe} from "./features/about-me/AboutMe";
import {Portfolio} from "./features/portfolio/Portfolio";
import {Contact} from "./features/contact/Contact";
import {HamburgerMenu, MenuPositionType} from "./common/hamburgerMenu/HamburgerMenu";
import {HamburgerMenu2} from "./common/hamburgerMenu/HamburgerMenu2";


function App() {

    const [currentPage, setCurrenPage] = useState(0);

    const isSmall = useMediaQuery('(max-width: 575px)');

    const positionsData: MenuPositionType[] = [
        {id: '1', title: 'Home', active: false, path: setCurrenPage, link: 'Main',},
        {id: '2', title: 'AboutMe', active: false, path: setCurrenPage, link: 'AboutMe',},
        {id: '3', title: 'Skills', active: false, path: setCurrenPage, link: 'Skills',},
        {id: '4', title: 'Portfolio', active: false, path: setCurrenPage, link: 'Portfolio',},
        {id: '5', title: 'Contact', active: false, path: setCurrenPage, link: 'Contact',},
    ];

    return isSmall
        ? <div className={style.appContainer}>
            <div className={style.hamburgerMenu}>
                <HamburgerMenu2 menuPositions={positionsData}/>
            </div>
            <React.Fragment>
                <Element id='Main' name='Main'>
                    <Main/>
                </Element>
                <Element id='AboutMe' name='AboutMe'>
                    <AboutMe/>
                </Element>
                <Element id='Skills' name='Skills'>
                    <Skills/>
                </Element>
                <Element id='Portfolio' name='Portfolio'>
                    <Portfolio/>
                </Element>
                <Element id='Contact' name='Contact'>
                    <Contact/>
                </Element>
            </React.Fragment>
        </div>
        : <div className={style.appContainer}>
            <div className={style.hamburgerMenu}>
                <HamburgerMenu menuPositions={positionsData}/>
            </div>
            <ReactPageScroller customPageNumber={currentPage}>
                <Main/>
                <AboutMe/>
                <Skills/>
                <Portfolio/>
                <Contact/>
            </ReactPageScroller>
        </div>
}

export default App;