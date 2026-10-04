<!-- p:4b6c -->
## 개요
<!-- p:5837 -->
src/token.js에 리프레시 토큰 회전 함수 rotate를 만든다. CommonJS 모듈(module.exports)이다.

<!-- p:760c -->
## 변경 컴포넌트
<!-- p:77c3 -->
- src/token.js: rotate(store, token)

<!-- p:7d9d -->
## 인터페이스
<!-- p:a190 -->
- rotate(store, token) → 새 토큰 문자열. store는 Map(토큰 → { used: boolean }). 새 토큰을 { used: false }로 넣고 이전 토큰을 used: true로 바꾼다

<!-- p:849a -->
## 데이터 변경
<!-- p:7a20 -->
- 없음 (메모리 Map)

<!-- p:7adc -->
## 테스트 계획
<!-- p:784c -->
- 레포의 node check.js

<!-- p:2b20 -->
## 리스크
<!-- p:dacd -->
- 이미 쓴 토큰을 다시 쓰면 Error('reused')를 던진다 (재사용 탐지)
