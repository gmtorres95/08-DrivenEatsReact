import { Category } from "./Category";
import { Footer } from "./Footer";
import { Header } from "./Header";

export default function App () {
    const dishes = [
        {
            img: "/media/pratos/strogonoff.jpeg",
            name: "Strogonoff de Frango",
            description: "Arroz, strogonoff de frango e batata palha.",
            price: 13.9,
            amount: 0
        },
        {
            img: "/media/pratos/parmegiana.jpeg",
            name: "Frango à Parmegiana",
            description: "Arroz, fritas, frango à parmegiana e salada.",
            price: 15.4,
            amount: 0
        },
        {
            img: "/media/pratos/milanesa.jpeg",
            name: "Frango à Milanesa",
            description: "Arroz, farofa, fritas e frango à milanesa.",
            price: 15.9,
            amount: 0
        },
        {
            img: "/media/pratos/grelhado.jpeg",
            name: "Frango Grelhado",
            description: "Arroz, feijão, farofa e frango grelhado.",
            price: 14.9,
            amount: 0
        },
        {
            img: "/media/pratos/liguiça.jpeg",
            name: "Linguiça de Lombo",
            description: "Arroz, feijão, farofa, linguiça de lombo acebolada e salada.",
            price: 14.4,
            amount: 0
        },
        {
            img: "/media/pratos/peixe.jpeg",
            name: "Peixe à Milanesa",
            description: "Arroz, fritas, filé de peixe à milanesa e salada.",
            price: 19.9,
            amount: 0
        }
    ];
    const drinks = [
        {
            img: "/media/bebidas/coca.jpeg",
            name: "Coca-Cola",
            description: "Lata de 350ml.",
            price: 5,
            amount: 0
        },
        {
            img: "/media/bebidas/kuat.jpeg",
            name: "Guaraná Kuat",
            description: "Lata de 350ml.",
            price: 4,
            amount: 0
        },
        {
            img: "/media/bebidas/sprite.jpeg",
            name: "Sprite",
            description: "Lata de 350ml.",
            price: 4.5,
            amount: 0
        },
        {
            img: "/media/bebidas/mate.jpeg",
            name: "Chá Gelado Mate",
            description: "Garaffa de 450ml sabor limão.",
            price: 6,
            amount: 0
        },
        {
            img: "/media/bebidas/agua.jpeg",
            name: "Água Mineral",
            description: "Garaffa de 500ml sem gás.",
            price: 1,
            amount: 0
        }
    ];
    const desserts = [
        {
            img: "/media/sobremesas/bombom.jpeg",
            name: "Bombom de Morango",
            description: "Com brigadeiro cremoso e casquinha de chocolate!",
            price: 3,
            amount: 0
        },
        {
            img: "/media/sobremesas/bolo.jpeg",
            name: "Bolo de Brigadeiro de Caramelo",
            description: "Nossa receita especial, recheado com Nutella.",
            price: 9,
            amount: 0
        },
        {
            img: "/media/sobremesas/brownie.jpeg",
            name: "Brownie",
            description: "Ideal para comer tomando um cafézinho.",
            price: 8,
            amount: 0
        },
        {
            img: "/media/sobremesas/cookie.jpeg",
            name: "Cookie de Chocotone",
            description: "Massa de laranja, com gotas de chocolate e recheado com Nutella!",
            price: 6,
            amount: 0
        },
        {
            img: "/media/sobremesas/pipoco.jpeg",
            name: "Pipoco",
            description: "Nosso brigadeiro que estoura na boca! Recheado com leite condensado.",
            price: 5,
            amount: 0
        },
        {
            img: "/media/sobremesas/gelatina.jpeg",
            name: "Gelatina de Morango Recheada",
            description: "Nossa famosa gelatina recheada de leite condensado.",
            price: 2.5,
            amount: 0
        }
    ];

    return (
        <div>
            <Header />
            <Category 
                options={dishes}
                title="Primeiro, seu prato"
            />
            <Category 
                options={drinks}
                title="Agora, sua bebida"
            />
            <Category 
                options={desserts}
                title="Por fim, sua sobremesa"
            />
            <Footer />



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