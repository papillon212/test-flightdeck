# 구현 기록 · CU-z8r3fdnfcb

## Step 1: rotate와 재사용 탐지

```yaml
design_ref: design.md#p:fe24
ckpt: 13fbd6de7d7e4a6186428581d9f035c4b16d709b
changes:
  - src/token.js:1,6,13
verification: "node check.js  # ok 3 passed"
```

**의도** 설계의 rotate 구현

**결정** Map 저장, randomBytes(16) hex

**검토한 대안** 없음

**리뷰 포인트** src/token.js:5 재사용 판정
