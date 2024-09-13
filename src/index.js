import _ from 'lodash';
import { createTag, createMultiTags, createHeader, createFooter } from './modules/functions.js';
import './home.css';
import { createContactContent } from './contact.js';
import { createTeamContent } from './team.js';
"use strict";

// Drink class home
class Drink {
  constructor(name, price, type) {
    this.name = name;
    this.price = price;
    this.type = type;
  }

  getType() {
    return this.type;
  }

  getName() {
    return this.name;
  }

  getPrice() {
    return this.price;
  }
}

// Order Factory Function home
const Order = () => {
  const cart = [];

  const addToCart = (drink) => {
    let quantity = 1;

    if (cart.length > 0) {
      cart.forEach((item) => {
        if (item.drink.getName() === drink.getName()) {
          item.quantity++;
          quantity++;
        }
      });
    }
    if (quantity == 1) {
      cart.push({ drink, quantity });
    }
    updateCart();
  };

  const updateCart = () => {
    const parent = document.getElementById("cart_section");
    parent.innerHTML = "";

    cart.forEach((cart_item) => {
      const itemCard = createTag(parent, "div", null, "cart_item");
      createTag(
        itemCard,
        "p",
        null,
        "cart_item_name",
        cart_item.drink.getName()
      );
      createTag(
        itemCard,
        "p",
        null,
        "cart_item_price",
        "€ " + (cart_item.drink.getPrice() * cart_item.quantity).toFixed(2)
      );
      createTag(itemCard, "p", null, "cart_item_num", cart_item.quantity + "x");
      const dec_button = createTag(
        itemCard,
        "button",
        null,
        "decrease_num",
        "-"
      );

      // add EventListener to dec_button > call function removeItem()
      // when clicked and give an argument to the function home
      dec_button.addEventListener("click", () => {
        removeItem(cart_item);
      });
    });
  };

  const removeItem = (cart_item) => {
    cart_item.quantity--;
    if (cart_item.quantity === 0) {
      const index = cart.indexOf(cart_item);
      if (index > -1) {
        cart.splice(index, 1);
      }
    }
    updateCart();
  };

  return {
    addToCart,
  };
};

// create card home
function createCard(parent_section, drink, order) {
  const card = createTag(parent_section, "div", null, "card");
  createTag(card, "h3", null, "drink_name", drink.getName());
  createTag(card, "p", null, "drink_price", `€ ${drink.getPrice().toFixed(2)}`);
  const button = createTag(card, "button", null, "add_button", "Add");

  button.addEventListener("click", () => {
    order.addToCart(drink);
  });
}

// create menu home
function createMenu(menulist) {
  const order = Order();
  const menu_section = createTag(null, "section", "menu_section");
  const menu_coffee = createTag(
    menu_section,
    "div",
    "menu_coffee",
    "menu_sub_section"
  );
  const menu_coffee_special = createTag(
    menu_section,
    "div",
    "menu_coffee_special",
    "menu_sub_section"
  );

  createTag(menu_coffee, "h2", null, "coffee_heading", "Classics");
  createTag(
    menu_coffee_special,
    "h2",
    null,
    "coffee_s_heading",
    "Coffee Specials"
  );

  menulist.forEach((drink) => {
    if (drink.getType() === "coffee") {
      createCard(menu_coffee, drink, order);
    } else if (drink.getType() === "coffee_special") {
      createCard(menu_coffee_special, drink, order);
    }
  });
}

// create order home
function createOrder() {
  const order_section = createTag(null, "section", "order_section", "order");
  createTag(order_section, "h2", null, "order_heading", "Your Order");
  createTag(order_section, "div", "cart_section");
}


// main function
function init(contentDiv) {
  //add images home
  //const contentDiv = document.getElementById("content");
  createTag(contentDiv, "div", null, "coffee1", null, "coffee1.webp");
  createTag(contentDiv, "div", null, "coffee2", null, "coffee2.webp");
  const espresso = new Drink("Espresso", 2.80, "coffee");
  const cappuccino = new Drink("Cappuccino", 3.20, "coffee");
  const braunk = new Drink("Kleiner Brauner", 3.20, "coffee");
  const braung = new Drink("Großer Brauner", 3.40, "coffee");
  const melange = new Drink("Melange", 3.40, "coffee");
  const latte = new Drink("Latte", 3.80, "coffee");
  const bullet = new Drink("Bullet Coffee", 4.20, "coffee_special");
  const mocca = new Drink("Mocca Froffee", 4.20, "coffee_special");
  const eiskaffee = new Drink("Eiskaffee", 4.20, "coffee_special");
  const almkaffee = new Drink("Almkaffee", 4.50, "coffee_special");


  const menulist = [espresso, cappuccino, braunk, braung, melange, latte, bullet, mocca, eiskaffee, almkaffee];

 // createHeader();
  createMenu(menulist);
  createOrder();
 // createFooter();
}
function loadModule(moduleName) {
  const contentDiv = document.getElementById("content");

  contentDiv.innerHTML = '';

  createHeader();
  switch (moduleName) {
    case 'home':
      init(contentDiv);
      console.log("home");

    break; 
    case 'contact':
      createContactContent(contentDiv);
      console.log("contact");
      break;
    case 'team':
      createTeamContent(contentDiv);
      console.log("team");
      break;
    default:
      console.error('Unrecognized module:', moduleName);
  }
  createFooter();
}

loadModule('home');

export{loadModule};