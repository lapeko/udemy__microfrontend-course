import { faker } from "@faker-js/faker";

const int = faker.number.int();
document.getElementById("card-html").innerHTML = int.toString();
