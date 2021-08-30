export function Footer() {
    return (
        <div class="bottom-bar">
            <div class="not-ready">
                Selecione os 3 itens para fechar o pedido
            </div>
            <div class="ready hidden" onclick="toggleCheckout()">
                Finalizar Pedido
            </div>
        </div>
    );
}