import { useState } from "react";
import { Checkout } from "./Checkout";

export function FinishOrder(props) {
    const {
        classStyle,
        text,
        ready
    } = props.state;
    
    const [checkoutState, SetCheckoutState] = useState(false);

    return (
        <div className="bottom-bar">
            {ready ? <div className={classStyle} onClick={() => SetCheckoutState(true)} >{text}</div> :
                     <div className={classStyle} >{text}</div>}
            {checkoutState ? <Checkout order={props.order} SetCheckoutState={SetCheckoutState}/> : ""}
        </div>
    );
}