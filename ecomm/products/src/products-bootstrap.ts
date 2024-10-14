import { faker } from '@faker-js/faker';

export const mount = (el: HTMLElement) => {
    el.innerHTML = products;
}

const products = new Array(5)
    .fill("")
    .map(_ => faker.person.fullName())
    .map(name => `<div>${name}</div>`)
    .join("")

if (process.env.NODE_ENV === "development") {
    const $products = document.getElementById("products-html");
    $products && mount($products)
}