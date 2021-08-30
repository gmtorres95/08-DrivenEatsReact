import { useState } from "react";
import { Category } from "./Category";
import { FinishOrder } from "./FinishOrder";
import { Header } from "./Header";

function updateOrder(menu) {
    const order = [];
    for(let i = 0; i < menu.length; i++) {
        for(let j = 0; j < menu[i].options.length; j++) {
            if(menu[i].options[j].amount > 0) {
                order.push({
                    name: `${menu[i].options[j].amount}x ${menu[i].options[j].name }`,
                    price: menu[i].options[j].price * menu[i].options[j].amount
                });
            }
        }
    }
    return order;
}

function countAmount(listOfItens) {
    let counter = 0;
    listOfItens.forEach((iten) => counter += iten.amount)
    return counter;
}

function updateState(menu) {
    const dishesAmount = countAmount(menu[0].options);
    const drinksAmount = countAmount(menu[1].options);
    const dessertsAmount = countAmount(menu[2].options);
    if(dishesAmount && drinksAmount && dessertsAmount) return {classStyle: "ready", text: "Fechar Pedido"};
    return {classStyle: "not-ready", text: "Selecione os 3 itens para fechar o pedido"};
}

export default function App() {
    const [strogonoffAmount, SetStrogonoffAmount] = useState(0);
    const [parmegianaAmount, SetParmegianaAmount] = useState(0);
    const [milanesaAmount, SetMilanesaAmount] = useState(0);
    const [grelhadoAmount, SetGrelhadoAmount] = useState(0);
    const [liguiçaAmount, SetLiguiçaAmount] = useState(0);
    const [peixeAmount, SetPeixeAmount] = useState(0);
    const [cocaAmount, SetCocaAmount] = useState(0);
    const [kuatAmount, SetKuatAmount] = useState(0);
    const [spriteAmount, SetSpriteAmount] = useState(0);
    const [mateAmount, SetMateAmount] = useState(0);
    const [aguaAmount, SetAguaAmount] = useState(0);
    const [bombomAmount, SetBombomAmount] = useState(0);
    const [boloAmount, SetBoloAmount] = useState(0);
    const [brownieAmount, SetBrownieAmount] = useState(0);
    const [cookieAmount, SetCookieAmount] = useState(0);
    const [pipocoAmount, SetPipocoAmount] = useState(0);
    const [gelatinaAmount, SetGelatinaAmount] = useState(0);
    const menu = [
        {
            title: "Primeiro, seu prato",
            options: [
                {
                    img: "/media/pratos/strogonoff.jpeg",
                    name: "Strogonoff de Frango",
                    description: "Arroz, strogonoff de frango e batata palha.",
                    price: 13.9,
                    amount: strogonoffAmount,
                    SetAmount: SetStrogonoffAmount
                },
                {
                    img: "/media/pratos/parmegiana.jpeg",
                    name: "Frango à Parmegiana",
                    description: "Arroz, fritas, frango à parmegiana e salada.",
                    price: 15.4,
                    amount: parmegianaAmount,
                    SetAmount: SetParmegianaAmount
                },
                {
                    img: "/media/pratos/milanesa.jpeg",
                    name: "Frango à Milanesa",
                    description: "Arroz, farofa, fritas e frango à milanesa.",
                    price: 15.9,
                    amount: milanesaAmount,
                    SetAmount: SetMilanesaAmount
                },
                {
                    img: "/media/pratos/grelhado.jpeg",
                    name: "Frango Grelhado",
                    description: "Arroz, feijão, farofa e frango grelhado.",
                    price: 14.9,
                    amount: grelhadoAmount,
                    SetAmount: SetGrelhadoAmount
                },
                {
                    img: "/media/pratos/liguiça.jpeg",
                    name: "Linguiça de Lombo",
                    description: "Arroz, feijão, farofa, linguiça de lombo acebolada e salada.",
                    price: 14.4,
                    amount: liguiçaAmount,
                    SetAmount: SetLiguiçaAmount
                },
                {
                    img: "/media/pratos/peixe.jpeg",
                    name: "Peixe à Milanesa",
                    description: "Arroz, fritas, filé de peixe à milanesa e salada.",
                    price: 19.9,
                    amount: peixeAmount,
                    SetAmount: SetPeixeAmount
                }
            ]
        },
        {
            title: "Agora, sua bebida",
            options: [
                {
                    img: "/media/bebidas/coca.jpeg",
                    name: "Coca-Cola",
                    description: "Lata de 350ml.",
                    price: 5,
                    amount: cocaAmount,
                    SetAmount: SetCocaAmount
                },
                {
                    img: "/media/bebidas/kuat.jpeg",
                    name: "Guaraná Kuat",
                    description: "Lata de 350ml.",
                    price: 4,
                    amount: kuatAmount,
                    SetAmount: SetKuatAmount
                },
                {
                    img: "/media/bebidas/sprite.jpeg",
                    name: "Sprite",
                    description: "Lata de 350ml.",
                    price: 4.5,
                    amount: spriteAmount,
                    SetAmount: SetSpriteAmount
                },
                {
                    img: "/media/bebidas/mate.jpeg",
                    name: "Chá Gelado Mate",
                    description: "Garaffa de 450ml sabor limão.",
                    price: 6,
                    amount: mateAmount,
                    SetAmount: SetMateAmount
                },
                {
                    img: "/media/bebidas/agua.jpeg",
                    name: "Água Mineral",
                    description: "Garaffa de 500ml sem gás.",
                    price: 1,
                    amount: aguaAmount,
                    SetAmount: SetAguaAmount
                }
            ]
        },
        {
            title: "Por fim, sua sobremesa",
            options: [
                {
                    img: "/media/sobremesas/bombom.jpeg",
                    name: "Bombom de Morango",
                    description: "Com brigadeiro cremoso e casquinha de chocolate!",
                    price: 3,
                    amount: bombomAmount,
                    SetAmount: SetBombomAmount
                },
                {
                    img: "/media/sobremesas/bolo.jpeg",
                    name: "Bolo de Brigadeiro de Caramelo",
                    description: "Nossa receita especial, recheado com Nutella.",
                    price: 9,
                    amount: boloAmount,
                    SetAmount: SetBoloAmount
                },
                {
                    img: "/media/sobremesas/brownie.jpeg",
                    name: "Brownie",
                    description: "Ideal para comer tomando um cafézinho.",
                    price: 8,
                    amount: brownieAmount,
                    SetAmount: SetBrownieAmount
                },
                {
                    img: "/media/sobremesas/cookie.jpeg",
                    name: "Cookie de Chocotone",
                    description: "Massa de laranja, com gotas de chocolate e recheado com Nutella!",
                    price: 6,
                    amount: cookieAmount,
                    SetAmount: SetCookieAmount
                },
                {
                    img: "/media/sobremesas/pipoco.jpeg",
                    name: "Pipoco",
                    description: "Nosso brigadeiro que estoura na boca! Recheado com leite condensado.",
                    price: 5,
                    amount: pipocoAmount,
                    SetAmount: SetPipocoAmount
                },
                {
                    img: "/media/sobremesas/gelatina.jpeg",
                    name: "Gelatina de Morango Recheada",
                    description: "Nossa famosa gelatina recheada de leite condensado.",
                    price: 2.5,
                    amount: gelatinaAmount,
                    SetAmount: SetGelatinaAmount
                }
            ]
        }
    ]
    let order = [];
    let state = {}

    state = updateState(menu);
    order = updateOrder(menu);

    console.log(order);

    return (
        <div>
            <Header />
            {menu.map((itens) => <Category itens={itens} />)}
            <FinishOrder state={state} />
            



            <div className="checkout-window hidden">
                <div className="checkout-box">
                    <span className="confirmation-top">Confirme seu pedido</span>
                    <div className="items">
                        <div className="dish">
                            <span className="dish-name"></span>
                            <span className="dish-price"></span>
                        </div>
                        <div className="drink">
                            <span className="drink-name"></span>
                            <span className="drink-price"></span>
                        </div>
                        <div className="dessert">
                            <span className="dessert-name"></span>
                            <span className="dessert-price"></span>
                        </div>
                        
                    </div>
                    <div className="total">
                        <span>TOTAL</span>
                        <span className="total-price"></span>
                    </div>
                    <div>
                        <div className="confirmation">
                            <span>Tudo certo, pode pedir!</span>
                        </div>
                        <div className="cancel">
                            <span>Cancelar</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}