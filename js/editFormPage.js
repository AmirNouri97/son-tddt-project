const formNameInputElem = document.getElementById("form-name__page");
const formImgInputElem = document.getElementById("form-img__page");
const formQtyInputElem = document.getElementById("form-qty__page");
const formPriceInputElem = document.getElementById("form-price__page");
const formDateInputElem = document.getElementById("form-date__page");
const formAvailableInputElem = document.getElementById("form-available__page");
let itemId;
window.addEventListener("DOMContentLoaded", () => {
  itemId = localStorage.getItem("selectedItem");
  console.log(typeof itemId);

  fetch(`http://localhost:3000/products/${itemId}`)
    .then((res) => res.json())
    .then((data) => {
      formNameInputElem.value = data.name;
      //   formImgInputElem.value = data.img;
      formQtyInputElem.value = data.count;
      formPriceInputElem.value = data.price;
      formDateInputElem.value = data.date;
      formAvailableInputElem.value = data.inStock;
    });
});
const editFormConfirmBtn = document.querySelector(".edit__form--confirm__btn");
const editFormCancelBtn = document.querySelector(".edit__form--cancel__btn");
editFormConfirmBtn.addEventListener("click", () => {
  if (
    formNameInputElem.value &&
    formQtyInputElem.value &&
    formPriceInputElem.value &&
    formDateInputElem.value &&
    formAvailableInputElem.value
  ) {
    const changedItem = {
      id: itemId,
      name: formNameInputElem.value,
      count: formQtyInputElem.value,
      price: formPriceInputElem.value,
      date: formDateInputElem.value,
      inStock: Number(formQtyInputElem.value) === 0 ? "خیر" : "بله",
    };
    console.log(changedItem);
    fetch(`http://localhost:3000/products/${itemId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(changedItem),
    })
      .then((res) => res.json())
      .then((data) => {
        window.location.href = "table.html";
      });
  }
});
editFormCancelBtn.addEventListener("click", () => {
  document
    .getElementById("modify-form__page")
    .addEventListener("submit", (e) => {
      e.preventDefault();
    });

  window.location.href = "table.html";
});
