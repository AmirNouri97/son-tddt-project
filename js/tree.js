const firstChild = document.querySelectorAll(".first__child");
const secondChild = document.querySelectorAll(".second__child");
const firstParent = document.querySelector(".first__parent--title");
const secondParent = document.querySelector(".second__parent--title");

firstParent.addEventListener("click", (e) => {
  firstChild.forEach((li) => {
    li.classList.toggle("active");
    console.log(e);
    li.addEventListener("click", (e) => {
      let secondLi = e.currentTarget;
      console.log(secondLi);
      secondLi
        .querySelectorAll(".second__child")
        .forEach((li) => li.classList.toggle("active"));
    });
  });
});
