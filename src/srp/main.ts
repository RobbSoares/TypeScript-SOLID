import { Messaging } from './services/messaging';
import { Order } from './entities/order';
import { Persistency } from './services/persistency';
import { Product } from './entities/product';
import { ShoppingCart } from './entities/shopping-cart';

const cart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(cart, messaging, persistency);

cart.addItem(new Product('Camiseta', 20.99));
cart.addItem(new Product('Lápis', 1.99));
cart.addItem(new Product('Relógio', 49.99));

console.log(cart.items);
console.log(cart.total());
order.checkout();
console.log(order.orderStatus);
