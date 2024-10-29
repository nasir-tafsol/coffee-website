import productOne from "../assets/product/productOne.png";
import productTwo from "../assets/product/productTwo.png";
import productThree from "../assets/product/productThree.png";
import productFour from "../assets/product/productFour.png";
import productFive from "../assets/product/productFive.png";
import productSix from "../assets/product/productSix.png";
import productSeven from "../assets/product/productSeven.png";
import productEigth from "../assets/product/productEigth.png";
import productNine from "../assets/product/productNine.png";
import productTen from "../assets/product/productTen.png";
import productEleven from "../assets/product/productEleven.png";
import productTwelve from "../assets/product/productTwelve.png";
import { nanoid } from "nanoid";

const listItem = [
  {
    id: nanoid(),
    image: productOne,
    title: "Expresso Tradicional",
    slug: "expresso-tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    badge: ["Tradicional"],
    price: "250",
    quantity: 0,
  },
  {
    id: nanoid(),
    image: productTwo,
    title: "Expresso Americano",
    slug: "expresso-americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    badge: ["Tradicional"],
    price: "280",
    quantity: 0,
  },
  {
    id: nanoid(),
    image: productThree,
    title: "Expresso Cremoso",
    slug: "expresso-cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    badge: ["Tradicional"],
    price: "300",
    quantity: 0,
  },
  {
    id: nanoid(),
    image: productFour,
    title: "Expresso Tradicionals",
    slug: "expresso-tradicionals-four",
    description: "O tradicional café feito com água quente e grãos moídos",
    badge: ["Tradicional", "gelado"],
    price: "400",
    quantity: 0,
  },
  {
    id: nanoid(),
    image: productFive,
    title: "Café com Leite",
    slug: "cafe-com-leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    badge: ["Tradicional", "com leite"],
    price: "500",
    quantity: 0,
  },
  {
    id: nanoid(),
    image: productSix,
    title: "Latte",
    slug: "latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    badge: ["Tradicional", "com leite"],
    price: "600",
    quantity: 0,
  },
  {
    id: nanoid(),
    image: productSeven,
    title: "Capuccino",
    slug: "capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    badge: ["Tradicional", "com leite"],
    price: "700",
    quantity: 0,
  },
  {
    id: nanoid(),
    image: productEigth,
    title: "Macchiato",
    slug: "macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    badge: ["Tradicional", "com leite"],
    price: "800",
    quantity: 0,
  },
  {
    id: nanoid(),
    image: productNine,
    title: "Mocaccino",
    slug: "mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    badge: ["Tradicional", "com leite"],

    price: "300",
    quantity: 0,
  },
  {
    id: nanoid(),
    image: productTen,
    title: "Chocolate Quente",
    slug: "chocolate-quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    badge: ["Tradicional", "com leite"],

    price: "1200",
    quantity: 0,
  },
  {
    id: nanoid(),
    image: productEleven,
    title: "Cubano",
    slug: "cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    badge: ["especial", "alcoólico", "gelado"],
    price: "200",
    quantity: 0,
  },
  {
    id: nanoid(),
    image: productTwelve,
    title: "Havaiano",
    slug: "havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    badge: ["especial"],
    price: "300",
    quantity: 0,
  },
];

export default listItem;
