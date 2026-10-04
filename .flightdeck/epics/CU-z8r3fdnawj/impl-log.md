# 구현 기록 · CU-z8r3fdnawj

## Step 1: Step 1: rotate 함수 구현

```yaml
design_ref: design.md#p:a190
ckpt: b3981008b48feaecdc11b1884fc2d6b1a8ca3557
changes:
  - src/token.js:1-16
verification: "node check.js # ok 3 passed"
```

**의도** 새 토큰을 발급하고 이전 토큰을 used로 표시하는 rotate 함수를 src/token.js에 구현

**결정** crypto.randomBytes(16).toString('hex')로 새 토큰 생성, 이전 토큰의 used를 true로 변경, 새 토큰을 store에 { used: false }로 추가하는 방식으로 구현

**검토한 대안** 없음

**리뷰 포인트** src/token.js:1-14 - rotate 함수가 token을 used로 표시하고 새 토큰을 store에 저장하며 반환하는지 확인
