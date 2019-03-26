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

// 프로젝트 템플릿

const templates = {
  cgv: document.getElementById("project-cgv").content,
  brickid: document.getElementById("project-brickid").content,
  omok: document.getElementById("project-omok").content,
  modalCgv: document.getElementById("modal-cgv").content,
  modalBrickid: document.getElementById("modal-brickid").content,
  modalomok: document.getElementById("modal-omok").content
};

const projectEl = document.querySelector(".project-item");
const modalEl = document.querySelector(".modal-content");

// projectEl에 프로젝트 아이템 삽입 함수
function drawProject(frag) {
  projectEl.textContent = "";
  projectEl.appendChild(frag);
}

// modalEl에 프로젝트 모달 템플릿 삽입 함수
function drawModal(frag) {
  modalEl.textContent = "";
  modalEl.appendChild(frag);
}

// movie-site 클릭
const cgvButton = document.querySelector(".list-cgv");

cgvButton.addEventListener("click", () => {
  const frag = document.importNode(templates.cgv, true);
  const modalFrag = document.importNode(templates.modalCgv, true);
  drawProject(frag);
  drawModal(modalFrag);
});

// brickid 클릭
const brickidButton = document.querySelector(".list-brickid");

brickidButton.addEventListener("click", () => {
  const frag = document.importNode(templates.brickid, true);
  const modalFrag = document.importNode(templates.modalBrickid, true);

  drawProject(frag);
  drawModal(modalFrag);
});

// 모달 열기 버튼
const open = document.querySelector(".modal-open");
open.addEventListener("click", () => {
  document.querySelector(".item-modal").classList.add("item-modal-active");
});

// 모달 닫기 버튼
const close = document.querySelector(".item-modal-close");

close.addEventListener("click", () => {
  document.querySelector(".item-modal").classList.remove("item-modal-active");
});
