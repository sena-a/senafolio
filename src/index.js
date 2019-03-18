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
