import { Link } from "react-router-dom";
import { formatVnd } from "../utils/money.js";

export default function OrderHistory({ orders }) {
  return (
    <div className="container" style={{ display: "grid", gap: 12 }}>
      {orders.length === 0 && (
        <div className="card" style={{ padding: 12 }}>
          <div style={{ fontWeight: 800, marginBottom: 6 }}>
            Chưa có đơn hàng
          </div>
          <Link to="/products" className="btn secondary">
            Mua sản phẩm
          </Link>
        </div>
      )}

      {orders.map((o) => (
        <div key={o.id} className="card" style={{ padding: 12 }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ fontWeight: 900 }}>#{o.id}</div>
            <div className="muted" style={{ fontSize: 13 }}>
              {new Date(o.createdAt).toLocaleString("vi-VN")}
            </div>
          </div>
          <div className="muted" style={{ marginTop: 6 }}>
            {o.customer?.name} • {o.customer?.phone}
          </div>
          <div style={{ marginTop: 10, fontWeight: 900 }}>
            {formatVnd(o.total)}
          </div>
        </div>
      ))}
    </div>
  );
}
