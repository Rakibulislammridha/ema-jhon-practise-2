import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
  const loadedProducts = await fetch("products.json");
  const products = await loadedProducts.json();

  // if cart data is in data base, you have must use async await
  const storedCart = getShoppingCart();
  const savedCart = [];

  console.log(storedCart);
  for (const id in storedCart) {
    const addedProduct = products.find((pd) => pd.id === id);
    if (addedProduct) {
      const quantity = storedCart[id];
      addedProduct.quantity = quantity;
      savedCart.push(addedProduct);
    }
  }

  //    if you need to send 2 thing
  // 1. ==> [products, savedCart]
  // 2. ==> {products, savedCart} or {products, cart: savedCart}

  return savedCart;
};

export default cartProductsLoader;
