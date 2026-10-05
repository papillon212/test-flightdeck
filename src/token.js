const crypto = require("crypto");

function rotate(store, token) {
  if (typeof token !== 'string') throw new TypeError('token must be a string');
  const cur = store.get(token);
  if (!cur || cur.used) throw new Error("reused");
  cur.used = true;
  const next = crypto.randomBytes(16).toString("hex");
  store.set(next, { used: false });
  return next;
}

module.exports = { rotate };
