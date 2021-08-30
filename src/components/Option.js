export function Option() {
    return (
        <div class="option" onclick="addNewItem(this,'dish')">
            <div>
                <img src="/media/pratos/strogonoff.jpeg" alt="Strogonoff de Frango" />
                <h3>Strogonoff de frango</h3>
                <p class="description">Arroz, strogonoff de frango e batata palha.</p>
            </div>
            <p class="price">R$ 13,90</p>
            <ion-icon name="checkmark-circle" class="hidden"></ion-icon>
        </div>
    );
}