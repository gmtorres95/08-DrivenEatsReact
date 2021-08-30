export function FinishOrder() {
    return (
        <div className="bottom-bar">
            <div className="not-ready">
                Selecione os 3 itens para fechar o pedido
            </div>
            <div className="ready hidden">
                Finalizar Pedido
            </div>
        </div>
    );
}