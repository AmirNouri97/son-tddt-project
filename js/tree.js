const firstChild = document.querySelectorAll(".first__child");
const secondChild = document.querySelectorAll(".second__child");
const firstParentIcon = document.querySelector(".first__parent--title-icon");
const secondParentIcons = document.querySelectorAll(
  ".second__parent--title-icon"
);
const firstParent = document.querySelector(".first__parent--title");
const secondParent = document.querySelector(".second__parent--title");
const treeIconVector = document.querySelectorAll(".tree-icon--vector");

treeIconVector.forEach((icon) => {
  icon.addEventListener("click", (e) =>
    e.currentTarget.classList.toggle("active")
  );
});

firstParentIcon.addEventListener("click", (e) => {
  firstParent.classList.toggle("red");
  firstChild.forEach((li) => {
    li.classList.toggle("active");
    li.querySelectorAll(".second__parent--title").forEach((li2) => {
      li2
        .querySelector(".second__parent--title-icon")
        .addEventListener("click", () => {
          li2.classList.toggle("red");
          li2.parentElement
            .querySelectorAll(".second__child")
            .forEach((li3) => {
              li3.classList.toggle("active");
              li3.addEventListener("click", (e) => {
                secondChild.forEach((item) => item.classList.remove("red"));
                e.currentTarget.classList.toggle("red");
              });
            });
        });
    });
  });
});
