<!-- p:8499 -->
## 개요
<!-- p:fc21 -->
src/token.js에 리프레시 토큰 회전 함수 rotate를 만든다. CommonJS 모듈(module.exports)이다.

<!-- p:3b71 -->
## 변경 컴포넌트
<!-- p:6df1 -->
- src/token.js: rotate(store, token)

<!-- p:073e -->
## 인터페이스
<!-- p:caf4 -->
- rotate(store, token) → 새 토큰 문자열. store는 Map(토큰 → { used: boolean }). 새 토큰을 { used: false }로 넣고 이전 토큰을 used: true로 바꾼다

<!-- p:5052 -->
## 데이터 변경
<!-- p:7ded -->
- 없음 (메모리 Map)

<!-- p:a264 -->
## 테스트 계획
<!-- p:0dd4 -->
- 레포의 node check.js

<!-- p:7d77 -->
## 리스크
<!-- p:fc10 -->
- 이미 쓴 토큰을 다시 쓰면 Error('reused')를 던진다 (재사용 탐지)
