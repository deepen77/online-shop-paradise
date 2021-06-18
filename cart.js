const cart = document.querySelector(".products");
const counterBasket = document.querySelectorAll(".counter-basket");
// const totalPriceCart = document.querySelector(".totalPriceCart");

let productsInCart = JSON.parse(localStorage.getItem("products"));
let sum = 0;
let totalPrice = 0;

if (localStorage.hasOwnProperty("products") && productsInCart.length > 0) {
  getFromStorage();
}

function getFromStorage() {
  productsInCart = JSON.parse(localStorage.getItem("products"));
  productsInCart.forEach(
    ({ id, image, name, price, inCart, totalPriceItem }) => {
      cart.innerHTML += `
    <div class="product-cart">
      <div class="id-inCart">${id}</div>
      <i class="fas fa-trash-alt"></i>
      <img class="image-inCart" src="${image}"/>
      <span class="name-inCart">${name}</span>
    </div>
      <div class="sm-hide">$<span class="price-cart">${price}</span></div>
      <div class="quantity">
          <i class="decrease fas fa-minus-square"></i>
          <span class="in_cart">${inCart}</span>
          <i class="increase fas fa-plus-square"></i>   
      </div>
          <div class="total">$<span class="total-inCart">${totalPriceItem}</span></div>
            `;
    }
  );

  cart.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">Total value</h4>
                <h4 class="totalPriceCart">$</h4>    
            </div>
            <div class="buttons">
            <button class="clear">Clear Cart</button>
            <button class="proceed">Proceed To Checkout</button>
            </div>
            <div class="cart-continue_shopping"><a href="./products.html">Continue Shopping</a></div>
            `;
}

if (localStorage.hasOwnProperty("products") && productsInCart.length > 0) {
  productsInCart.forEach((obj) => {
    sum += obj.inCart;
  });

  productsInCart.forEach((objt) => {
    totalPrice += objt.totalPriceItem;
  });

  counterBasket.forEach((element) => {
    element.innerHTML = `${sum}`;
  });

  const totalPriceCart = document.querySelector(".totalPriceCart");

  totalPriceCart.innerHTML = `
<span>$</span><span>${totalPrice}</span>
`;

  const inn = document.querySelector(".in_cart");

  let btnsIncrement = document.querySelectorAll(".fa-plus-square");
  let btnsDecrement = document.querySelectorAll(".fa-minus-square");
  let btnsRemoveItem = document.querySelectorAll(".fa-trash-alt");

  for (let btn of btnsIncrement) {
    btn.addEventListener("click", (e) => {
      productsInCart = JSON.parse(localStorage.getItem("products"));

      product = {
        id: e.target.parentElement.previousElementSibling.previousElementSibling
          .firstElementChild.textContent,
        image:
          e.target.parentElement.previousElementSibling.nextElementSibling
            .previousElementSibling.previousElementSibling.lastElementChild
            .previousElementSibling.src,
        name: e.target.parentElement.previousElementSibling
          .previousElementSibling.lastElementChild.textContent,
        price: parseInt(
          e.target.parentElement.previousElementSibling.lastChild.textContent
        ),
        inCart: 1,
        totalPriceItem: parseInt(
          e.target.parentElement.previousElementSibling.lastChild.textContent
        ),
      };

      productsInCart.push(product);

      groupItem();

      localStorage.setItem("products", JSON.stringify(productsInCart));
      productsInCart = JSON.parse(localStorage.getItem("products"));

      e.target.previousElementSibling.innerHTML =
        parseInt(e.target.previousElementSibling.textContent) + 1;

      e.target.parentElement.nextElementSibling.lastElementChild.innerHTML =
        parseInt(e.target.previousElementSibling.textContent) *
        parseInt(
          e.target.parentElement.previousElementSibling.lastChild.textContent
        );

      sum++;

      counterBasket.forEach((element) => {
        element.innerHTML = `${sum}`;
      });

      totalPrice =
        parseInt(
          e.target.parentElement.previousElementSibling.lastChild.textContent
        ) + totalPrice;

      totalPriceCart.innerHTML = `
<span>$</span><span>${totalPrice}</span>
`;
    });
  }

  for (let btn of btnsDecrement) {
    btn.addEventListener("click", (e) => {
      productsInCart = JSON.parse(localStorage.getItem("products"));

      product = {
        id: e.target.parentElement.previousElementSibling.previousElementSibling
          .firstElementChild.textContent,
        image:
          e.target.parentElement.previousElementSibling.nextElementSibling
            .previousElementSibling.previousElementSibling.lastElementChild
            .previousElementSibling.src,
        name: e.target.parentElement.previousElementSibling
          .previousElementSibling.lastElementChild.textContent,
        price: parseInt(
          e.target.parentElement.previousElementSibling.lastChild.textContent
        ),
        inCart: -1,
        totalPriceItem:
          -1 *
          parseInt(
            e.target.parentElement.previousElementSibling.lastChild.textContent
          ),
      };

      if (parseInt(e.target.nextElementSibling.innerHTML) > 1) {
        productsInCart.push(product);
      }

      groupItem();

      localStorage.setItem("products", JSON.stringify(productsInCart));
      productsInCart = JSON.parse(localStorage.getItem("products"));

      if (parseInt(e.target.nextElementSibling.innerHTML) > 1) {
        e.target.nextElementSibling.innerHTML =
          parseInt(e.target.nextElementSibling.innerHTML) - 1;

        e.target.parentElement.nextElementSibling.lastElementChild.innerHTML =
          parseInt(e.target.nextElementSibling.innerHTML) *
          parseInt(
            e.target.parentElement.previousElementSibling.lastChild.textContent
          );

        sum = sum - 1;

        counterBasket.forEach((element) => {
          element.innerHTML = `${sum}`;
        });

        totalPrice =
          totalPrice -
          parseInt(
            e.target.parentElement.previousElementSibling.lastChild.textContent
          );

        totalPriceCart.innerHTML = `
<span>$</span><span>${totalPrice}</span>
`;
      }
    });
  }

  for (let btn of btnsRemoveItem) {
    btn.addEventListener("click", (e) => {
      productsInCart = JSON.parse(localStorage.getItem("products"));

      for (let i = 0; i < productsInCart.length; i++) {
        if (productsInCart[i].id === btn.previousElementSibling.textContent) {
          productsInCart.splice(i, 1);
          localStorage.setItem("products", JSON.stringify(productsInCart));
          location.reload();
        }
      }
    });
  }

  function groupItem() {
    (keys = ["inCart", "totalPriceItem"]),
      (productsInCart = Object.values(
        productsInCart.reduce((result, object) => {
          result[(object.id, object.image, object.name, object.price)] = result[
            (object.id, object.image, object.name, object.price)
          ] || {
            id: object.id,
            image: object.image,
            name: object.name,
            price: object.price,
          };

          keys.forEach(
            (key) =>
              (result[(object.id, object.image, object.name, object.price)][
                key
              ] =
                (result[(object.id, object.image, object.name, object.price)][
                  key
                ] || 0) + object[key])
          );
          return result;
        }, Object.create(null))
      ));
  }

  const clearCartLS = document.querySelector(".clear");

  function clearCart() {
    localStorage.clear();
    location.reload();
  }

  clearCartLS.addEventListener("click", clearCart);
} else {
  cart.innerHTML = `
  <div class="cart-empty_cart">Cart is empty</div>
  <div class="cart-continue_shopping"><a href="./products.html">Continue Shopping</a></div>
  `;
}
