/*
  Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações.
  Dependa de abstrações, não de implementações.
  Abstrações não devem depender de detalhes. Detalhes devem depender de abstrações.

  Classes de baixo nível são classes que executam tarefas (os detalhes)
  Classes de alto nível são classes que gerenciam as classes de baixo nível.
*/

import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { NoDiscount } from './classes/discount';
import { EnterpriseCustomer } from './classes/customer';

// const fiftyPercentDiscount = new FiftyPercentDiscount();
// const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const cart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
// const individualCustomer = new IndividualCustomer(
//   'Robson',
//   'Soares',
//   '111.111.111-11',
// );
const enterpriseCustomer = new EnterpriseCustomer(
  'Empresa S/A',
  '222.222.222/85',
);

const order = new Order(cart, messaging, persistency, enterpriseCustomer);

cart.addItem(new Product('Camiseta', 20.99));
cart.addItem(new Product('Lápis', 1.99));
cart.addItem(new Product('Relógio', 49.99));

console.log(cart.items);
console.log(cart.total());
console.log(cart.totalWithDiscount());
order.checkout();
console.log(order.orderStatus);
