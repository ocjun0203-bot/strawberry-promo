/**
 * pricing.js - 가격 옵션 선택 → 문의 폼 자동 입력
 *
 * 가격 섹션의 "문의하기" 버튼 클릭 시:
 * 1. 선택한 상품 옵션을 문의 폼의 textarea에 자동으로 채워줌
 * 2. #contact 섹션으로 부드럽게 스크롤
 */

(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const messageField = document.getElementById('message');
    const contactSection = document.getElementById('contact');

    document.querySelectorAll('[data-inquiry]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const option = btn.dataset.inquiry; // 예: "딸기 1kg (25,000원)"

        // 문의 내용 자동 입력
        if (messageField) {
          messageField.value = `[${option}] 주문 문의합니다.`;
          messageField.focus();
        }

        // #contact 섹션으로 스크롤
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  });
})();
