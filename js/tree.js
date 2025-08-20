const treeData = [
  {
    name: "myComputer",
    type: "computer",
    child: [
      {
        name: "folder C",
        type: "disk",
        child: [
          {
            name: "Videos",
            type: "folder",
            child: [
              { name: "KILL BILL", type: "video", child: [] },
              { name: "PULP FICTION", type: "video", child: [] },
              { name: "TENET", type: "video", child: [] },
            ],
          },
          {
            name: "Program Files",
            type: "folder",
            child: [
              { name: "VS CODE", type: "program", child: [] },
              { name: "IDM", type: "program", child: [] },
              { name: "WIN RAR", type: "program", child: [] },
            ],
          },
          {
            name: "Pictures",
            type: "folder",
            child: [
              { name: "PIC1", type: "image", child: [] },
              { name: "PIC2", type: "image", child: [] },
              { name: "PIC3", type: "image", child: [] },
            ],
          },
          {
            name: "Games",
            type: "folder",
            child: [
              { name: "THE LAST OF US", type: "game", child: [] },
              { name: "UNCHARTED", type: "game", child: [] },
              { name: "RED DEAD REDEMPTION", type: "game", child: [] },
            ],
          },
          {
            name: "Musics",
            type: "folder",
            child: [
              { name: "Behnam Safavi", type: "music", child: [] },
              { name: "Erfan Tahmasebi", type: "music", child: [] },
            ],
          },
        ],
      },
      {
        name: "folder D",
        type: "disk",
        child: [
          { name: "Videos", type: "folder", child: [] },
          { name: "Program Files", type: "folder", child: [] },
          { name: "Musics", type: "folder", child: [] },
        ],
      },
      {
        name: "folder E",
        type: "disk",
        child: [
          { name: "Videos", type: "folder", child: [] },
          { name: "Program Files", type: "folder", child: [] },
        ],
      },
      {
        name: "folder F",
        type: "disk",
        child: [],
      },
    ],
  },
];

function createLeaf(node) {
  const li = document.createElement("li");
  const leaf = document.createElement("div");
  leaf.classList.add("leaf__div");
  const leafName = document.createElement("span");
  const iconImg = document.createElement("img");
  iconImg.classList.add("icon__img");
  switch (node.type) {
    case "computer":
      iconImg.src = "./public/assets/icons/computer.svg";
      break;
    case "folder":
      iconImg.src = "./public/assets/icons/folder.svg";
      break;
    case "disk":
      iconImg.src = "./public/assets/icons/disk.svg";
      break;
    case "music":
      iconImg.src = "./public/assets/icons/music.svg";
      break;
    case "video":
      iconImg.src = "./public/assets/icons/video.svg";
      break;
    case "game":
      iconImg.src = "./public/assets/icons/game.svg";
      break;
    case "program":
      iconImg.src = "./public/assets/icons/program.svg";
      break;
    case "image":
      iconImg.src = "./public/assets/icons/image.svg";
      break;
  }
  const iconOpenUl = document.createElement("span");
  if (node.child.length > 0) {
    iconOpenUl.textContent = "+";
  }
  iconOpenUl.addEventListener("click", () => {
    leaf.parentElement.classList.toggle("open");
    leafName.classList.toggle("selected");
    iconOpenUl.textContent = iconOpenUl.innerHTML === "+" ? "-" : "+";
  });
  // leafName.textContent = node.name;
  // leafName.textContent = `+  ${iconImg} ${node.name}`;
  leafName.textContent = node.name;
  leaf.appendChild(leafName);
  leaf.appendChild(iconImg);
  leaf.append(iconOpenUl, " ", iconImg, " ", leafName);
  leafName.addEventListener("dblclick", () => {
    console.log(leafName);
    if (iconOpenUl.textContent) {
      iconOpenUl.textContent = iconOpenUl.textContent === "+" ? "-" : "+";
    }
    leaf.parentElement.classList.toggle("open");
    // leafName.parentElement.classList.toggle("open");
    leafName.classList.toggle("selected");
  });

  li.appendChild(leaf);
  // const leafType = document.createElement("span");
  // leafType.textContent = node.type;

  // if (node.child && node.child.length > 0) {
  if (node.child.length > 0) {
    const ul = document.createElement("ul");
    node.child.forEach((child) => {
      ul.appendChild(createLeaf(child));
    });
    li.appendChild(ul);
  }
  return li;
}
const rootUl = document.createElement("ul");
treeData.forEach((node) => {
  rootUl.appendChild(createLeaf(node));
});

document.querySelector(".tree__root__container").appendChild(rootUl);

// const leafIcon = document.createElement("span");
// leafIcon.textContent = "+";

// childElement.appendChild(leafName);
// childElement.appendChild(leafType);
// childElement.appendChild(leafIcon);
// console.log(parentElement);

// return parentElement.appendChild(childElement);
// const firstChild = document.querySelectorAll(".first__child");
// const secondChild = document.querySelectorAll(".second__child");
// const firstParentIcon = document.querySelector(".first__parent--title-icon");
// const secondParentIcons = document.querySelectorAll(
//   ".second__parent--title-icon"
// );
// const firstParent = document.querySelector(".first__parent--title");
// const secondParent = document.querySelector(".second__parent--title");
// const treeIconVector = document.querySelectorAll(".tree-icon--vector");

// treeIconVector.forEach((icon) => {
//   icon.addEventListener("click", (e) =>
//     e.currentTarget.classList.toggle("active")
//   );
// });

// firstParentIcon.addEventListener("click", (e) => {
//   firstParent.classList.toggle("red");
//   firstChild.forEach((li) => {
//     li.classList.toggle("active");
//     li.querySelectorAll(".second__parent--title").forEach((li2) => {
//       li2
//         .querySelector(".second__parent--title-icon")
//         .addEventListener("click", () => {
//           li2.classList.toggle("red");
//           li2.parentElement
//             .querySelectorAll(".second__child")
//             .forEach((li3) => {
//               li3.classList.toggle("active");
//               li3.addEventListener("click", (e) => {
//                 secondChild.forEach((item) => item.classList.remove("red"));
//                 e.currentTarget.classList.toggle("red");
//               });
//             });
//         });
//     });
//   });
// });
