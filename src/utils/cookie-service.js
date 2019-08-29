import { cookie } from "browser-cookie-lite";

import { SECURE } from "./storage";

export function removeCookie({ name, path, domain, secure = SECURE }) {
  return cookie(name, "", -1, path, domain, secure);
}

export function saveCookie({
  name,
  value,
  ttl,
  path,
  domain,
  secure = SECURE,
}) {
  return cookie(name, JSON.stringify(value), ttl, path, domain, secure);
}

export function getCookie(name) {
  return JSON.parse(cookie(name) || "{}");
}
