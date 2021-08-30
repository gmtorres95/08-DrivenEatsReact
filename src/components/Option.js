import React, {useState} from "react";

export function Option(props) {
    const {
        img,
        name,
        description,
        price,
        amount
    } = props.option;

    const [number, setNumber] = useState(amount);
    let classes = "";

    if(number > 0) classes = "option selected";
    else classes = "option";

    return (
        <div className={classes}>
            <div>
                <img src={img} alt={name} onClick={() => setNumber(number + 1)} />
                <h3>{name}</h3>
                <p className="description">{description}</p>
            </div>
            <div className="option-footer">
                <p>R$ {price.toFixed(2).replace(".",",")}</p>
                <Amount
                    number={number}
                    addNumber={() => setNumber(number + 1)}
                    removeNumber={() => (number > 0) ? setNumber(number - 1) : setNumber(0)}
                />
            </div>
        </div>
    );
}

function Amount(props) {
    const {
        number,
        addNumber,
        removeNumber
    } = props;

    if(number > 0){
        return (
                <div>
                    <span className="remove" onClick={removeNumber}> - </span>
                    <span> {number} </span>
                    <span className="add" onClick={addNumber}> + </span>
                </div>
        );
    }
    return "";
}