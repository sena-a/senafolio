console.log("%cmake the world a better place!", "color:#9a9fd9; font-size:large");
console.log(
  "%c       ",
  "font-size: 160px; background:url(https://res.cloudinary.com/dnj3azhtb/image/upload/c_scale,q_auto:eco,w_180/v1554720108/senafolio/senafolio-console.jpg) no-repeat;"
);

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

// project
const project = document.querySelector(".menu__project");

project.addEventListener("click", () => {
  document.getElementById("project").scrollIntoView(true);
});

// about
const about = document.querySelector(".menu__about");

about.addEventListener("click", () => {
  document.getElementById("about").scrollIntoView(true);
});

// 프로젝트 템플릿

const templates = {
  cgv: document.getElementById("project-cgv").content,
  brickid: document.getElementById("project-brickid").content,
  omok: document.getElementById("project-omok").content,
  modalCgv: document.getElementById("modal-cgv").content,
  modalBrickid: document.getElementById("modal-brickid").content,
  modalOmok: document.getElementById("modal-omok").content
};

const projectEl = document.querySelector(".project-item");
const modalEl = document.querySelector(".modal-content");

// projectEl에 프로젝트 아이템 삽입 함수
function drawProject(frag, project) {
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
  const cl = document.querySelector(".main__project--container").classList;
  const now = cl[1];

  if (now !== "cgv") {
    document
      .querySelector(".main__project--container")
      .classList.remove(`${now}`);
    document.querySelector(".main__project--container").classList.add("cgv");

    const frag = document.importNode(templates.cgv, true);
    const modalFrag = document.importNode(templates.modalCgv, true);
    drawProject(frag, "cgv");
    drawModal(modalFrag);
  }
});

// brickid 클릭
const brickidButton = document.querySelector(".list-brickid");

brickidButton.addEventListener("click", () => {
  const cl = document.querySelector(".main__project--container").classList;
  const now = cl[1];

  if (now !== "brickid") {
    document
      .querySelector(".main__project--container")
      .classList.remove(`${now}`);
    document
      .querySelector(".main__project--container")
      .classList.add("brickid");

    const frag = document.importNode(templates.brickid, true);
    const modalFrag = document.importNode(templates.modalBrickid, true);

    drawProject(frag);
    drawModal(modalFrag);
  }
});

// omok 클릭
const omokButton = document.querySelector(".list-omok");

omokButton.addEventListener("click", () => {
  const cl = document.querySelector(".main__project--container").classList;
  const now = cl[1];

  if (now !== "omok") {
    document
      .querySelector(".main__project--container")
      .classList.remove(`${now}`);
    document.querySelector(".main__project--container").classList.add("omok");

    const frag = document.importNode(templates.omok, true);
    const modalFrag = document.importNode(templates.modalOmok, true);

    drawProject(frag);
    drawModal(modalFrag);
  }
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

// 기본 project로 move-site 넣어주기
(function() {
  document.querySelector(".main__project--container").classList.add("cgv");

  const frag = document.importNode(templates.cgv, true);
  const modalFrag = document.importNode(templates.modalCgv, true);

  drawProject(frag);
  drawModal(modalFrag);
})();

// 화면 노출 시 애니메이션 삽입
document.addEventListener("scroll", () => {
  const scroll = window.scrollY;
  const headerTitle = document.querySelector(".header__title--name");
  const headerIntro = document.querySelector(".header__title--intro");
  const skillChart = document.querySelector(".skill-chart");
  const skillCode = document.querySelector(".skill-code");
  if (scroll < 250) {
    headerTitle.classList.add("fadeInDown");
    headerIntro.classList.add("fadeIn");
    skillChart.classList.remove("slideInUp");
    skillCode.classList.remove("fadeIn");
  } else if (scroll > 250 && scroll < 1100) {
    headerTitle.classList.remove("fadeInDown");
    headerIntro.classList.remove("fadeIn");
    skillChart.classList.add("slideInUp");
    skillCode.classList.add("fadeIn");
  } else {
    headerTitle.classList.remove("fadeInDown");
    headerIntro.classList.remove("fadeIn");
    skillChart.classList.remove("slideInUp");
    skillCode.classList.remove("fadeIn");
  }
});

// about 그래프
// 출처: https://codepen.io/ames/pen/xZzREM?editors=0010

var w = 1000,
  h = 800,
  circleWidth = 5;

var palette = {
  lightgray: "#E5E8E8",
  gray: "#708284",
  mediumgray: "#536870",
  blue: "#3B757F"
};

var colors = d3.scale.category20();

var nodes = [
  { name: "SENA" },
  { name: "고양이", target: [0], value: 73 },
  { name: "습득력", target: [0, 1], value: 65 },
  { name: "fun", target: [0, 1, 2], value: 43 },
  { name: "예쁜 코드", target: [0, 1, 2, 8], value: 52 },
  { name: "밀크티", target: [0, 3, 4], value: 42 },
  { name: "책", target: [0, 1, 2], value: 38 },
  { name: "성장", target: [0, 3], value: 54 },
  { name: "집요", target: [0, 3, 4, 5], value: 47 }
];

var links = [];

for (var i = 0; i < nodes.length; i++) {
  if (nodes[i].target !== undefined) {
    for (var x = 0; x < nodes[i].target.length; x++)
      links.push({
        source: nodes[i],
        target: nodes[nodes[i].target[x]]
      });
  }
}

var myChart = d3
  .select("#about")
  .append("div")
  .classed("svg-container", true)

  .append("svg")
  .attr("preserveAspectRatio", "xMinYMin meet")
  .attr("viewBox", "0 0 1000 800")
  .classed("svg-content-responsive", true);

var force = d3.layout
  .force()
  .nodes(nodes)
  .links([])
  .gravity(0.1)
  .charge(-1000)
  .size([w, h]);

var link = myChart
  .selectAll("line")
  .data(links)
  .enter()
  .append("line")
  .attr("stroke", "#b8bce4")
  .attr("strokewidth", "1");

var node = myChart
  .selectAll("circle")
  .data(nodes)
  .enter()
  .append("g")
  .call(force.drag);

node
  .append("circle")
  .attr("cx", function(d) {
    return d.x;
  })
  .attr("cy", function(d) {
    return d.y;
  })
  .attr("r", function(d, i) {
    // console.log(d.value);
    if (i > 0) {
      return circleWidth + d.value;
    } else {
      return circleWidth + 20;
    }
  })
  .attr("fill", function(d, i) {
    if (i > 5) {
      return "#7875b6";
    } else if (i > 3) {
      return "#9198dd";
    } else if (i > 0) {
      return "#d5d7fc";
    } else {
      return "#fff";
    }
  });

force.on("tick", function(e) {
  node.attr("transform", function(d, i) {
    return "translate(" + d.x + "," + d.y + ")";
  });

  link
    .attr("x1", function(d) {
      return d.source.x;
    })
    .attr("y1", function(d) {
      return d.source.y;
    })
    .attr("x2", function(d) {
      return d.target.x;
    })
    .attr("y2", function(d) {
      return d.target.y;
    });
});

node
  .append("text")
  .text(function(d) {
    return d.name;
  })
  .attr("font-family", function(d, i) {
    if (i > 0) {
      return "Nanum Gothic", "sans-serif";
    } else {
      return "Playfair Display", "serif";
    }
  })
  .attr("fill", function(d, i) {
    if (i > 0 && d.value < 10) {
      return "#fff";
    } else if (i > 0 && d.value > 10) {
      return "#fff";
    } else {
      return "#7972a0";
    }
  })
  .attr("text-anchor", function(d, i) {
    return "middle";
  })
  .attr("font-size", function(d, i) {
    if (i > 0) {
      return "1.3rem";
    } else {
      return "1.3rem";
    }
  });

force.start();

// top 버튼

const top = document.querySelector(".top");

top.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
