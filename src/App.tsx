import React, {useState} from 'react';
import style from './App.module.css';
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {AboutMe} from "./about-me/AboutMe";
import {Portfolio} from "./portfolio/Portfolio";
import {Contact} from "./contact/Contact";
import ReactPageScroller from 'react-page-scroller';
import HamburgerMenu, {MenuPositionType} from "./hamburgerMenu/HamburgerMenu";


function App() {

    const [currentPage, setCurrenPage] = useState(0)

    const positionsData: MenuPositionType[] = [
        {id: '1', title: 'Home', active: false, path: setCurrenPage},
        {id: '2', title: 'AboutMe', active: false, path: setCurrenPage},
        {id: '3', title: 'Skills', active: false, path: setCurrenPage},
        {id: '4', title: 'Portfolio', active: false, path: setCurrenPage},
        {id: '5', title: 'Contact', active: false, path: setCurrenPage},
    ]

    return (
        <div className={style.appContainer}>
            <div className={style.hamburgerMenu}>
                <HamburgerMenu id={'menu'} menuPositions={positionsData}/>
            </div>
            <ReactPageScroller customPageNumber={currentPage}>
                <Main/>
                <AboutMe/>
                <Skills/>
                <Portfolio/>
                <Contact/>
            </ReactPageScroller>
        </div>
    );
}

export default App;