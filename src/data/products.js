export const CATEGORIES = [
  { id: "design", name: "Thiết kế" },
  { id: "video", name: "Quay dựng" },
  { id: "ads", name: "Chạy quảng cáo" },
  { id: "webapp", name: "Website / App" },
  { id: "media", name: "Truyền thông" },
];

export const PRODUCTS = [
  {
    id: "pk-design-basic",
    name: "Gói thiết kế cơ bản",
    categoryId: "design",
    price: 1500000,
    imageUrl: "https://placehold.co/600x400",
    shortDescription: "Thiết kế ấn phẩm cơ bản cho fanpage / quảng cáo.",
    description:
      "Bao gồm: 10 mẫu post, 2 banner, chỉnh sửa 2 lần. Thời gian 3-5 ngày.",
  },
  {
    id: "pk-video-short",
    name: "Quay dựng video ngắn",
    categoryId: "video",
    price: 2500000,
    imageUrl: "https://placehold.co/600x400",
    shortDescription: "Video 30-60s cho TikTok/Reels.",
    description:
      "Bao gồm: kịch bản ngắn, quay 1 buổi, dựng 1 video, thêm caption cơ bản.",
  },
  {
    id: "pk-ads-starter",
    name: "Chạy quảng cáo Starter",
    categoryId: "ads",
    price: 3000000,
    imageUrl: "https://placehold.co/600x400",
    shortDescription: "Thiết lập & tối ưu chiến dịch trong 7 ngày.",
    description:
      "Bao gồm: setup pixel (nếu có), 1 chiến dịch, tối ưu ngày, báo cáo cuối kỳ.",
  },
  {
    id: "pk-website-landing",
    name: "Thiết kế Landing Page",
    categoryId: "webapp",
    price: 6500000,
    imageUrl: "https://placehold.co/600x400",
    shortDescription: "Landing page giới thiệu sản phẩm/dịch vụ.",
    description:
      "Bao gồm: UI 1 trang, responsive, form liên hệ, bàn giao source.",
  },
  {
    id: "pk-media-plan",
    name: "Gói truyền thông tháng",
    categoryId: "media",
    price: 12000000,
    imageUrl: "https://placehold.co/600x400",
    shortDescription: "Kế hoạch nội dung + sản xuất + báo cáo.",
    description:
      "Bao gồm: plan nội dung, 12 bài viết, 4 thiết kế, báo cáo hiệu quả.",
  },
];

export function getProductById(productId) {
  return PRODUCTS.find((p) => p.id === productId) || null;
}
