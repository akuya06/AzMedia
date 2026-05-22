import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getProductById } from "../data/products.js";
import { formatVnd } from "../utils/money.js";

export default function Checkout({ cartItems, total, onCreateOrder }) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");

  const hasItems = cartItems.length > 0;

  const summaryLines = useMemo(() => {
    return cartItems
      .map((item) => {
        const p = getProductById(item.productId);
        if (!p) return null;
        return `${p.name} x${item.qty}`;
      })
      .filter(Boolean);
  }, [cartItems]);

  function validate() {
    if (!hasItems) return "Giỏ hàng đang trống.";
    if (!name.trim()) return "Vui lòng nhập tên.";
    if (!phone.trim()) return "Vui lòng nhập số điện thoại.";
    return null;
  }

  return (
    <div className="container" style={{ display: "grid", gap: 12 }}>
      {!hasItems && (
        <div className="card" style={{ padding: 12 }}>
          <div style={{ fontWeight: 800, marginBottom: 6 }}>
            Bạn chưa có sản phẩm trong giỏ
          </div>
          <Link to="/products" className="btn secondary">
            Chọn sản phẩm
          </Link>
        </div>
      )}

      {hasItems && (
        <div className="card" style={{ padding: 12, display: "grid", gap: 10 }}>
          <div style={{ fontWeight: 900 }}>Thông tin đặt hàng</div>

          <div>
            <div style={{ fontWeight: 700, marginBottom: 6 }}>Họ tên</div>
            <input
              className="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nhập họ tên"
            />
          </div>

          <div>
            <div style={{ fontWeight: 700, marginBottom: 6 }}>Số điện thoại</div>
            <input
              className="input"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Nhập số điện thoại"
              inputMode="tel"
            />
          </div>

          <div>
            <div style={{ fontWeight: 700, marginBottom: 6 }}>
              Địa chỉ (tuỳ chọn)
            </div>
            <input
              className="input"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Nhập địa chỉ"
            />
          </div>

          <div>
            <div style={{ fontWeight: 700, marginBottom: 6 }}>Ghi chú</div>
            <input
              className="input"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Ví dụ: thời gian liên hệ, yêu cầu thêm..."
            />
          </div>

          <div style={{ borderTop: "1px solid", paddingTop: 10 }}>
            <div style={{ fontWeight: 800, marginBottom: 6 }}>Tóm tắt</div>
            <div className="muted" style={{ fontSize: 13 }}>
              {summaryLines.join(" • ")}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 10,
              }}
            >
              <div style={{ fontWeight: 900 }}>Tổng tiền</div>
              <div style={{ fontWeight: 900 }}>{formatVnd(total)}</div>
            </div>
          </div>

          <button
            className="btn"
            onClick={() => {
              const error = validate();
              if (error) {
                alert(error);
                return;
              }
              const orderId = onCreateOrder({
                customer: { name: name.trim(), phone: phone.trim(), address, note },
              });
              navigate(`/order-success/${orderId}`);
            }}
          >
            Đặt hàng
          </button>
        </div>
      )}
    </div>
  );
}
