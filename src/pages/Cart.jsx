import { Link, useNavigate } from "react-router-dom";
import { getProductById } from "../data/products.js";
import { formatVnd } from "../utils/money.js";

export default function Cart({ cartItems, onUpdateQty, onRemove, total }) {
  const navigate = useNavigate();
  const hasItems = cartItems.length > 0;

  return (
    <div className="container" style={{ display: "grid", gap: 12 }}>
      <div className="card" style={{ padding: 12 }}>
        {!hasItems && (
          <>
            <div style={{ fontWeight: 800, marginBottom: 6 }}>
              Giỏ hàng đang trống
            </div>
            <Link to="/products" className="btn secondary">
              Chọn sản phẩm
            </Link>
          </>
        )}

        {hasItems && (
          <div style={{ display: "grid", gap: 10 }}>
            {cartItems.map((item) => {
              const product = getProductById(item.productId);
              if (!product) return null;
              return (
                <div
                  key={item.productId}
                  style={{
                    display: "flex",
                    gap: 10,
                    alignItems: "center",
                    padding: 10,
                    border: "1px solid",
                    borderRadius: 12,
                  }}
                >
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    style={{ width: 72, height: 54, objectFit: "cover" }}
                  />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontWeight: 800 }}>{product.name}</div>
                    <div className="muted" style={{ fontSize: 13 }}>
                      {formatVnd(product.price)}
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <button
                      className="btn secondary"
                      onClick={() => onUpdateQty(item.productId, item.qty - 1)}
                    >
                      -
                    </button>
                    <div style={{ minWidth: 28, textAlign: "center" }}>
                      {item.qty}
                    </div>
                    <button
                      className="btn secondary"
                      onClick={() => onUpdateQty(item.productId, item.qty + 1)}
                    >
                      +
                    </button>
                    <button
                      className="btn secondary"
                      onClick={() => onRemove(item.productId)}
                    >
                      Xóa
                    </button>
                  </div>
                </div>
              );
            })}

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 6,
              }}
            >
              <div style={{ fontWeight: 900 }}>Tổng</div>
              <div style={{ fontWeight: 900 }}>{formatVnd(total)}</div>
            </div>
            <button className="btn" onClick={() => navigate("/checkout")}>
              Tiến hành đặt hàng
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
