import { CheckoutItem } from "./CheckoutItem";

function sendToWhatsapp(whatsAppURL) {
    window.open(whatsAppURL);
}

function convertToWhatsApp(order) {
    let text = "Olá, gostaria de fazer o pedido:";
    for(let i = 0; i < order.length; i++) {
        text += `\n- ${order[i].type}: ${order[i].name}`
    }
    text += `\nTotal: R$ ${showTotal(order).toFixed(2)}`
    return encodeURIComponent(text);
}

function showTotal(order) {
    let total = 0;
    order.forEach((item) => total += item.price);
    return total;
}

export function Checkout(props) {
    const {
        order,
        SetCheckoutState
    } = props;
    let whatsAppURL = "https://wa.me/5532988352666?text=" + convertToWhatsApp(order);

    return (
        <div className="checkout-window">
            <div className="checkout-box">
                <span className="confirmation-top">Confirme seu pedido</span>
                <div className="items">
                    {order.map((item) => <CheckoutItem name={item.name} price={item.price}/>)}
                </div>
                <div className="total">
                    <span>TOTAL</span>
                    <span>R$ {showTotal(order).toFixed(2).replace(".",",")}</span>
                </div>
                <div>
                    <div className="confirmation" onClick={() => sendToWhatsapp(whatsAppURL)}>
                        <span>Tudo certo, pode pedir!</span>
                    </div>
                    <div className="cancel" onClick={() => SetCheckoutState(false)}>
                        <span>Cancelar</span>
                    </div>
                </div>
            </div>
        </div>
    );
}