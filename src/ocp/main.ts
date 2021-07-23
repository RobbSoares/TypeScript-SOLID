/*
  Open/closed principle
  Entidades devem estar abertas para extensão, mas fechadas para modificação.
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
