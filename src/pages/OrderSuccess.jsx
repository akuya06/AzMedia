import { Link, useParams } from "react-router-dom";

export default function OrderSuccess() {
  const { id } = useParams();
  return (
    <div className="container">
      <div className="card" style={{ padding: 12, display: "grid", gap: 10 }}>
        <div style={{ fontWeight: 900, fontSize: 18 }}>Đặt hàng thành công</div>
        <div className="muted">Mã đơn: #{id}</div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <Link to="/orders" className="btn secondary">
            Xem lịch sử đơn
          </Link>
          <Link to="/contact" className="btn">
            Liên hệ AZ Media
          </Link>
        </div>
      </div>
    </div>
  );
}
