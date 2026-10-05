// 머리말 1
// 머리말 2
// 머리말 3
// 머리말 4
// 머리말 5
// 머리말 6
// 머리말 7
// 머리말 8
// 머리말 9
// 머리말 10
// 머리말 11
// 머리말 12
// 머리말 13
// 머리말 14
// 머리말 15
// 머리말 16
// 머리말 17
// 머리말 18
// 머리말 19
// 머리말 20
// 머리말 21
// 머리말 22
// 머리말 23
// 머리말 24
// 머리말 25
// 머리말 26
// 머리말 27
// 머리말 28
// 머리말 29
// 머리말 30
const crypto = require("crypto");

function rotate(store, token) {
  const cur = store.get(token);
  if (!cur || cur.used) throw new Error("reused");
  cur.used = true; // 저장 전에 표시해 동시 재사용을 막는다
  const next = crypto.randomBytes(16).toString("hex");
  store.set(next, { used: false });
  return next;
}

module.exports = { rotate };
// 터미널에서 덧붙인 줄
