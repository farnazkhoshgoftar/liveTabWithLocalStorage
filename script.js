let btns = document.querySelectorAll(".btn");
let btnClickHandler = (i) => {
  localStorage.setItem("activeItem", i.getAttribute("data-item"));
  btns.forEach((element) => {
    element.classList.remove("active");
    element.classList.remove("previous");
    element.classList.remove("next");
  });
  i.classList.add("bgc");
  i.classList.add("active");
  boarderSet(i);
  let views = document.querySelectorAll(".view");
  views.forEach((j) => {
    if (j.getAttribute("data-view") == i.getAttribute("data-item")) {
      j.classList.add("active");
    } else {
      j.classList.remove("active");
    }
  });
};

let activeItem = localStorage.getItem("activeItem");
if (activeItem) {
  let farnaz = document.querySelector(`[data-item="${activeItem}"]`);
  btnClickHandler(farnaz);
}

function boarderSet(el) {
  if (el.nextElementSibling != null) {
    // el.classList.add("bordernone");
    el.nextElementSibling.classList.add("next");
  }
  if (el.previousElementSibling != null) {
    // el.classList.add("bordernone");
    el.previousElementSibling.classList.add("previous");
  }
}

btns.forEach((i) => {
  i.addEventListener("click", () => {
    console.log(i);
    btnClickHandler(i);
  });
});
