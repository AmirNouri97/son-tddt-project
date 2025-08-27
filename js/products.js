const $ = document;

let products = [];
async function init() {
  try {
    const res = await fetch("http://localhost:3000/products");
    const data = await res.json();
    products = data;

    console.log(data);

    let finalData;
    let copyProducts = products.slice();
    const tableQty = $.querySelector("#table__qty-id");

    const tableBody = $.querySelector("tbody");
    const paginationWrapper = $.querySelector(".pagination__numbers__wrapper");
    const firstPageBtn = $.querySelector(".first__page");
    const prevPageBtn = $.querySelector(".prev__page");
    const nextPageBtn = $.querySelector(".next__page");
    const lastPageBtn = $.querySelector(".last__page");
    const thGroup = $.querySelectorAll("thead tr th");
    const sortBtns = $.querySelectorAll(".sort-arrow");
    const addRowIcon = $.querySelector(".table__add__new__item__icon");
    let filtered;
    let sortOrder = "";
    const productsQTY = products.length;
    const availableStateProduct = $.querySelector("#available");
    const tableAddNewItemBtn = $.querySelector(".table__add__new__item");
    // let itemPerPage = parseInt(tableQty.value, 10) || 5;
    // let itemPerPage = parseInt(tableQty.value, 10) ?? 0;
    let itemPerPage = Number(tableQty.value) ?? 0;
    let pagesNumber = Math.ceil(productsQTY / itemPerPage);
    let currentPage = 1;
    let uploadedImage = "";

    let allPageNumbers = [];
    function clearSpanInner() {
      sortBtns.forEach((span) => {
        span.innerHTML = "";
      });
    }
    function activePage(page) {
      if (page < 1) page = 1;
      if (page > pagesNumber) page = pagesNumber;

      currentPage = page; //3
      showRows();
      updateActivePageUI();
    }
    function changeImgToBase64(fileInputId, imgId, callBack) {
      const fileInput = document.getElementById(fileInputId);
      const imgPreview = document.getElementById(imgId);

      fileInput.addEventListener("change", (e) => {
        const file = fileInput.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            const base64Img = e.target.result;
            if (imgPreview) {
              imgPreview.src = base64Img;
            }
            if (callBack && typeof callBack === "function") {
              callBack(base64Img);
            }
          };
          reader.readAsDataURL(file);
        }
      });
    }
    let uploadedImageModal = "";
    changeImgToBase64("modal-img", "modal-img-preview", (base64) => {
      uploadedImageModal = base64;
    });

    let uploadedImageNew = "";
    changeImgToBase64("modal-new-img", "modal-new-img-preview", (base64) => {
      uploadedImageNew = base64;
    });

    let uploadedImageSideBar = "";
    changeImgToBase64("sideBar-img", "sideBar-preview", (base64) => {
      uploadedImageSideBar = base64;
    });
    tableAddNewItemBtn.addEventListener("click", () => {
      const ulElem = $.querySelector(".table__add__new__item__list");

      ulElem.classList.toggle("show");
      if (ulElem.classList.contains("show")) {
        $.querySelector(".table__add__new__item__icon img").style.transform =
          "rotateX(180deg)";
      } else {
        $.querySelector(".table__add__new__item__icon img").style.transform =
          "rotateX(0deg)";
      }
      let lastItemId = products[products.length - 1].id;
      const openModalORSideBar = ulElem.querySelectorAll("li");

      openModalORSideBar.forEach((li) =>
        li.addEventListener("click", (e) => {
          selectedLiElem = e.currentTarget.getAttribute("data-value");
          ulElem.classList.remove("show");
          switch (selectedLiElem) {
            case "open-modal":
              // console.log("modal");
              addNewItem(lastItemId);
              break;
            case "open-sideBar":
              showModifySideBar(String(Number(lastItemId) + 1));
              console.log("side");
              break;
          }
        })
      );

      // addNewItem(String(Number(products[products.length - 1].id) + 1));
    });
    function addNewItem(lastId) {
      $.querySelector(".add__modal").classList.remove("hidden");
      $.querySelector(".overlay").classList.remove("hidden");

      const addModalConfirmBtn = $.querySelector(".add__modal--confirm__btn");
      const addModalCancelBtn = $.querySelector(".add__modal--cancel__btn");
      // console.log(typeof +lastId);

      changeImgToBase64(
        "modal-new-img",
        "modal-new-img-preview",
        (b64) => (uploadedImageNew = b64)
      );

      addModalConfirmBtn.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("mmd");

        const newItem = {
          id: String(+lastId + 1),
          name: $.getElementById("modal-new-name").value || "نامشخص",
          image:
            uploadedImageNew || "/public/assets/icons/product-test-img.svg",
          count: $.getElementById("modal-new-qty").value || 0,
          price: $.getElementById("modal-new-price").value || "0",
          date: $.getElementById("modal-new-date").value || "1404/01/01",
          inStock: $.getElementById("modal-new-available").value,
        };
        fetch(`http://localhost:3000/products`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newItem),
        })
          .then((res) => res.json())
          .then((data) => {
            $.querySelector(".add__modal").classList.add("hidden");
            document.querySelector(".overlay").classList.add("hidden");
            console.log(data);
            // addModalConfirmBtn.removeEventListener("click", handleConfirm);
          });
      });
      addModalCancelBtn.addEventListener("click", () => {
        $.querySelector(".add__modal").classList.add("hidden");
        document.querySelector(".overlay").classList.add("hidden");
        // addModalCancelBtn.removeEventListener("click", handleConfirm);
      });
    }
    function showRows(data = copyProducts) {
      tableBody.textContent = "";
      const startIndex = (currentPage - 1) * itemPerPage;
      const endIndex = startIndex + itemPerPage;
      console.log(startIndex, endIndex);
      // console.log(copyProducts);

      const productForCurrentPage = data.slice(startIndex, endIndex);
      finalData = productForCurrentPage.slice();
      console.log(finalData, "finalData");

      finalData.forEach((item) => createRow(item));
    }

    function updateActivePageUI() {
      allPageNumbers.forEach((p) => p.classList.remove("active"));
      const activeBtn = allPageNumbers.find(
        (btn) => parseInt(btn.textContent, 10) === currentPage
      );
      if (activeBtn) activeBtn.classList.add("active");
    }

    function showModifyModal(id) {
      console.log("showModifyModal");
      document.querySelector(".overlay").classList.remove("hidden");
      document.querySelector(".edit__modal").classList.remove("hidden");
      const confirmBtn = document.querySelector(".edit__modal--confirm__btn");
      const cancelBtn = document.querySelector(".edit__modal--cancel__btn");
      //confirm
      const modalName = document.getElementById("modal-name");
      const modalImg = document.getElementById("modal-img");
      const modalAvailable = document.getElementById("modal-available");
      const modalQty = document.getElementById("modal-qty");
      const modalPrice = document.getElementById("modal-price");
      const modalDate = document.getElementById("modal-date");
      let selectedItem = products.filter((item) => item.id === id);
      // console.log(selectedItem);
      // modalImg.value = selectedItem[0].image;
      modalName.value = selectedItem[0].name;
      modalQty.value = selectedItem[0].count;
      modalPrice.value = selectedItem[0].price;
      modalDate.value = selectedItem[0].date;
      modalAvailable.value = selectedItem[0].inStock;
      modalImg.src = selectedItem[0].image;
      const modifyForm = document.querySelector("#modify-form");
      uploadedImageModal = selectedItem[0].image;

      changeImgToBase64(
        "modal-img",
        "modal-img-preview",
        (b64) => (uploadedImageModal = b64)
      );

      confirmBtn.addEventListener("click", (e) => {
        modifyForm.addEventListener("submit", (e) => {
          e.preventDefault();

          const priceInput = document.getElementById("modal-price");
          const formattedPrice = Number(priceInput.value).toLocaleString(
            "fa-IR"
          );
          // const formattedPrice = Number(priceInput).toLocaleString("en-US");
          console.log(formattedPrice);
          if (
            document.getElementById("modal-name").value &&
            document.getElementById("modal-qty").value &&
            document.getElementById("modal-price").value &&
            document.getElementById("modal-date").value &&
            document.getElementById("modal-available").value
          ) {
            const changedItem = {
              id: id,
              name: document.getElementById("modal-name").value,
              inStock:
                Number(document.getElementById("modal-qty").value) === 0
                  ? "خیر"
                  : "بله",
              price: document.getElementById("modal-price").value,
              count: document.getElementById("modal-qty").value,
              date: document.getElementById("modal-date").value,
              image:
                uploadedImageModal ||
                "/public/assets/icons/product-test-img.svg",
            };

            fetch(`http://localhost:3000/products/${id}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(changedItem),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log("updated");
                document.querySelector(".overlay").classList.add("hidden");
                document.querySelector(".edit__modal").classList.add("hidden");
              })
              .catch((err) => console.error(err));
          }
        });
      });
      //cancel
      cancelBtn.addEventListener("click", () => {
        document.querySelector(".overlay").classList.add("hidden");
        document.querySelector(".edit__modal").classList.add("hidden");
      });
    }
    function showModifySideBar(id) {
      console.log("showModifySideBar");
      const sidebar = document.querySelector(".edit__sideBar");
      sidebar.classList.add("sideBar__show");
      document.querySelector(".overlay").classList.remove("hidden");

      const SideBarConfirmBtn = document.querySelector(
        ".edit__sideBar--confirm__btn"
      );
      const sideBarCancelBtn = document.querySelector(
        ".edit__sideBar--cancel__btn"
      );
      // const sideBarImg = document.getElementById("sideBar-img");
      const sideBarName = document.getElementById("sideBar-name");
      const sideBarQty = document.getElementById("sideBar-qty");
      const sideBarPrice = document.getElementById("sideBar-price");
      const sideBarDate = document.getElementById("sideBar-date");
      const sideBarAvailable = document.getElementById("sideBar-available");
      changeImgToBase64("sideBar-img", "sideBar-preview", (base64) => {
        uploadedImage = base64;
      });
      let selectedItem = products.filter((item) => item.id === id);
      const sideBarMsg = $.querySelector("#modify-form-sideBar h2");
      console.log(sideBarMsg);

      if (selectedItem.length > 0) {
        sideBarMsg.textContent = "آیا از تغییر این ردیف مطمئن هستید؟";
        sideBarName.value = selectedItem[0].name;
        sideBarQty.value = selectedItem[0].count;
        sideBarPrice.value = selectedItem[0].price;
        sideBarDate.value = selectedItem[0].date;
        sideBarAvailable.value = selectedItem[0].inStock;
      } else {
        sideBarMsg.textContent = "آیا از اضافه نمودن این ایتم مطمئن هستید؟";
        sideBarName.value = "";
        sideBarQty.value = "";
        sideBarPrice.value = 0;
        sideBarDate.value = "";
        sideBarAvailable.value = null;
      }

      sideBarCancelBtn.addEventListener("click", () => {
        sidebar.classList.remove("sideBar__show");
        document.querySelector(".overlay").classList.add("hidden");
      });

      SideBarConfirmBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (selectedItem.length > 0) {
          const qty = Number(document.getElementById("sideBar-qty").value);
          if (
            sideBarName.value &&
            sideBarQty.value &&
            sideBarPrice.value &&
            sideBarDate.value &&
            sideBarAvailable.value
          ) {
            const changedItem = {
              id: id,
              image:
                uploadedImage || "/public/assets/icons/product-test-img.svg",
              name: document.getElementById("sideBar-name").value,
              count: document.getElementById("sideBar-qty").value,
              price: document.getElementById("sideBar-price").value,
              date: document.getElementById("sideBar-date").value,
              inStock:
                qty === 0
                  ? "خیر"
                  : document.getElementById("sideBar-available").value,
            };
            fetch(`http://localhost:3000/products/${id}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(changedItem),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log("updated");
                document.querySelector(".overlay").classList.add("hidden");
                sidebar.classList.remove("sideBar__show");
              })
              .catch((err) => console.error(err));
          }
        } else {
          const newItem = {
            id: String(id),
            name: $.getElementById("sideBar-name").value || "نامشخص",
            image:
              uploadedImageNew || "/public/assets/icons/product-test-img.svg",
            count: $.getElementById("sideBar-qty").value || 0,
            price: $.getElementById("sideBar-price").value || "0",
            date: $.getElementById("sideBar-date").value || "1404/01/01",
            inStock:
              $.getElementById("sideBar-available").value || "درحال تامین",
          };
          fetch(`http://localhost:3000/products`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newItem),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log("updated");
              document.querySelector(".overlay").classList.add("hidden");
              sidebar.classList.remove("sideBar__show");
            })
            .catch((err) => console.error(err));
        }
      });
    }
    function showModifyNewPage(id) {
      console.log("showModifyNewPage");
      console.log(id);

      localStorage.setItem("selectedItem", `${id}`);
      window.location.href = "/editFormPage.html";
    }
    function removeRowHandler(id) {
      console.log("removeRowHandler");
      document.querySelector(".overlay").classList.remove("hidden");
      document.querySelector(".delete__modal").classList.remove("hidden");
      const confirmBtn = document.querySelector(".delete__modal--confirm__btn");
      const cancelBtn = document.querySelector(".delete__modal--cancel__btn");
      confirmBtn.addEventListener("click", () => {
        fetch(`http://localhost:3000/products/${id}`, {
          method: "DELETE",
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error("delete was not done!");
            }
            products = products.filter((item) => item.id !== id);
            console.log(products);

            copyProducts = copyProducts.filter((item) => item.id !== id);

            pagesNumber = Math.ceil(copyProducts.length / itemPerPage);
            if (currentPage > pagesNumber) pagesNumber = currentPage;
            renderPagination();
            showRows();
            document.querySelector(".overlay").classList.add("hidden");
            document.querySelector(".delete__modal").classList.add("hidden");
          })
          .catch((err) => console.error(err));
      });
      cancelBtn.addEventListener("click", () => {
        document.querySelector(".overlay").classList.add("hidden");
        document.querySelector(".delete__modal").classList.add("hidden");
      });
    }

    function createRow(item) {
      // console.log(item);

      const tr = $.createElement("tr");

      const tdID = $.createElement("td");
      tdID.textContent = item.id;
      tr.appendChild(tdID);

      const tdImg = $.createElement("td");
      const img = $.createElement("img");
      img.src = item.image;
      img.alt = item.name;
      tdImg.appendChild(img);
      tr.appendChild(tdImg);

      const tdName = $.createElement("td");
      tdName.textContent = item.name;
      tr.appendChild(tdName);

      const tdCount = $.createElement("td");
      tdCount.textContent = item.count;
      tr.appendChild(tdCount);

      const tdPrice = $.createElement("td");
      tdPrice.textContent = Number(item.price).toLocaleString("fa-IR");
      tr.appendChild(tdPrice);

      const tdDate = $.createElement("td");
      tdDate.textContent = item.date;
      tr.appendChild(tdDate);

      const tdInStock = $.createElement("td");
      const spanInStock = $.createElement("span");
      spanInStock.textContent = item.inStock;
      spanInStock.classList.add("status");

      if (item.inStock === "بله") {
        spanInStock.classList.add("success");
      } else if (item.inStock === "خیر") {
        spanInStock.classList.add("cancelled");
      } else if (item.inStock === "درحال تامین") {
        spanInStock.classList.add("pending");
      }

      tdInStock.appendChild(spanInStock);
      tr.appendChild(tdInStock);
      /*action btns*/
      const tdActionBtns = $.createElement("td");
      /*modal */
      const modalModifyBtn = document.createElement("button");
      modalModifyBtn.textContent = "مودال";
      modalModifyBtn.classList.add("action__btn");
      modalModifyBtn.addEventListener("click", () => showModifyModal(item.id));
      tdActionBtns.appendChild(modalModifyBtn);
      /*sidebar*/
      const sideBarModifyBtn = document.createElement("button");
      sideBarModifyBtn.textContent = "ساید بار";
      sideBarModifyBtn.classList.add("action__btn");
      sideBarModifyBtn.addEventListener("click", () =>
        showModifySideBar(item.id, img)
      );
      tdActionBtns.appendChild(sideBarModifyBtn);
      /*new page */
      const newPageModifyBtn = document.createElement("button");
      newPageModifyBtn.textContent = "صفحه";
      newPageModifyBtn.classList.add("action__btn");
      // newPageModifyBtn.classList.add(".modify__row__btn");
      newPageModifyBtn.addEventListener("click", () =>
        showModifyNewPage(item.id, img)
      );
      tdActionBtns.appendChild(newPageModifyBtn);
      /*remove row*/
      const removeRowBtn = document.createElement("button");
      removeRowBtn.textContent = "حذف";
      removeRowBtn.classList.add("action__btn");
      removeRowBtn.classList.add("remove__row__btn");
      removeRowBtn.addEventListener("click", () => removeRowHandler(item.id));
      tdActionBtns.appendChild(removeRowBtn);

      tr.appendChild(tdActionBtns);
      tableBody.appendChild(tr);
    }

    function renderPagination(startPage = 1) {
      paginationWrapper.innerHTML = "";
      allPageNumbers = [];

      // دکمه صفحه اول (اگر شروع صفحه بیشتر از 1 باشد)
      if (startPage > 1) {
        const firstPageDiv = $.createElement("div");
        firstPageDiv.textContent = "1";
        firstPageDiv.classList.add("pagination__number");
        firstPageDiv.addEventListener("click", () => activePage(1));
        paginationWrapper.appendChild(firstPageDiv);
        allPageNumbers.push(firstPageDiv);

        // سه‌نقطه برای صفحات قبلی
        const prevDots = $.createElement("div");
        prevDots.textContent = "...";
        prevDots.classList.add("pagination__number");
        prevDots.addEventListener("click", () => {
          const newStart = Math.max(1, startPage - 3);
          renderPagination(newStart);
        });
        paginationWrapper.appendChild(prevDots);
      }

      // تعیین آخرین صفحه برای نمایش در Pagination
      const endPage = Math.min(startPage + 2, pagesNumber);

      // دکمه‌های صفحات اصلی
      for (let i = startPage; i <= endPage; i++) {
        const pageDiv = $.createElement("div");
        pageDiv.textContent = i;
        pageDiv.classList.add("pagination__number");
        pageDiv.addEventListener("click", () => activePage(i));
        paginationWrapper.appendChild(pageDiv);
        allPageNumbers.push(pageDiv);
      }

      // سه‌نقطه برای صفحات بعدی
      if (endPage < pagesNumber - 1) {
        const nextDots = $.createElement("div");
        nextDots.textContent = "...";
        nextDots.classList.add("pagination__number");
        nextDots.addEventListener("click", () => {
          const newStart = endPage + 1;
          renderPagination(newStart);
        });
        paginationWrapper.appendChild(nextDots);
      }

      // دکمه صفحه آخر (اگر لازم باشد)
      if (endPage < pagesNumber) {
        const lastPageDiv = $.createElement("div");
        lastPageDiv.textContent = pagesNumber;
        lastPageDiv.classList.add("pagination__number");
        lastPageDiv.addEventListener("click", () => activePage(pagesNumber));
        paginationWrapper.appendChild(lastPageDiv);
      }
      allPageNumbers = Array.from(
        paginationWrapper.querySelectorAll(".pagination__number")
      );
      updateActivePageUI();
    }
    function unSorted(data) {
      return data.slice();
    }
    function ascendingSorted(valA, valB) {
      return valA - valB;
    }
    function descendingSorted(valA, valB) {
      return valB - valA;
    }
    function sortbyNumber(data, field, sortOrder) {
      if (sortOrder === "") return data.slice();
      return data.slice().sort((a, b) => {
        let valA = a[field];
        let valB = b[field];
        if (typeof valA === "string") {
          valA =
            Number(valA.replace(/,/g, "")) || Number(valA.replace(/\//g, ""));
        }
        if (typeof valB === "string") {
          valB =
            Number(valB.replace(/,/g, "")) || Number(valB.replace(/\//g, ""));
        }
        return sortOrder === "↑"
          ? ascendingSorted(valA, valB)
          : descendingSorted(valA, valB);
      });
      // if (sortOrder === "") {
      //   // console.log(availableStateProduct.value);.3
      //   if (availableStateProduct.value === "همه") {
      //     return unSorted(products);
      //   } else {
      //     return unSorted(filtered);
      //   }
      // }
      // copyProducts = data.slice().sort((a, b) => {
      //   let valA = a[field];
      //   let valB = b[field];
      //   // console.log(valA, valB);

      //   if (typeof valA === "string") {
      //     valA = Number(valA.replace(/,/g, "")) || Number(valA.replace(/\//g, ""));
      //   }
      //   if (typeof valB === "string") {
      //     valB = Number(valB.replace(/,/g, "")) || Number(valB.replace(/\//g, ""));
      //   }

      //   if (sortOrder === "↑") {
      //     return ascendingSorted(valA, valB);
      //   } else if (sortOrder === "↓") {
      //     return descendingSorted(valA, valB);
      //   }
      // });
      // return copyProducts;
    }

    function sortbyName(data, field, sortOrder) {
      // if (sortOrder === "") {
      //   if (availableStateProduct.value === "همه") {
      //     return unSorted(products);
      //   }
      //   return unSorted(filtered);
      // }
      // copyProducts = data.slice().sort((a, b) => {
      //   let valA = a[field];
      //   let valB = b[field];
      //   // console.log(valA, valB);
      //   if (sortOrder === "↑") {
      //     return a.name.localeCompare(b.name);
      //   } else if (sortOrder === "↓") {
      //     return b.name.localeCompare(a.name);
      //   }
      // });

      if (sortOrder === "") {
        return data.slice();
      }
      return data.slice().sort((a, b) => {
        return sortOrder === "↑"
          ? a[field].localeCompare(b[field])
          : b[field].localeCompare(a[field]);
      });
    }
    function sortbyAvailable(data, field, sortOrder) {
      if (sortOrder === "همه") {
        clearSpanInner();
        copyProducts = unSorted(products);
        pagesNumber = Math.ceil(copyProducts.length / itemPerPage);
        currentPage = 1;
        return copyProducts;
      }

      let productsStatusArr = data.slice().filter((item) => {
        return item[field] === sortOrder;
      });
      copyProducts = productsStatusArr;
      pagesNumber = Math.ceil(productsStatusArr.length / itemPerPage);
      currentPage = 1;
      return productsStatusArr;
    }

    tableQty.addEventListener("change", () => {
      itemPerPage = Number(tableQty.value);
      // pagesNumber = Math.ceil(productsQTY / itemPerPage);
      pagesNumber = Math.ceil(copyProducts.length / itemPerPage);
      currentPage = 1;
      renderPagination(1);
      showRows();
    });

    nextPageBtn.addEventListener("click", () => {
      if (currentPage < pagesNumber) activePage(currentPage + 1);
    });
    prevPageBtn.addEventListener("click", () => {
      if (currentPage > 1) activePage(currentPage - 1);
    });
    firstPageBtn.addEventListener("click", () => activePage(1));
    lastPageBtn.addEventListener("click", () => activePage(pagesNumber));

    window.addEventListener("load", () => {
      renderPagination(1);
      showRows();
    });
    thGroup.forEach((th) => {
      th.addEventListener("click", (e) => {
        const clickedTh = e.currentTarget;

        let sortName = clickedTh.getAttribute("data-value");
        // const spans = $.querySelectorAll(".sort");
        // console.log(sortName);
        document.querySelectorAll("span.sort-arrow").forEach((s) => {
          if (s !== clickedTh.querySelector("span.sort-arrow"))
            s.innerHTML = "";
        });

        const span = clickedTh.querySelector("span.sort-arrow");

        if (!span) return;
        sortOrder = span.innerHTML.trim();
        // console.log(sortOrder);
        if (sortOrder === "") {
          sortOrder = "↓";
          span.innerHTML = sortOrder;
        } else if (sortOrder === "↓") {
          sortOrder = "↑";
          span.innerHTML = sortOrder;
        } else if (sortOrder === "↑") {
          sortOrder = "";
          span.innerHTML = sortOrder;
        } else {
          return 0;
        }

        // switch (sortName.trim()) {
        //   case "ردیف":
        //     showRows(sortbyNumber(finalData, "id", sortOrder));
        //     break;
        //   case "تعداد":
        //     showRows(sortbyNumber(finalData, "count", sortOrder));
        //     break;
        //   case "قیمت":
        //     showRows(sortbyNumber(finalData, "price", sortOrder));
        //     break;
        //   case "تاریخ":
        //     showRows(sortbyNumber(finalData, "date", sortOrder));
        //     break;
        //   case "اسم":
        //     showRows(sortbyName(finalData, "name", sortOrder));
        //     break;
        //   default:
        //     sortedPageData = finalData;
        // }
        // });
        let sortedPageData = [];
        switch (sortName.trim()) {
          case "ردیف":
            sortedPageData = sortbyNumber(finalData, "id", sortOrder);
            break;
          case "تعداد":
            sortedPageData = sortbyNumber(finalData, "count", sortOrder);
            break;
          case "قیمت":
            sortedPageData = sortbyNumber(finalData, "price", sortOrder);
            break;
          case "تاریخ":
            sortedPageData = sortbyNumber(finalData, "date", sortOrder);
            break;
          case "اسم":
            sortedPageData = sortbyName(finalData, "name", sortOrder);
            break;
          default:
            sortedPageData = finalData;
        }

        // نمایش مجدد همون صفحه با آیتم‌های سورت‌شده
        tableBody.textContent = "";
        sortedPageData.forEach((item) => createRow(item));
      });
    });

    // sortBtns.forEach((btn) => {
    //   btn.addEventListener("click", (e) => {
    //     console.log(sortOrder);
    //   });
    // });
    availableStateProduct.addEventListener("change", () => {
      let state = availableStateProduct.value;
      filtered = sortbyAvailable(products, "inStock", state);
      pagesNumber = Math.ceil(filtered.length / itemPerPage);
      showRows(filtered);
      renderPagination(1);
    });
  } catch (err) {
    console.error("خطا در فچ:", err);
  }
}
init();
