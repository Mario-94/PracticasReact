import { products as initialProducts } from "./moks/products.json";
import { IS_DEVELOPMENT } from "./config.js";
import { Products } from "./componets/Products/Products";
import Header from "./componets/headers/Header";
import { Footer } from "./componets/Footer/Footer";
import { Cart } from "./componets/Cart/Cart.jsx";
import { CartProvider } from "./context/cart.jsx";
import { useFilters } from "./hooks/useFilters.js";

function CartExample() {
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(initialProducts);

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </CartProvider>
  );
}

export default CartExample;
