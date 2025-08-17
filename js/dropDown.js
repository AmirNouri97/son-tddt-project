const dropDownSimpleListTrigger = document.querySelector(".trigger-1");
const dropDownMenuSimple = document.querySelector(".menu-simple");
const arrowSimpleList = document.querySelector(".arrow-1 svg");
const colorPalette = [
  "#4D96FF", // آبی روشن
  "#6BCB77", // سبز نرم
  "#FFD93D", // زرد گرم
  "#FF6B6B", // قرمز صورتی
  "#9D4EDD", // بنفش روشن
  "#00C2A8", // سبزآبی
  "#FF9F1C", // نارنجی روشن
  "#5C5470", // خاکستری مایل به بنفش
  "#F07167", // مرجانی
  "#3A86FF", // آبی تیره‌تر
];
function showList(list, arrow) {
  list.classList.toggle("active");
  if (list.classList.contains("active")) {
    arrow.style.transform = "rotateX(0deg)";
  } else {
    arrow.style.transform = "rotateX(180deg)";
  }
}
function clickOutside(trigger, list, arrow) {
  if (!trigger.contains(event.target) && !list.contains(event.target)) {
    list.classList.remove("active");
    arrow.style.transform = "rotateX(180deg)";
  }
}

dropDownSimpleListTrigger.addEventListener("click", (e) => {
  showList(dropDownMenuSimple, arrowSimpleList);
});
const triggerValueSimple = document.querySelector(".simple__trigger__value");
const optionSimpleList = document.querySelectorAll(".menu-simple li");
optionSimpleList.forEach((opt) => {
  opt.addEventListener("click", (e) => {
    let selected = e.target.innerHTML;
    triggerValueSimple.innerHTML = selected;
    dropDownMenuSimple.classList.remove("active");
    arrowSimpleList.style.transform = "rotateX(180deg)";
  });
});
document.addEventListener("click", (event) => {
  clickOutside(dropDownSimpleListTrigger, dropDownMenuSimple, arrowSimpleList);
  clickOutside(dropDownMultiListTrigger, dropDownMenuMulti, arrowMultiList);
});

const dropDownMultiListTrigger = document.querySelector(".trigger-2");
const dropDownMenuMulti = document.querySelector(".menu-multi");
const checkedCity = document.querySelectorAll(".menu-multi li input");
const arrowMultiList = document.querySelector(".arrow-2 svg");
const triggerValueMulti = document.querySelector(".multi__trigger__value");
const selectedCitiesContainer =
  dropDownMultiListTrigger.querySelector(".selected__cities");
dropDownMultiListTrigger.addEventListener("click", () => {
  showList(dropDownMenuMulti, arrowMultiList);
});

let colorIndex = 0;
function pickColor() {
  let color = colorPalette[colorIndex];
  colorIndex = (colorIndex + 1) % colorPalette.length;
  return color;
}
document.querySelectorAll(".menu-multi li").forEach((li) => {
  const cityName = li.textContent.trim();
  const cityValue = li.getAttribute("data-value");
  li.addEventListener("click", function () {
    let checkBox = li.querySelector("input[type=checkbox]");
    console.log(checkBox);
    checkBox.checked = true;
    const cityDiv = document.createElement("div");
    cityDiv.setAttribute("data-value", cityValue);
    const borderColor = pickColor();
    cityDiv.style.setProperty("--border-color", borderColor);
    cityDiv.style.border = `2px solid ${borderColor}`;
    cityDiv.classList.add("newCity");

    cityDiv.innerHTML = `
        <span>${cityName}</span>
        <div class="cancel" style="cursor:pointer;">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            width="16px"
            height="16px"
            viewBox="0 0 32 32"
            version="1.1"
          >
            <title>cancel</title>
            <path
              d="M10.771 8.518c-1.144 0.215-2.83 2.171-2.086 2.915l4.573 4.571-4.573 4.571c-0.915 0.915 1.829 3.656 2.744 2.742l4.573-4.571 4.573 4.571c0.915 0.915 3.658-1.829 2.744-2.742l-4.573-4.571 4.573-4.571c0.915-0.915-1.829-3.656-2.744-2.742l-4.573 4.571-4.573-4.571c-0.173-0.171-0.394-0.223-0.657-0.173v0zM16 1c-8.285 0-15 6.716-15 15s6.715 15 15 15 15-6.716 15-15-6.715-15-15-15zM16 4.75c6.213 0 11.25 5.037 11.25 11.25s-5.037 11.25-11.25 11.25-11.25-5.037-11.25-11.25c0.001-6.213 5.037-11.25 11.25-11.25z"
            />
          </svg>
        </div>
      `;
    cityDiv.querySelector(".cancel").addEventListener("click", (e) => {
      e.stopPropagation();
      checkBox.checked = false;
      selectedCitiesContainer.removeChild(cityDiv);
    });
    if (!selectedCitiesContainer.querySelector(`[data-value="${cityValue}"]`))
      selectedCitiesContainer.appendChild(cityDiv);
  });
});
// checkedCity.forEach((checkBox) => {
//   checkBox.addEventListener("change", (e) => {
//     //create li element
//     const li = e.target.parentElement;
//     const cityName = li.textContent.trim();
//     const cityValue = li.getAttribute("data-value");

//     if (e.target.checked) {
// const cityDiv = document.createElement("div");
// cityDiv.setAttribute("data-value", cityName);
// const borderColor = pickColor();
// cityDiv.style.setProperty("--border-color", borderColor);
// cityDiv.style.border = `2px solid ${borderColor}`;
// cityDiv.classList.add("newCity");

// cityDiv.innerHTML = `
//         <span>${cityName}</span>
//         <div class="cancel" style="cursor:pointer;">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="#000000"
//             width="16px"
//             height="16px"
//             viewBox="0 0 32 32"
//             version="1.1"
//           >
//             <title>cancel</title>
//             <path
//               d="M10.771 8.518c-1.144 0.215-2.83 2.171-2.086 2.915l4.573 4.571-4.573 4.571c-0.915 0.915 1.829 3.656 2.744 2.742l4.573-4.571 4.573 4.571c0.915 0.915 3.658-1.829 2.744-2.742l-4.573-4.571 4.573-4.571c0.915-0.915-1.829-3.656-2.744-2.742l-4.573 4.571-4.573-4.571c-0.173-0.171-0.394-0.223-0.657-0.173v0zM16 1c-8.285 0-15 6.716-15 15s6.715 15 15 15 15-6.716 15-15-6.715-15-15-15zM16 4.75c6.213 0 11.25 5.037 11.25 11.25s-5.037 11.25-11.25 11.25-11.25-5.037-11.25-11.25c0.001-6.213 5.037-11.25 11.25-11.25z"
//             />
//           </svg>
//         </div>
//       `;
//       cityDiv.querySelector(".cancel").addEventListener("click", () => {
//
//         cityDiv.remove();
//       });
//       selectedCitiesContainer.appendChild(cityDiv);
//     } else {
//       const cityDivToRemove = selectedCitiesContainer.querySelector(
//         `div[data-value="${cityValue}"]`
//       );
//       console.log(cityDivToRemove);
//       if (cityDivToRemove) cityDivToRemove.remove();
//     }
//   });
// });

// document.querySelectorAll(".drop-down__menu li").forEach((liElem) =>
//   liElem.addEventListener("click", function (e) {
//     let checkBox;
//     if (e.target.tagName != "INPUT") {
//       checkBox = liElem.querySelector("input[type=checkbox]");
//       checkBox.checked = true;
//     }
//     const li = e.currentTarget;
//     const cityName = li.textContent.trim();
//     const cityValue = li.getAttribute("data-value");
//     console.log(cityValue);
//     const cityDiv = document.createElement("div");
//     cityDiv.setAttribute("data-value", cityName);
//     const borderColor = pickColor();
//     cityDiv.style.setProperty("--border-color", borderColor);
//     cityDiv.style.border = `2px solid ${borderColor}`;
//     cityDiv.classList.add("newCity");
//     cityDiv.innerHTML = `
//         <span>${cityName}</span>
//         <div class="cancel" style="cursor:pointer;">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="#000000"
//             width="16px"
//             height="16px"
//             viewBox="0 0 32 32"
//             version="1.1"
//           >
//             <title>cancel</title>
//             <path
//               d="M10.771 8.518c-1.144 0.215-2.83 2.171-2.086 2.915l4.573 4.571-4.573 4.571c-0.915 0.915 1.829 3.656 2.744 2.742l4.573-4.571 4.573 4.571c0.915 0.915 3.658-1.829 2.744-2.742l-4.573-4.571 4.573-4.571c0.915-0.915-1.829-3.656-2.744-2.742l-4.573 4.571-4.573-4.571c-0.173-0.171-0.394-0.223-0.657-0.173v0zM16 1c-8.285 0-15 6.716-15 15s6.715 15 15 15 15-6.716 15-15-6.715-15-15-15zM16 4.75c6.213 0 11.25 5.037 11.25 11.25s-5.037 11.25-11.25 11.25-11.25-5.037-11.25-11.25c0.001-6.213 5.037-11.25 11.25-11.25z"
//             />
//           </svg>
//         </div>
//       `;
//     cityDiv.querySelector(".cancel").addEventListener("click", () => {
//       checkBox.checked = false;
//       cityDiv.remove();
//     });
//     selectedCitiesContainer.appendChild(cityDiv);
//   })
// );

// function createLiElem(e) {
//   const li = e.target.parentElement;
//   const cityName = li.textContent.trim();
//   const cityValue = li.getAttribute("data-value");
//   return li;
// }
