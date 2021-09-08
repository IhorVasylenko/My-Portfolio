import React, {createRef, RefObject} from 'react';
import style from './AnimationImage.module.scss';


export const AnimationImage: React.FC<PropsType> = (props) => {

    const {
        title,
        description,
        image,
        status,
        size,
        url,
    } = props;

    const card: RefObject<any> = createRef();
    const cardBg: RefObject<any> = createRef();
    const cardWrap: RefObject<any> = createRef();
    let state = {mouseX: 0, mouseY: 0, height: size, width: size,};

    const onMouseMoveHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        const bounds = e.currentTarget.getBoundingClientRect();

        state.mouseX = e.pageX - bounds.left - state.width / 2;
        state.mouseY = e.pageY - bounds.top - state.height / 2;

        const angleX = (state.mouseX / state.width) * 30;
        const angleY = (state.mouseY / state.height) * -30;
        card.current.style.transform = `rotateY(${angleX}deg) rotateX(${angleY}deg)`;

        const posX = (state.mouseX / state.width) * -40;
        const posY = (state.mouseY / state.height) * -40;
        cardBg.current.style.transform = `translateX(${posX}px) translateY(${posY}px)`;
    };

    const onMouseOutHandler = () => {
        card.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
        cardBg.current.style.transform = `translateX(0px) translateY(0px)`;
    };

    return (
        <div className={style.container}>
            <div className={style.cardWrap} ref={cardWrap} onMouseOut={onMouseOutHandler}>
                <div className={style.card} ref={card} onMouseMove={(e) => onMouseMoveHandler(e)}>
                    <div className={style.cardBg}
                         ref={cardBg}
                         style={{backgroundImage: `url(${image})`}}/>
                    <div className={style.cardInfo}>
                        <a href={url}>
                            <h3 className={style.cardTitle}>
                                {title}
                            </h3>
                        </a>
                        <p>{description}</p>
                        <h6>{status}</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};


//types
type PropsType = {
    size: number
    image: string
    title: string
    description: string
    status: string
    url: string
};