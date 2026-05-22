# Mẫu 1 — Chức năng & cấu trúc AZ Media Mini App (bản đầu)

Ngày: 2026-05-22

## 1) Màn hình & chức năng

| Màn hình | Chức năng |
|---|---|
| Trang chủ | Banner, danh mục, sản phẩm nổi bật |
| Danh sách sản phẩm | Hiển thị sản phẩm/dịch vụ của AZ Media |
| Chi tiết sản phẩm | Ảnh, mô tả, giá, nút mua/liên hệ |
| Giỏ hàng | Thêm/xóa sản phẩm, tính tổng tiền |
| Đặt hàng | Nhập tên, số điện thoại, địa chỉ/ghi chú |
| Lịch sử đơn hàng | Xem đơn đã đặt |
| Liên hệ | Gọi điện, nhắn OA/Zalo, địa chỉ công ty |

Gợi ý sản phẩm phù hợp tên “AZ Media”:
- Gói thiết kế
- Quay dựng video
- Chạy quảng cáo
- Thiết kế website/app
- Dịch vụ truyền thông
- (Hoặc sản phẩm bán lẻ tuỳ dự án)

## 2) Quy trình tạo Zalo Mini App

1) Tạo Zalo App trên **Zalo for Developers**
- Theo tài liệu Zalo: 1 Zalo App có thể chứa nhiều Mini App.
- Nếu muốn người dùng bên ngoài sử dụng, cần **kích hoạt ứng dụng**.

2) Tạo Mini App
- Vào trang quản lý Mini App
- Chọn Zalo App
- Bấm **Tạo Mini App**
- Nhập thông tin và tạo mới

3) Liên kết code
- Sau khi tạo xong sẽ có **Mini App ID**
- Dùng Mini App ID để liên kết với project code theo hướng dẫn của Zalo/Extension.

## 3) Công cụ cần cài

Khuyến nghị:
- VS Code
- Node.js
- Zalo Mini App Extension (VS Code)
- ZMP SDK
- ZMP UI

SDK chính cài bằng:

```bash
npm install zmp-sdk
```

Mini App API thường dùng: lấy thông tin user, storage, UI, mở chat, follow OA, xin quyền gửi thông báo.

## 4) Cấu trúc app đề xuất

```text
az-media-miniapp/
├─ src/
│  ├─ pages/
│  │  ├─ Home.jsx
│  │  ├─ ProductList.jsx
│  │  ├─ ProductDetail.jsx
│  │  ├─ Cart.jsx
│  │  ├─ Checkout.jsx
│  │  └─ OrderSuccess.jsx
│  ├─ components/
│  │  ├─ ProductCard.jsx
│  │  ├─ Header.jsx
│  │  └─ BottomNav.jsx
│  ├─ data/
│  │  └─ products.js
│  └─ app.jsx
```
