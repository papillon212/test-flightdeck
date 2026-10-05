<!-- p:6a2c -->
## 개요
<!-- p:4298 -->
src/token.js에 리프레시 토큰 회전 함수 rotate를 만든다. CommonJS 모듈(module.exports)이다.

<!-- p:3e73 -->
## 변경 컴포넌트
<!-- p:3ddc -->
- src/token.js: rotate(store, token)

<!-- p:9ae5 -->
## 인터페이스
<!-- p:fe24 -->
- rotate(store, token) → 새 토큰 문자열. store는 Map(토큰 → { used: boolean }). 새 토큰을 { used: false }로 넣고 이전 토큰을 used: true로 바꾼다

<!-- p:c7b1 -->
## 데이터 변경
<!-- p:3cb5 -->
- 없음 (메모리 Map)

<!-- p:3602 -->
## 테스트 계획
<!-- p:ffd2 -->
- 레포의 node check.js

<!-- p:6fcb -->
## 리스크
<!-- p:f649 -->
- 이미 쓴 토큰을 다시 쓰면 Error('reused')를 던진다 (재사용 탐지)
