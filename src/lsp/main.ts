/*
  Liskov Substitution Principle - Se φ(x) é uma propriedade demonstrável dos objetos x de tipo T. Então φ(y) deve ser verdadeiro para objetos y de tipo S onde S é um subtipo de T.

  Mais simples: Subtipos precisam ser substituíveis por seus tipos de base.

  Mais simples ainda: Se meu programa espera um Animal, algo do tipo Cachorro (que herda de Animal) deve servir como qualquer outro Animal.
*/

import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { NoDiscount } from './classes/discount';

// const fiftyPercentDiscount = new FiftyPercentDiscount();
// const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const cart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(cart, messaging, persistency);

cart.addItem(new Product('Camiseta', 20.99));
cart.addItem(new Product('Lápis', 1.99));
cart.addItem(new Product('Relógio', 49.99));

console.log(cart.items);
console.log(cart.total());
console.log(cart.totalWithDiscount());
order.checkout();
console.log(order.orderStatus);
