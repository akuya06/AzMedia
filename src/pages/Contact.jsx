const CONTACT = {
  phone: "0900000000",
  zaloLink: "https://zalo.me/",
  oaLink: "https://zalo.me/oa",
  address: "AZ Media - (cập nhật địa chỉ công ty tại đây)",
};

export default function Contact() {
  return (
    <div className="container" style={{ display: "grid", gap: 12 }}>
      <div className="card" style={{ padding: 12, display: "grid", gap: 10 }}>
        <div style={{ fontWeight: 900 }}>Liên hệ</div>
        <div className="muted">Gọi điện, nhắn Zalo/OA, địa chỉ công ty.</div>

        <div style={{ display: "grid", gap: 8 }}>
          <a className="btn" href={`tel:${CONTACT.phone}`}>
            Gọi: {CONTACT.phone}
          </a>
          <a
            className="btn secondary"
            href={CONTACT.zaloLink}
            target="_blank"
            rel="noreferrer"
          >
            Nhắn Zalo
          </a>
          <a
            className="btn secondary"
            href={CONTACT.oaLink}
            target="_blank"
            rel="noreferrer"
          >
            Mở OA
          </a>
        </div>

        <div style={{ borderTop: "1px solid", paddingTop: 10 }}>
          <div style={{ fontWeight: 800, marginBottom: 6 }}>Địa chỉ</div>
          <div className="muted">{CONTACT.address}</div>
        </div>
      </div>
    </div>
  );
}
