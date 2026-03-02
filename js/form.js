/**
 * form.js - 문의 폼 유효성 검사 및 제출 처리
 *
 * - 한국 전화번호 형식 검사 (010-xxxx-xxxx 등)
 * - Netlify Forms를 통해 제출 (data-netlify="true")
 * - 제출 성공 시 인라인 성공 메시지 표시 (페이지 이동 없음)
 */

(function () {
  // 한국 전화번호 정규식: 010/011/016/017/018/019 + 7~8자리
  const PHONE_REGEX = /^01[016789]-?\d{3,4}-?\d{4}$/;

  /**
   * 필드 에러 표시/해제
   * @param {HTMLElement} field - input 또는 textarea 요소
   * @param {string|null} message - 에러 메시지 (null이면 에러 해제)
   */
  function setFieldError(field, message) {
    const errorEl = field.parentElement.querySelector('.field-error');
    if (message) {
      field.classList.add('error');
      if (errorEl) {
        errorEl.textContent = message;
        errorEl.classList.add('visible');
      }
    } else {
      field.classList.remove('error');
      if (errorEl) {
        errorEl.classList.remove('visible');
      }
    }
  }

  /**
   * 폼 유효성 검사
   * @returns {boolean} 유효하면 true
   */
  function validateForm(form) {
    const name = form.querySelector('#name');
    const phone = form.querySelector('#phone');
    let valid = true;

    if (!name.value.trim()) {
      setFieldError(name, '이름을 입력해주세요.');
      valid = false;
    } else {
      setFieldError(name, null);
    }

    if (!phone.value.trim()) {
      setFieldError(phone, '전화번호를 입력해주세요.');
      valid = false;
    } else if (!PHONE_REGEX.test(phone.value.trim())) {
      setFieldError(phone, '올바른 전화번호를 입력해주세요. (예: 010-1234-5678)');
      valid = false;
    } else {
      setFieldError(phone, null);
    }

    return valid;
  }

  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const formEl = form.querySelector('.contact-form-fields');
    const successEl = form.querySelector('.contact-success');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      if (!validateForm(form)) return;

      // Netlify Forms 제출
      const formData = new FormData(form);
      try {
        const response = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(formData).toString(),
        });

        if (response.ok) {
          // 성공 메시지 표시
          if (formEl) formEl.style.display = 'none';
          if (successEl) successEl.classList.add('visible');
        } else {
          alert('제출 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
        }
      } catch {
        alert('네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
      }
    });
  });
})();
