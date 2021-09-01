import React from 'react';
import style from './Review.module.css';

export const Review = () => {
    return (
        <div className={style.review}>
            <div className={style.title}>
                <h3>review</h3>
                <h2>reviews by client</h2>
            </div>
            <div className={style.reviewContent}>
                <h3>first review</h3>
                <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dui sem, vulputate vitae dolor sed,
                    sollicitudin pharetra nisi. In et sem libero. Integer pretium, tellus eu pellentesque tristique,
                    ex libero maximus elit, mollis tristique urna eros non tellus
                </span>
                <div className={style.reviewAuthor}>
                    <div className={style.avatar}></div>
                    <span className={style.author}>
                        <span>name</span>
                        <span>profession</span>
                    </span>
                </div>
            </div>
            <div className={style.companies}>
                <span className={style.company}>1</span>
                <span className={style.company}>2</span>
                <span className={style.company}>3</span>
                <span className={style.company}>4</span>
            </div>
        </div>
    );
};

