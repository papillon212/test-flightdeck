// 구현 관문 명령 (Flightdeck M4 시나리오): src/token.js의 rotate를 확인한다
const fail = (m) => { console.log(`FAIL: ${m}`); process.exit(1); };
let rotate;
try { ({ rotate } = require("./src/token.js")); } catch (e) { fail(`src/token.js를 불러오지 못함: ${e.message}`); }
const s = new Map([["t0", { used: false }]]);
const t1 = rotate(s, "t0");
if (typeof t1 !== "string" || t1 === "t0") fail("새 토큰이 아님");
if (!s.get("t0").used || !s.has(t1)) fail("이전 토큰을 쓴 것으로 표시하고 새 토큰을 저장해야 함");
let threw = false;
try { rotate(s, "t0"); } catch (e) { threw = /reused/.test(e.message); }
if (!threw) fail("이미 쓴 토큰을 다시 쓰면 reused 오류여야 함");
console.log("ok 3 passed");
