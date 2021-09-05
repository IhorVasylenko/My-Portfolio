import React from 'react';
import style from './AnimationForButton.module.scss';


export const AnimationForButton: React.FC = (props) => {

    const {
        children
    } = props;

    return (
        <div className={style.container}>
            <div className={style.bb}>
                {children}
            </div>
        </div>
    );
};

