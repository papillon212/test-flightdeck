# 구현 기록 · CU-z8r3fdnf9a

## Step 1: rotate와 재사용 탐지

```yaml
design_ref: design.md#p:19d7
ckpt: 4b0bf1177ecbb60194808bf9cf156130d64e1b90
changes:
  - src/token.js:4
verification: "node check.js  # ok 3 passed"
```

**의도** 설계의 rotate 구현

**결정** Map 저장, randomBytes(16) hex

**검토한 대안** 없음

**리뷰 포인트** src/token.js:5 재사용 판정

## 직접 수정 메모

- `src/token.js:1-30,36` (@dh.lee): 머리말과 재사용 표시 이유 주석
- `src/token.js:43` (@dh.lee): 터미널에서 남긴 메모 줄
