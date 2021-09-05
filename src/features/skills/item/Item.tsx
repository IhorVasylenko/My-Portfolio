import style from "./Item.module.scss";
import React, {ReactComponentElement} from "react";
import VisibilitySensor from "react-visibility-sensor";
import CountUp from "react-countup";


export const Item: React.FC<ItemPropsType> = (props) => {

    const {
        icon,
        value,
        subscribe,
    } = props;

    return (
        <VisibilitySensor partialVisibility={true} offset={{top: 0}}>
            {({isVisible}) => (
                <div style={{height: 100}}>
                    {isVisible ?
                        <div className={style.item}>
                            <div className={style.label}>
                                {icon}
                            </div>
                            <div className={style.coins}>
                                <span>
                                    <CountUp end={value} duration={2}/>
                                </span>
                                <span className={style.symbol}>+</span>
                            </div>
                            <div className={style.subscribe}>{subscribe}</div>
                        </div>
                        : <div style={{width: '200px', height: '100px'}}>j</div>}
                </div>
            )}
        </VisibilitySensor>
    );
};


//types
type ItemPropsType = {
    subscribe: string
    icon: ReactComponentElement<any>
    value: number
};
