const btn = document.querySelectorAll('[data-action="ADD_TO_CART"]');
const productContainer = document.querySelector(".product");
const counterBasket = document.querySelectorAll(".counter-basket");
const btnInModal = document.querySelectorAll(
  '[data-action="ADD_TO_CART_IN_MODAL"]'
);
const fadeMessage = document.querySelector(".fade");

let sum = 0;

let productsInCart = JSON.parse(localStorage.getItem("products")) || [];

productsInCart.forEach((obj) => {
  sum += obj.inCart;
});

counterBasket.forEach((element) => {
  element.innerHTML = `${sum}`;
});

btn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const productDOM = btn.parentNode.parentNode;
    product = {
      id: productDOM.querySelector(".product-id").innerText,
      image: productDOM.querySelector(".image").src,
      name: productDOM.querySelector(".product-name").innerText,
      price: parseInt(productDOM.querySelector(".product-price").innerText),
      inCart: 1,
      totalPriceItem: parseInt(
        productDOM.querySelector(".product-price").innerText
      ),
    };
    productsInCart.push(product);

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
    localStorage.setItem("products", JSON.stringify(productsInCart));
    productsInCart = JSON.parse(localStorage.getItem("products"));

    sum = 0;

    productsInCart.forEach((obj) => {
      sum += obj.inCart;
    });

    counterBasket.forEach((element) => {
      element.innerHTML = `${sum}`;
    });

    setTimeout(function () {
      // start a delay

      fadeMessage.style.opacity = 1; // set opacity for the element to 1
      let timerId = setInterval(function () {
        // start interval loop
        let opacity = fadeMessage.style.opacity; // get current opacity
        if (opacity == 0) {
          // check if its 0 yet
          clearInterval(timerId); // if so, exit from interval loop
        } else {
          fadeMessage.style.opacity = opacity - 0.05; // else remove 0.05 from opacity
        }
      }, 100); // run every 0.1 second
    }, 500); // wait to run after 5 seconds
  });
});

//**********************************************************/

btnInModal.forEach((btnInModal) => {
  btnInModal.addEventListener("click", (e) => {
    const productModalDOM =
      btnInModal.parentNode.parentNode.parentNode.parentNode;
    console.log(productModalDOM);

    product = {
      id: productModalDOM.querySelector(".product-id").innerText,
      image: productModalDOM.querySelector(".image").src,
      name: productModalDOM.querySelector(".product-name").innerText,
      price: parseInt(
        productModalDOM.querySelector(".product-price").innerText
      ),
      inCart: 1,
      totalPriceItem: parseInt(
        productModalDOM.querySelector(".product-price").innerText
      ),
    };
    productsInCart.push(product);

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
    localStorage.setItem("products", JSON.stringify(productsInCart));
    productsInCart = JSON.parse(localStorage.getItem("products"));

    sum = 0;

    productsInCart.forEach((obj) => {
      sum += obj.inCart;
    });

    counterBasket.forEach((element) => {
      element.innerHTML = `${sum}`;
    });

    setTimeout(function () {
      // start a delay
      fadeMessage.style.opacity = 1; // set opacity for the element to 1
      let timerId = setInterval(function () {
        // start interval loop
        let opacity = fadeMessage.style.opacity; // get current opacity
        if (opacity == 0) {
          // check if its 0 yet
          clearInterval(timerId); // if so, exit from interval loop
        } else {
          fadeMessage.style.opacity = opacity - 0.05; // else remove 0.05 from opacity
        }
      }, 100); // run every 0.1 second
    }, 500); // wait to run after 5 seconds
  });
});
