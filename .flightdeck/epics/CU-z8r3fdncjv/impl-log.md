# 구현 기록 · CU-z8r3fdncjv

## Step 1: rotate와 재사용 탐지

```yaml
design_ref: design.md#p:caf4
ckpt: 5b579f5a776e5cb5e03c593356cb845b992595b4
changes:
  - src/token.js:4
verification: "node check.js  # ok 3 passed"
```

**의도** 설계의 rotate 구현

**결정** Map 저장, randomBytes(16) hex

**검토한 대안** 없음

**리뷰 포인트** src/token.js:5 재사용 판정
