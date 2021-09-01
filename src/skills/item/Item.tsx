import style from "./Item.module.scss";
import React, {ReactComponentElement} from "react";
import VisibilitySensor from "react-visibility-sensor";
import CountUp from "react-countup";

export const Item = (props: ItemPropsType) => {
    return (
        <VisibilitySensor partialVisibility={true} offset={{top: 0}}>
            {({isVisible}) => (
                <div style={{height: 100}}>
                    {isVisible ?
                        <div className={style.item}>
                            <div className={style.label}>
                                {props.icon}
                            </div>
                            <div className={style.coins}>
                                <span>
                                    <CountUp end={props.value} duration={2}/>
                                </span>
                                <span className={style.symbol}>+</span>
                            </div>
                            <div className={style.subscribe}>{props.subscribe}</div>
                        </div>
                        : <div>j</div>}
                </div>
            )}
        </VisibilitySensor>
    )
}
type ItemPropsType = {
    subscribe: string
    icon: ReactComponentElement<any>
    value: number
}
