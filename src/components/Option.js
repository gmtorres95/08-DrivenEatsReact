export function Option(props) {
    const {
        img,
        name,
        description,
        price,
        amount,
        SetAmount
    } = props.option;

    let classes = "option";
    if(amount > 0) classes = "option selected";
    
    return (
        <div className={classes}>
            <div>
                <img src={img} alt={name} onClick={() => SetAmount(amount + 1)}/>
                <h3>{name}</h3>
                <p className="description">{description}</p>
            </div>
            <div className="option-footer">
                <p>R$ {price.toFixed(2).replace(".",",")}</p>
                <Amount
                    number={amount}
                    addNumber={() => SetAmount(amount + 1)}
                    removeNumber={() => SetAmount(amount - 1)}
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