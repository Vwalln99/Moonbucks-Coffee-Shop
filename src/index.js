import _ from 'lodash';
import { createTag, createHeader, createFooter } from './modules/functions.js';
import { createContactContent } from './contact.js';
import {createCustomizableItem, showIngredientsList, updateSelectedIngredients} from './order.js';
import {createHomeContent} from './home.js';
import './styles.css';
"use strict";

//Konstruktor für Items
class Item {
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

// extendet die Klasse Item, ist für die Zutaten
class CustomizableItem extends Item {
  constructor(name, price, type) {
    super(name, price, type);
    this.selectedIngredients = [];
  }

  addIngredient(ingredient) {
    this.selectedIngredients.push(ingredient);
  }

  removeIngredient(ingredient) {
    const index = this.selectedIngredients.indexOf(ingredient);
    if (index !== -1) {
      this.selectedIngredients.splice(index, 1);
    }
  }

  getSelectedIngredients() {
    return this.selectedIngredients;
  }
}


function loadModule(moduleName) {
  const contentDiv = document.getElementById("content");

  contentDiv.innerHTML = '';

  createHeader();
  switch (moduleName) {
    case 'home':
      createHomeContent(contentDiv);
      console.log("home");
      break;
    case 'contact':
      createContactContent(contentDiv);
      console.log("contact");
      break;
    case 'order':
      createOrderPage(contentDiv);
      console.log("order");
      break;
    default:
      console.error('Unrecognized module:', moduleName);
  }
  createFooter();
}
function createOrderPage(contentDiv) {
  const orderHeader = createTag(contentDiv, "h2", null, null, null);
  const saladItem = new CustomizableItem("Salat", 8.99, "Salat");
  const orderHeaderPizza = createTag(contentDiv, "h2", null, null, null);
  const pizzaItem = new CustomizableItem("Pizza", 10.99, "Pizza");
  const orderHeaderPasta = createTag(contentDiv, "h2", null, null, null);
  const pastaItem = new CustomizableItem("Pasta", 9.99, "Pasta");
  const orderHeaderDrink = createTag(contentDiv, "h2", null, null, null);
  const drinkItem = new CustomizableItem("Getränke", 2.99, "Getränke");

  createCustomizableItem(contentDiv, saladItem);
  createCustomizableItem(contentDiv, pizzaItem);
  createCustomizableItem(contentDiv, pastaItem);
  createCustomizableItem(contentDiv, drinkItem);
}

loadModule('home');

export { loadModule };