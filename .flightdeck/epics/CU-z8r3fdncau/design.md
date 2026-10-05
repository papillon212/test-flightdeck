<!-- p:ee2b -->
## 개요
<!-- p:59c8 -->
src/token.js에 리프레시 토큰 회전 함수 rotate를 만든다. CommonJS 모듈(module.exports)이다.

<!-- p:4aeb -->
## 변경 컴포넌트
<!-- p:e7f5 -->
- src/token.js: rotate(store, token)

<!-- p:0ee9 -->
## 인터페이스
<!-- p:3519 -->
- rotate(store, token) → 새 토큰 문자열. store는 Map(토큰 → { used: boolean }). 새 토큰을 { used: false }로 넣고 이전 토큰을 used: true로 바꾼다

<!-- p:9139 -->
## 데이터 변경
<!-- p:b16f -->
- 없음 (메모리 Map)

<!-- p:8a00 -->
## 테스트 계획
<!-- p:a4e8 -->
- 레포의 node check.js

<!-- p:f92f -->
## 리스크
<!-- p:68d1 -->
- 이미 쓴 토큰을 다시 쓰면 Error('reused')를 던진다 (재사용 탐지)
