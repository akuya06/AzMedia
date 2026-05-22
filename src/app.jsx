import { useMemo, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import BottomNav from "./components/BottomNav.jsx";
import Home from "./pages/Home.jsx";
import ProductList from "./pages/ProductList.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";
import OrderHistory from "./pages/OrderHistory.jsx";
import OrderSuccess from "./pages/OrderSuccess.jsx";
import Contact from "./pages/Contact.jsx";
import { getProductById } from "./data/products.js";
import { loadJson, saveJson } from "./utils/storage.js";

function computeTotal(cartItems) {
  return cartItems.reduce((sum, item) => {
    const p = getProductById(item.productId);
    if (!p) return sum;
    return sum + p.price * item.qty;
  }, 0);
}

function newOrderId() {
  return `${Date.now()}`;
}

export default function App() {
  const [cartItems, setCartItems] = useState(() => loadJson("cart", []));
  const [orders, setOrders] = useState(() => loadJson("orders", []));

  const cartCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.qty, 0),
    [cartItems]
  );
  const total = useMemo(() => computeTotal(cartItems), [cartItems]);

  function persistCart(next) {
    setCartItems(next);
    saveJson("cart", next);
  }

  function persistOrders(next) {
    setOrders(next);
    saveJson("orders", next);
  }

  function addToCart(productId) {
    const next = [...cartItems];
    const idx = next.findIndex((i) => i.productId === productId);
    if (idx >= 0) next[idx] = { ...next[idx], qty: next[idx].qty + 1 };
    else next.push({ productId, qty: 1 });
    persistCart(next);
  }

  function updateQty(productId, qty) {
    const safeQty = Math.max(1, Number(qty || 1));
    const next = cartItems.map((i) =>
      i.productId === productId ? { ...i, qty: safeQty } : i
    );
    persistCart(next);
  }

  function removeFromCart(productId) {
    const next = cartItems.filter((i) => i.productId !== productId);
    persistCart(next);
  }

  function clearCart() {
    persistCart([]);
  }

  function createOrder({ customer }) {
    const id = newOrderId();
    const order = {
      id,
      createdAt: new Date().toISOString(),
      customer,
      items: cartItems,
      total,
    };
    const next = [order, ...orders];
    persistOrders(next);
    clearCart();
    return id;
  }

  return (
    <HashRouter>
      <div className="container" style={{ paddingTop: 12, paddingBottom: 0 }}>
        <Header cartCount={cartCount} />
      </div>
      <Routes>
        <Route path="/" element={<Home onAddToCart={addToCart} />} />
        <Route
          path="/products"
          element={<ProductList onAddToCart={addToCart} />}
        />
        <Route
          path="/product/:id"
          element={<ProductDetail onAddToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              onUpdateQty={updateQty}
              onRemove={removeFromCart}
              total={total}
            />
          }
        />
        <Route
          path="/checkout"
          element={
            <Checkout
              cartItems={cartItems}
              total={total}
              onCreateOrder={createOrder}
            />
          }
        />
        <Route path="/orders" element={<OrderHistory orders={orders} />} />
        <Route path="/order-success/:id" element={<OrderSuccess />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home onAddToCart={addToCart} />} />
      </Routes>
      <BottomNav />
    </HashRouter>
  );
}
