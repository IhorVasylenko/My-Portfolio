import React from 'react';
import style from './Contact.module.scss';
import {Animation5} from "../common/animation/ani5/Animation5";
import {Feedback} from "../common/form/Feedback";
import VisibilitySensor from "react-visibility-sensor";

export const Contact = () => {

    return (
        <div className={style.contact}>
            <div className={style.container}>
                <VisibilitySensor partialVisibility={false} offset={{bottom: -500}}>
                    {({isVisible}) => (
                        <div className={style.wrapperContactFormsContainer}>
                            {isVisible ?
                                <div className={style.contactFormsContainer}>
                                    <div className={style.titleSecondOrder}>
                                        <h4>Get In Touch</h4>
                                    </div>
                                    <Feedback/>
                                </div>
                                : null}
                        </div>
                    )}
                </VisibilitySensor>
                <VisibilitySensor partialVisibility={false} offset={{bottom: -700}}>
                    {({isVisible}) => (
                        <div className={style.wrapperMap}>
                            {isVisible ?
                                <iframe
                                    className={style.map}
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.492206492253!2d30.
                                    521080765621473!3d50.4505584452383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!
                                    1s0x40d4ce50f8b6e3c3%3A0xb528dc4d6dadc4f8!2z0JzQsNC50LTQsNC9INCd0LXQt9Cw0LvQtdC20L3
                                    QvtGB0YLRliwg0JrQuNGX0LIsIDAyMDAw!5e0!3m2!1suk!2sua!4v1629846304635!5m2!1suk!2sua"
                                    allowFullScreen={true}
                                    loading={"lazy"}/>
                                : null}
                        </div>
                    )}
                </VisibilitySensor>
            </div>
            <div className={style.title}>
                <Animation5 title={'Contact'} positionStyle={'horizontal'}/>
            </div>
        </div>
    );
};



