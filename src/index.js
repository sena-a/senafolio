// 변수 선언
const body = document.body;

// header__arrow 클릭시 스크롤 이동
const arrow = document.querySelector(".header__arrow");

arrow.addEventListener("click", () => {
  window.scroll(0, window.innerHeight);
});

// 메뉴 클릭 시 책갈피
// skills
const skill = document.querySelector(".menu__skills");

skill.addEventListener("click", () => {
  document.getElementById("skills").scrollIntoView(true);
});

// 프로젝트 모달 열기
const open = document.querySelector(".modal-open");

open.addEventListener("click", () => {
  document.querySelector(".item-modal").classList.add("item-modal-active");
});

// 프로젝트 모달 닫기
const close = document.querySelector(".item-modal-close");

close.addEventListener("click", () => {
  document.querySelector(".item-modal").classList.remove("item-modal-active");
});
