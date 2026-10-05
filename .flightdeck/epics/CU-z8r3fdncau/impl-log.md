# 구현 기록 · CU-z8r3fdncau

## Step 1: rotate와 재사용 탐지

```yaml
design_ref: design.md#p:3519
ckpt: 9735d9ee025faa4f750ba9c5f81ec717d0e84042
changes:
  - src/token.js:1-12
verification: "node check.js  # ok 3 passed"
```

**의도** 설계의 rotate 구현

**결정** Map 저장, randomBytes(16) hex

**검토한 대안** 없음

**리뷰 포인트** src/token.js:5 재사용 판정
