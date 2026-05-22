import { Link, useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../data/products.js";
import { formatVnd } from "../utils/money.js";

export default function ProductDetail({ onAddToCart }) {
  const { id } = useParams();
  const product = getProductById(id);
  const navigate = useNavigate();

  if (!product) {
    return (
      <div className="container">
        <div className="card" style={{ padding: 12 }}>
          <div style={{ fontWeight: 800, marginBottom: 6 }}>
            Không tìm thấy sản phẩm
          </div>
          <Link to="/products" className="btn secondary">
            Quay lại danh sách
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container" style={{ display: "grid", gap: 12 }}>
      <div className="card" style={{ overflow: "hidden" }}>
        <img
          src={product.imageUrl}
          alt={product.name}
          style={{ width: "100%", height: 220, objectFit: "cover" }}
        />
        <div style={{ padding: 12, display: "grid", gap: 10 }}>
          <div style={{ fontWeight: 900, fontSize: 18 }}>{product.name}</div>
          <div className="muted">{product.description}</div>
          <div style={{ fontWeight: 900 }}>{formatVnd(product.price)}</div>
          <div style={{ display: "flex", gap: 10 }}>
            <button
              className="btn"
              onClick={() => {
                onAddToCart(product.id);
                navigate("/cart");
              }}
            >
              Thêm vào giỏ
            </button>
            <Link to="/contact" className="btn secondary">
              Liên hệ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
