import React from "react";



export const ScrollDemo = () => {
    const elRef = React.createRef<HTMLInputElement>()
    const executeScroll = () => elRef.current?.scrollIntoView();

    return (
        <>
            <div ref={elRef}>I wanna be seen</div>
            <div style={{height: 1500}}/>
            <button onClick={executeScroll}>Click to scroll</button>
        </>
    );
}
