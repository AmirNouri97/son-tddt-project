const $ = document;

let products = [];
fetch("http://localhost:3000/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    products = data;
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
    let filtered;
    let sortOrder = "";
    const productsQTY = products.length;
    const availableStateProduct = $.querySelector("#available");

    // let itemPerPage = parseInt(tableQty.value, 10) || 5;
    // let itemPerPage = parseInt(tableQty.value, 10) ?? 0;
    let itemPerPage = Number(tableQty.value) ?? 0;
    let pagesNumber = Math.ceil(productsQTY / itemPerPage);
    let currentPage = 1;

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
      const modifyForm = document.querySelector("#modify-form");

      confirmBtn.addEventListener("click", (e) => {
        modifyForm.addEventListener("submit", (e) => {
          e.preventDefault();
        });

        const priceInput = document.getElementById("modal-price");
        const formattedPrice = Number(priceInput).toLocaleString("fa-IR");
        // const formattedPrice = Number(priceInput).toLocaleString("en-US");
        console.log(formattedPrice);

        const changedItem = {
          id: id,
          name: document.getElementById("modal-name").value,
          inStock: document.getElementById("modal-available").value,
          price: document.getElementById("modal-price").value,
          count: document.getElementById("modal-qty").value,
          date: document.getElementById("modal-date").value,
          image: document.getElementById("modal-img").value,
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
      const sideBarImg = document.getElementById("sideBar-img");
      const sideBarName = document.getElementById("sideBar-name");
      const sideBarQty = document.getElementById("sideBar-qty");
      const sideBarPrice = document.getElementById("sideBar-price");
      const sideBarDate = document.getElementById("sideBar-date");
      const sideBarAvailable = document.getElementById("sideBar-available");

      let selectedItem = products.filter((item) => item.id === id);
      sideBarName.value = selectedItem[0].name;
      sideBarQty.value = selectedItem[0].count;
      sideBarPrice.value = selectedItem[0].price;
      sideBarDate.value = selectedItem[0].date;
      sideBarAvailable.value = selectedItem[0].inStock;

      sideBarCancelBtn.addEventListener("click", () => {
        sidebar.classList.remove("sideBar__show");
        document.querySelector(".overlay").classList.add("hidden");
      });

      SideBarConfirmBtn.addEventListener("click", () => {
        const changedItem = {
          id: id,
          image: document.getElementById("sideBar-img").value,
          name: document.getElementById("sideBar-name").value,
          count: document.getElementById("sideBar-qty").value,
          price: document.getElementById("sideBar-price").value,
          date: document.getElementById("sideBar-date").value,
          inStock: document.getElementById("sideBar-available").value,
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
      });
    }
    function showModifyNewPage() {
      console.log("showModifyNewPage");
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
        showModifySideBar(item.id)
      );
      tdActionBtns.appendChild(sideBarModifyBtn);
      /*new page */
      const newPageModifyBtn = document.createElement("button");
      newPageModifyBtn.textContent = "صفحه";
      newPageModifyBtn.classList.add("action__btn");
      // newPageModifyBtn.classList.add(".modify__row__btn");
      newPageModifyBtn.addEventListener("click", showModifyNewPage);
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
  });
