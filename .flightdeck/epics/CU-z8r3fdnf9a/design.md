<!-- p:8ed4 -->
## 개요
<!-- p:b2b4 -->
src/token.js에 리프레시 토큰 회전 함수 rotate를 만든다. CommonJS 모듈(module.exports)이다.

<!-- p:64ec -->
## 변경 컴포넌트
<!-- p:f805 -->
- src/token.js: rotate(store, token)

<!-- p:7891 -->
## 인터페이스
<!-- p:19d7 -->
- rotate(store, token) → 새 토큰 문자열. store는 Map(토큰 → { used: boolean }). 새 토큰을 { used: false }로 넣고 이전 토큰을 used: true로 바꾼다

<!-- p:c9da -->
## 데이터 변경
<!-- p:ca55 -->
- 없음 (메모리 Map)

<!-- p:3609 -->
## 테스트 계획
<!-- p:5184 -->
- 레포의 node check.js

<!-- p:3a0c -->
## 리스크
<!-- p:39ac -->
- 이미 쓴 토큰을 다시 쓰면 Error('reused')를 던진다 (재사용 탐지)
