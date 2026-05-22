import { Link, useLocation } from "react-router-dom";

const TITLES = {
  "/": "AZ Media",
  "/products": "Danh sách sản phẩm",
  "/cart": "Giỏ hàng",
  "/checkout": "Đặt hàng",
  "/orders": "Lịch sử đơn hàng",
  "/contact": "Liên hệ",
};

export default function Header({ cartCount = 0 }) {
  const location = useLocation();
  const title =
    TITLES[location.pathname] ||
    (location.pathname.startsWith("/product/")
      ? "Chi tiết sản phẩm"
      : location.pathname.startsWith("/order-success")
        ? "Hoàn tất"
        : "AZ Media");

  return (
    <div className="card" style={{ padding: 12 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ fontWeight: 800 }}>{title}</div>
        <div style={{ marginLeft: "auto", display: "flex", gap: 10 }}>
          <Link to="/products" className="muted">
            Sản phẩm
          </Link>
          <Link to="/cart" className="muted">
            Giỏ ({cartCount})
          </Link>
        </div>
      </div>
    </div>
  );
}
