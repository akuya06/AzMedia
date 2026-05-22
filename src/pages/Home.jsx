import { Link } from "react-router-dom";
import { CATEGORIES, PRODUCTS } from "../data/products.js";
import ProductCard from "../components/ProductCard.jsx";

export default function Home({ onAddToCart }) {
  const featured = PRODUCTS.slice(0, 4);

  return (
    <div className="container" style={{ display: "grid", gap: 12 }}>
      <div className="card" style={{ padding: 12 }}>
        <div style={{ fontWeight: 900, fontSize: 18 }}>AZ Media</div>
        <div className="muted" style={{ marginTop: 6 }}>
          Thiết kế • Quay dựng • Quảng cáo • Website/App • Truyền thông
        </div>
        <div style={{ marginTop: 12 }}>
          <Link to="/products" className="btn secondary">
            Xem tất cả sản phẩm
          </Link>
        </div>
      </div>

      <div className="card" style={{ padding: 12 }}>
        <div style={{ fontWeight: 800, marginBottom: 10 }}>Danh mục</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {CATEGORIES.map((c) => (
            <Link
              key={c.id}
              to={`/products?category=${encodeURIComponent(c.id)}`}
              style={{
                padding: "8px 10px",
                borderRadius: 999,
                border: "1px solid",
                fontWeight: 600,
              }}
            >
              {c.name}
            </Link>
          ))}
        </div>
      </div>

      <div>
        <div style={{ fontWeight: 800, margin: "6px 0 10px" }}>
          Sản phẩm nổi bật
        </div>
        <div className="grid">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
    </div>
  );
}
