import { Link } from "react-router-dom";
import { formatVnd } from "../utils/money.js";

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="card" style={{ overflow: "hidden" }}>
      <Link to={`/product/${product.id}`}>
        <img
          src={product.imageUrl}
          alt={product.name}
          style={{ width: "100%", height: 140, objectFit: "cover" }}
          loading="lazy"
        />
      </Link>
      <div style={{ padding: 12 }}>
        <div style={{ fontWeight: 800, marginBottom: 4 }}>{product.name}</div>
        <div className="muted" style={{ fontSize: 13, marginBottom: 10 }}>
          {product.shortDescription}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ fontWeight: 800 }}>{formatVnd(product.price)}</div>
          <button
            className="btn"
            style={{ marginLeft: "auto" }}
            onClick={() => onAddToCart(product.id)}
          >
            Thêm
          </button>
        </div>
      </div>
    </div>
  );
}
