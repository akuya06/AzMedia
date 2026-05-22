# Zalo Mini App (Vite + React) — Hướng dẫn cài đặt & tránh lỗi

Repo này là một Zalo Mini App dùng Vite + React + zmp-ui + zmp-sdk.

| Demo | Entrypoint |
| :--: | :--: |
| <img src="./docs/preview.webp" alt="Home page"> | <img src="./docs/qr.webp" alt="Entry point"> |

## Yêu cầu

- Node.js bản LTS (khuyến nghị)
- npm (đi kèm Node.js)
- Zalo Mini App CLI (`zmp`) cài global

Kiểm tra nhanh:

```bash
node -v
npm -v
```

## Cài đặt (Windows / macOS / Linux)

### 1) Cài Zalo Mini App CLI (để có lệnh `zmp`)

> Lưu ý: `zmp-cli` là **CLI**, còn `zmp-sdk` là **SDK trong code** (xem mục “Phân biệt…” bên dưới).

```bash
npm install -g zmp-cli@latest
zmp --version
```

### 2) Cài dependencies trong project

```bash
cd D:\AzMediaMiniApp
npm install
```

### 3) Chạy dev server đúng cách

Repo này **không có** script `dev`, nên **không chạy** `npm run dev`.

Cách chạy đúng (chọn 1):

```bash
zmp start
```

hoặc:

```bash
npm run start
```

Mặc định sẽ mở dev server tại `http://localhost:3000`.

## Troubleshooting (đúng các lỗi hay gặp)

### Lỗi 1: `npm error Missing script: "dev"`

Nguyên nhân: `package.json` của repo này không có `scripts.dev`.

Cách xử lý:

- Dùng `zmp start` hoặc `npm run start`.

### Lỗi 2: `zmp : The term 'zmp' is not recognized...`

Nguyên nhân thường gặp:

- Chưa cài `zmp-cli` global
- Đã cài nhưng terminal/VS Code chưa reload PATH
- Trên Windows, thư mục npm global chưa nằm trong `Path`

Cách xử lý theo thứ tự:

1) Cài/ cài lại CLI:

```bash
npm install -g zmp-cli@latest
```

2) Đóng toàn bộ PowerShell/CMD/VS Code rồi mở lại, sau đó kiểm tra:

```bash
zmp --help
```

3) Nếu vẫn không nhận `zmp`, kiểm tra npm global prefix và PATH:

```bash
npm config get prefix
```

Trên Windows, thường bạn cần đảm bảo thư mục kiểu `C:\Users\<User>\AppData\Roaming\npm` nằm trong **Environment Variables → Path**.

4) Kiểm tra lệnh `zmp` đang nằm ở đâu:

```bash
where zmp
```

### Lỗi 3: Nhầm `zmp-sdk` với `zmp-cli`

- `zmp-cli` (cài global) = công cụ dòng lệnh để chạy/tạo/deploy mini app:
  - `zmp start`, `zmp login`, `zmp deploy`, `zmp init`, ...
- `zmp-sdk` (cài trong project) = thư viện để gọi API Zalo Mini App trong code.

Vì vậy: nếu lỗi “không nhận `zmp`”, bạn cần cài `zmp-cli`, **không phải** chỉ cài `zmp-sdk`.

## Deploy

Chọn 1 trong 2 cách:

```bash
zmp login
zmp deploy
```

hoặc:

```bash
npm run deploy
```

## Ghi chú: Zalo Mini App Studio

Template này dùng **Vite 5.x**, hiện **không tương thích** với Zalo Mini App Studio (nếu bạn đang dùng Studio thì ưu tiên dùng DevTools/CLI).

## Cấu trúc thư mục

- `src/`: mã nguồn chính
  - `components/`: component dùng lại
  - `pages/`: các trang
  - `mock/`: dữ liệu mẫu (JSON)
  - `utils/`: helper (format, request, zma, ...)
- `app-config.json`: cấu hình Zalo Mini App

## Checklist trước khi chạy (để khỏi dính lỗi)

```bash
node -v
npm -v
zmp --version

cd D:\AzMediaMiniApp
npm install
zmp start
```