const $ = document;

// const products = [
//   {
//     id: 1,
//     image: "/public/assets/icons/product-test-img.svg",
//     name: "لپ‌تاپ",
//     count: 0,
//     price: "78,235,000",
//     date: "1403/10/07",
//     inStock: "درحال تامین",
//   },
//   {
//     id: 2,
//     image: "/public/assets/icons/product-test-img.svg",
//     name: "ماوس",
//     count: 0,
//     price: "8,600,000",
//     date: "1404/02/19",
//     inStock: "خیر",
//   },
//   {
//     id: 3,
//     image: "/public/assets/icons/product-test-img.svg",
//     name: "هارد اکسترنال",
//     count: 210,
//     price: "12,300,000",
//     date: "1404/03/02",
//     inStock: "بله",
//   },
//   {
//     id: 4,
//     image: "/public/assets/icons/product-test-img.svg",
//     name: "تبلت",
//     count: 62,
//     price: "24,400,000",
//     date: "1403/07/14",
//     inStock: "بله",
//   },
//   {
//     id: 5,
//     image: "/public/assets/icons/product-test-img.svg",
//     name: "فلش مموری",
//     count: 0,
//     price: "1,200,000",
//     date: "1402/12/26",
//     inStock: "درحال تامین",
//   },
//   {
//     id: 6,
//     image: "/public/assets/icons/product-test-img.svg",
//     name: "مانیتور",
//     count: 0,
//     price: "15,870,000",
//     date: "1404/01/18",
//     inStock: "خیر",
//   },
//   {
//     id: 7,
//     image: "/public/assets/icons/product-test-img.svg",
//     name: "مودم همراه",
//     count: 0,
//     price: "5,600,000",
//     date: "1404/08/23",
//     inStock: "درحال تامین",
//   },
//   {
//     id: 8,
//     image: "/public/assets/icons/product-test-img.svg",
//     name: "موبایل",
//     count: 478,
//     price: "49,999,000",
//     date: "1403/11/11",
//     inStock: "بله",
//   },
//   {
//     id: 9,
//     image: "/public/assets/icons/product-test-img.svg",
//     name: "کیبورد",
//     count: 184,
//     price: "3,200,000",
//     date: "1404/04/04",
//     inStock: "بله",
//   },
//   {
//     id: 10,
//     image: "/public/assets/icons/product-test-img.svg",
//     name: "ساعت هوشمند",
//     count: 0,
//     price: "18,999,000",
//     date: "1403/09/30",
//     inStock: "خیر",
//   },
//   {
//     id: 11,
//     image: "/public/assets/icons/product-test-img.svg",
//     name: "آمبولانس ",
//     count: 0,
//     price: "28,450,000",
//     date: "1404/03/25",
//     inStock: "درحال تامین",
//   },
//   {
//     id: 12,
//     image: "/public/assets/icons/product-test-img.svg",
//     name: "مودم",
//     count: 90,
//     price: "5,600,000",
//     date: "1404/02/13",
//     inStock: "بله",
//   },
//   {
//     id: 13,
//     image: "/public/assets/icons/product-test-img.svg",
//     name: "هدست",
//     count: 0,
//     price: "12,750,000",
//     date: "1404/01/30",
//     inStock: "خیر",
//   },
//   {
//     id: 14,
//     image: "/public/assets/icons/product-test-img.svg",
//     name: "پرینتر",
//     count: 0,
//     price: "31,200,000",
//     date: "1404/04/07",
//     inStock: "درحال تامین",
//   },
//   {
//     id: 15,
//     image: "/public/assets/icons/product-test-img.svg",
//     name: "کارت حافظه",
//     count: 58,
//     price: "2,150,000",
//     date: "1404/05/01",
//     inStock: "بله",
//   },
//   {
//     id: 16,
//     image: "/public/assets/icons/product-test-img.svg",
//     name: "رم لپ‌تاپ",
//     count: 0,
//     price: "9,800,000",
//     date: "1404/06/20",
//     inStock: "خیر",
//   },
//   {
//     id: 17,
//     image: "/public/assets/icons/product-test-img.svg",
//     name: "هاب USB",
//     count: 110,
//     price: "3,450,000",
//     date: "1404/03/14",
//     inStock: "بله",
//   },
//   {
//     id: 18,
//     image: "/public/assets/icons/product-test-img.svg",
//     name: "پاور بانک",
//     count: 0,
//     price: "7,100,000",
//     date: "1404/02/08",
//     inStock: "خیر",
//   },
//   {
//     id: 19,
//     image: "/public/assets/icons/product-test-img.svg",
//     name: "میکروفون",
//     count: 72,
//     price: "11,900,000",
//     date: "1404/03/18",
//     inStock: "بله",
//   },
//   {
//     id: 20,
//     image: "/public/assets/icons/product-test-img.svg",
//     name: "قلم نوری",
//     count: 0,
//     price: "16,300,000",
//     date: "1404/04/02",
//     inStock: "درحال تامین",
//   },
//   {
//     id: 21,
//     image: "/public/assets/icons/product-test-img.svg",
//     name: "مانیتور",
//     count: 0,
//     price: "45,600,000",
//     date: "1404/03/15",
//     inStock: "درحال تامین",
//   },
//   {
//     id: 22,
//     image: "/public/assets/icons/product-test-img.svg",
//     name: "ماوس بی‌سیم",
//     count: 84,
//     price: "3,200,000",
//     date: "1404/05/10",
//     inStock: "بله",
//   },
//   {
//     id: 23,
//     image: "/public/assets/icons/product-test-img.svg",
//     name: "صفحه کلید مکانیکی",
//     count: 0,
//     price: "6,950,000",
//     date: "1404/04/12",
//     inStock: "خیر",
//   },
//   {
//     id: 24,
//     image: "/public/assets/icons/product-test-img.svg",
//     name: "فلش مموری",
//     count: 140,
//     price: "1,250,000",
//     date: "1404/03/05",
//     inStock: "بله",
//   },
//   {
//     id: 25,
//     image: "/public/assets/icons/product-test-img.svg",
//     name: "اسپیکر بلوتوثی",
//     count: 0,
//     price: "5,700,000",
//     date: "1404/01/29",
//     inStock: "خیر",
//   },
//   {
//     id: 26,
//     image: "/public/assets/icons/product-test-img.svg",
//     name: "پروژکتور",
//     count: 0,
//     price: "35,000,000",
//     date: "1404/02/18",
//     inStock: "درحال تامین",
//   },
//   {
//     id: 27,
//     image: "/public/assets/icons/product-test-img.svg",
//     name: "وب‌کم",
//     count: 60,
//     price: "8,350,000",
//     date: "1404/04/22",
//     inStock: "بله",
//   },
//   {
//     id: 28,
//     image: "/public/assets/icons/product-test-img.svg",
//     name: "موس پد گیمینگ",
//     count: 72,
//     price: "1,800,000",
//     date: "1404/03/28",
//     inStock: "بله",
//   },
//   {
//     id: 29,
//     image: "/public/assets/icons/product-test-img.svg",
//     name: "مچ‌بند هوشمند",
//     count: 0,
//     price: "9,400,000",
//     date: "1404/05/03",
//     inStock: "خیر",
//   },
//   {
//     id: 30,
//     image: "/public/assets/icons/product-test-img.svg",
//     name: "مبدل Type-C",
//     count: 95,
//     price: "850,000",
//     date: "1404/02/05",
//     inStock: "بله",
//   },
//   {
//     id: 31,
//     image: "/public/assets/icons/product-test-img.svg",
//     name: "مبدل Type-d",
//     count: 90,
//     price: "850,000",
//     date: "1404/02/05",
//     inStock: "بله",
//   },
// ];
let products = [];
fetch("http://localhost:3000/products")
  .then((res) => res.json())
  .then((data) => {
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
      console.log(copyProducts);

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

    function showModifyModal() {
      console.log("showModifyModal");
    }
    function showModifySideBar() {
      console.log("showModifySideBar");
    }
    function showModifyNewPage() {
      console.log("showModifyNewPage");
    }
    function removeRowHandler() {
      console.log("removeRowHandler");
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
      tdPrice.textContent = item.price;
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
      modalModifyBtn.addEventListener("click", showModifyModal);
      tdActionBtns.appendChild(modalModifyBtn);
      /*sidebar*/
      const sideBarModifyBtn = document.createElement("button");
      sideBarModifyBtn.textContent = "ساید بار";
      sideBarModifyBtn.classList.add("action__btn");
      sideBarModifyBtn.addEventListener("click", showModifySideBar);
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
      removeRowBtn.addEventListener("click", removeRowHandler);
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
