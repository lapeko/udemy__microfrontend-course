import { faker } from '@faker-js/faker';

const $products = document.getElementById("products-html");

const products = new Array(5)
    .fill("")
    .map(_ => faker.person.fullName())
    .map(name => `<div>${name}</div>`)
    .join("")

$products!.innerHTML = products;