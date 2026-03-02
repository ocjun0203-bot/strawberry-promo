# 싱싱 딸기 홍보 페이지

딸기 판매를 위한 정적 랜딩 페이지. 순수 HTML/CSS/JS, 빌드 불필요.

## 파일 구조

```
css/
├── base.css       # 디자인 토큰(CSS 변수), reset, 공통 스타일 → 색상 변경 시 여기만 수정
├── hero.css       # 히어로 배너 (#hero)
├── features.css   # 상품 특징 카드 (#features)
├── pricing.css    # 가격 옵션 (#pricing)
├── contact.css    # 전화번호 문의 폼 (#contact)
└── footer.css     # 푸터

js/
├── animations.js  # IntersectionObserver로 스크롤 fade-in 처리
├── pricing.js     # 가격 옵션 버튼 → 문의 폼 자동 입력 + 스크롤
└── form.js        # 전화번호 유효성 검사, Netlify Forms 제출, 성공 메시지
```

## 주요 수정 위치

| 수정 내용 | 파일 |
|---------|------|
| 색상/폰트 변경 | `css/base.css` `:root` 변수 |
| 히어로 문구 변경 | `index.html` `#hero` 섹션 |
| 가격 변경 | `index.html` `#pricing` 섹션의 `.pricing-price` |
| 문의 폼 필드 추가 | `index.html` + `css/contact.css` + `js/form.js` |
| 전화번호 검증 패턴 | `js/form.js` `PHONE_REGEX` 상수 |

## 배포

@docs/deployment.md

## 폼 처리

Netlify Forms 내장 사용 (`data-netlify="true"`).
별도 서버 불필요. 제출 데이터는 Netlify 대시보드 → Forms 탭에서 확인.
