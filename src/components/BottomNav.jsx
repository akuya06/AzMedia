import { NavLink } from "react-router-dom";

function Item({ to, label }) {
  return (
    <NavLink
      to={to}
      style={({ isActive }) => ({
        padding: "10px 12px",
        borderRadius: 10,
        border: "1px solid",
        opacity: isActive ? 1 : 0.7,
        fontWeight: isActive ? 700 : 600,
      })}
    >
      {label}
    </NavLink>
  );
}

export default function BottomNav() {
  return (
    <div className="stickyBottom">
      <div
        className="container"
        style={{ display: "flex", gap: 8, justifyContent: "space-between" }}
      >
        <Item to="/" label="Trang chủ" />
        <Item to="/products" label="Sản phẩm" />
        <Item to="/cart" label="Giỏ" />
        <Item to="/orders" label="Đơn" />
        <Item to="/contact" label="Liên hệ" />
      </div>
    </div>
  );
}
