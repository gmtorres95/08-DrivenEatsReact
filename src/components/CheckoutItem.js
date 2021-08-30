export function CheckoutItem(props) {
    const {
        name,
        price
    } = props;

    return (
        <div>
            <span>{name}</span>
            <span>{price.toFixed(2).replace(".",",")}</span>
        </div>
    );
}