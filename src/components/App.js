import { Category } from "./Category";
import { Footer } from "./Footer";
import { Header } from "./Header";

export default function App () {
    return (
        <div>
            <Header />
            <Footer />
            <Category />
            <div class="checkout-window hidden">
                <div class="checkout-box">
                    <span class="confirmation-top">Confirme seu pedido</span>
                    <div class="items">
                        <div class="dish">
                            <span class="dish-name"></span>
                            <span class="dish-price"></span>
                        </div>
                        <div class="drink">
                            <span class="drink-name"></span>
                            <span class="drink-price"></span>
                        </div>
                        <div class="dessert">
                            <span class="dessert-name"></span>
                            <span class="dessert-price"></span>
                        </div>
                        
                    </div>
                    <div class="total">
                        <span>TOTAL</span>
                        <span class="total-price"></span>
                    </div>
                    <div>
                        <div class="confirmation" onclick="confirmOrder()">
                            <span>Tudo certo, pode pedir!</span>
                        </div>
                        <div class="cancel" onclick="toggleCheckout()">
                            <span>Cancelar</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}