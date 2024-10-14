import { faker } from "@faker-js/faker";


export const mount = (el: HTMLElement) => {
    el.innerHTML = int.toString();
};

const int = faker.number.int();

if (process.env.NODE_ENV === "development") {
    const $cart = document.getElementById("card-app")
    $cart && mount($cart);
}
