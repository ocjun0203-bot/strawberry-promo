/**
 * animations.js - 스크롤 진입 시 fade-in 애니메이션
 *
 * .fade-in 클래스가 붙은 요소가 뷰포트에 진입하면
 * .visible 클래스를 추가하여 CSS transition을 트리거합니다.
 * (css/base.css의 .fade-in, .fade-in.visible 참고)
 */

(function () {
  const THRESHOLD = 0.15; // 요소의 15%가 보일 때 트리거

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // 한 번 보이면 다시 관찰 불필요
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: THRESHOLD }
  );

  // DOM 준비 후 모든 .fade-in 요소 관찰 시작
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.fade-in').forEach((el) => {
      observer.observe(el);
    });
  });
})();
