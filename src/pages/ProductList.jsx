import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CATEGORIES, PRODUCTS } from "../data/products.js";
import ProductCard from "../components/ProductCard.jsx";

export default function ProductList({ onAddToCart }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState("");
  const category = searchParams.get("category") || "";

  const filtered = useMemo(() => {
    const byCategory = category
      ? PRODUCTS.filter((p) => p.categoryId === category)
      : PRODUCTS;
    const kw = keyword.trim().toLowerCase();
    if (!kw) return byCategory;
    return byCategory.filter(
      (p) =>
        p.name.toLowerCase().includes(kw) ||
        p.shortDescription.toLowerCase().includes(kw)
    );
  }, [category, keyword]);

  return (
    <div className="container" style={{ display: "grid", gap: 12 }}>
      <div className="card" style={{ padding: 12, display: "grid", gap: 10 }}>
        <input
          className="input"
          placeholder="Tìm sản phẩm/dịch vụ..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <button
            className="btn secondary"
            onClick={() => setSearchParams({})}
            disabled={!category}
          >
            Tất cả
          </button>
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              className="btn secondary"
              onClick={() => setSearchParams({ category: c.id })}
              style={{
                opacity: category === c.id ? 1 : 0.8,
                borderWidth: category === c.id ? 2 : 1,
              }}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="card" style={{ padding: 12 }}>
          <div className="muted">Không có sản phẩm phù hợp.</div>
        </div>
      )}
    </div>
  );
}
