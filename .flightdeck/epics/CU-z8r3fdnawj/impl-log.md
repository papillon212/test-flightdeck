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

## Step 2: Step 2: 토큰 재사용 탐지

```yaml
design_ref: design.md#p:dacd
ckpt: 1ac28fedcbff97cc84888c98b4998ffa5787e4b4
changes: []
verification: "node check.js # ok 3 passed (재사용 탐지 테스트 포함)"
```

**의도** 이미 쓴 토큰(used: true)을 다시 쓰려고 하면 Error('reused')를 던지기

**결정** rotate 함수 시작 부분에서 store.get(token)?.used 값을 확인하고, true면 즉시 Error('reused')를 던지는 방식으로 구현

**검토한 대안** 없음

**리뷰 포인트** src/token.js:3-5 - 토큰의 used 상태를 확인하고 재사용 시도 시 올바른 오류를 던지는지 확인
