<!-- p:d3fa -->
## 개요
<!-- p:0aa3 -->
src/token.js에 리프레시 토큰 회전 함수 rotate를 만든다. CommonJS 모듈(module.exports)이다.

<!-- p:5d61 -->
## 변경 컴포넌트
<!-- p:7641 -->
- src/token.js: rotate(store, token)

<!-- p:194e -->
## 인터페이스
<!-- p:da2b -->
- rotate(store, token) → 새 토큰 문자열. store는 Map(토큰 → { used: boolean }). 새 토큰을 { used: false }로 넣고 이전 토큰을 used: true로 바꾼다

<!-- p:1a2d -->
## 데이터 변경
<!-- p:a47b -->
- 없음 (메모리 Map)

<!-- p:7bc5 -->
## 테스트 계획
<!-- p:5220 -->
- 레포의 node check.js

<!-- p:e4b3 -->
## 리스크
<!-- p:a571 -->
- 이미 쓴 토큰을 다시 쓰면 Error('reused')를 던진다 (재사용 탐지)
