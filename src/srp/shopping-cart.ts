type CartItem = {
  name: string;
  price: number;
};

type OrderStatus = 'open' | 'closed';

export class ShoppingCart {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'open';

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  total(): number {
    return +this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Seu carrinho está vazio');
      return;
    }

    this._orderStatus = 'closed';
    this.sendMessage(`Seu pedido com total de ${this.total()} foi recebido.`);
    this.saveOrder();
    this.clear();
  }

  sendMessage(msg: string): void {
    console.log('Mensagem enviada:', msg);
  }

  saveOrder(): void {
    console.log('Pedido salvo com sucesso!');
  }

  clear(): void {
    console.log('Carrinho de compras foi limpo!');
    this._items.length = 0;
  }
}

const cart = new ShoppingCart();
cart.addItem({ name: 'Camiseta', price: 20.99 });
cart.addItem({ name: 'Caderno', price: 9.99 });
cart.addItem({ name: 'Caneca', price: 3.5 });
cart.addItem({ name: 'Relógio', price: 49.99 });
cart.addItem({ name: 'Lápis', price: 0.9 });

console.log(cart.items);
console.log(cart.total());
cart.checkout();
console.log(cart.orderStatus);
