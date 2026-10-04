// 리프레시 토큰 회전 (설계 design.md)
const crypto = require("crypto");

function rotate(store, token) {
  if (store.get(token)?.used) {
    throw new Error("reused");
  }

  const newToken = crypto.randomBytes(16).toString("hex");

  store.get(token).used = true;
  store.set(newToken, { used: false });

  return newToken;
}

module.exports = { rotate };
