const PREFIX = "az_media_";

export function loadJson(key, fallback) {
  try {
    const raw = localStorage.getItem(PREFIX + key);
    if (!raw) return fallback;
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

export function saveJson(key, value) {
  localStorage.setItem(PREFIX + key, JSON.stringify(value));
}
