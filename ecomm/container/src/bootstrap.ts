// @ts-ignore
import {mount as productsMount} from "products-fm/products-bootstrap";
// @ts-ignore
import {mount as cartMount} from 'cart-fm/cart-bootstrap';

const $products = document.getElementById("products-app")
if ($products) productsMount($products)

const $cart = document.getElementById("cart-app")
if ($cart) cartMount($cart)
