import { apiConect } from "./apiConect.js";

const form = document.querySelector('.product__insertion__form')

async function createProduct(event) {
  event.preventDefault()
  const image = document.querySelector('#form__img').value
  const productName = document.querySelector('#form__name').value
  const price = document.querySelector('#form__price').value
  const priceUSD = Number(price).toLocaleString("en-US", {style:"currency", currency:"USD"})
  try{
  await apiConect.createProduct(image, productName, priceUSD)
  } catch(e) {
    alert(e)
  }
}

form.addEventListener('submit', event => createProduct(event))