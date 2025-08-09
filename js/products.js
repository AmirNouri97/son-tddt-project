const $ = document;

const products = [
  {
    id: 1,
    image: "/public/assets/icons/product-test-img.svg",
    name: "لپ‌تاپ",
    count: 0,
    price: "78,235,000",
    date: "1403/10/07",
    inStock: "درحال تامین",
  },
  {
    id: 2,
    image: "/public/assets/icons/product-test-img.svg",
    name: "ماوس",
    count: 0,
    price: "8,600,000",
    date: "1404/02/19",
    inStock: "خیر",
  },
  {
    id: 3,
    image: "/public/assets/icons/product-test-img.svg",
    name: "هارد اکسترنال",
    count: 210,
    price: "12,300,000",
    date: "1404/03/02",
    inStock: "بله",
  },
  {
    id: 4,
    image: "/public/assets/icons/product-test-img.svg",
    name: "تبلت",
    count: 62,
    price: "24,400,000",
    date: "1403/07/14",
    inStock: "بله",
  },
  {
    id: 5,
    image: "/public/assets/icons/product-test-img.svg",
    name: "فلش مموری",
    count: 0,
    price: "1,200,000",
    date: "1402/12/26",
    inStock: "درحال تامین",
  },
  {
    id: 6,
    image: "/public/assets/icons/product-test-img.svg",
    name: "مانیتور",
    count: 0,
    price: "15,870,000",
    date: "1404/01/18",
    inStock: "خیر",
  },
  {
    id: 7,
    image: "/public/assets/icons/product-test-img.svg",
    name: "مودم همراه",
    count: 0,
    price: "5,600,000",
    date: "1404/08/23",
    inStock: "درحال تامین",
  },
  {
    id: 8,
    image: "/public/assets/icons/product-test-img.svg",
    name: "موبایل",
    count: 478,
    price: "49,999,000",
    date: "1403/11/11",
    inStock: "بله",
  },
  {
    id: 9,
    image: "/public/assets/icons/product-test-img.svg",
    name: "کیبورد",
    count: 184,
    price: "3,200,000",
    date: "1404/04/04",
    inStock: "بله",
  },
  {
    id: 10,
    image: "/public/assets/icons/product-test-img.svg",
    name: "ساعت هوشمند",
    count: 0,
    price: "18,999,000",
    date: "1403/09/30",
    inStock: "خیر",
  },
  {
    id: 11,
    image: "/public/assets/icons/product-test-img.svg",
    name: "تبلت",
    count: 0,
    price: "28,450,000",
    date: "1404/03/25",
    inStock: "درحال تامین",
  },
  {
    id: 12,
    image: "/public/assets/icons/product-test-img.svg",
    name: "مودم",
    count: 90,
    price: "5,600,000",
    date: "1404/02/13",
    inStock: "بله",
  },
  {
    id: 13,
    image: "/public/assets/icons/product-test-img.svg",
    name: "هدست",
    count: 0,
    price: "12,750,000",
    date: "1404/01/30",
    inStock: "خیر",
  },
  {
    id: 14,
    image: "/public/assets/icons/product-test-img.svg",
    name: "پرینتر",
    count: 0,
    price: "31,200,000",
    date: "1404/04/07",
    inStock: "درحال تامین",
  },
  {
    id: 15,
    image: "/public/assets/icons/product-test-img.svg",
    name: "کارت حافظه",
    count: 58,
    price: "2,150,000",
    date: "1404/05/01",
    inStock: "بله",
  },
  {
    id: 16,
    image: "/public/assets/icons/product-test-img.svg",
    name: "رم لپ‌تاپ",
    count: 0,
    price: "9,800,000",
    date: "1404/06/20",
    inStock: "خیر",
  },
  {
    id: 17,
    image: "/public/assets/icons/product-test-img.svg",
    name: "هاب USB",
    count: 110,
    price: "3,450,000",
    date: "1404/03/14",
    inStock: "بله",
  },
  {
    id: 18,
    image: "/public/assets/icons/product-test-img.svg",
    name: "پاور بانک",
    count: 0,
    price: "7,100,000",
    date: "1404/02/08",
    inStock: "خیر",
  },
  {
    id: 19,
    image: "/public/assets/icons/product-test-img.svg",
    name: "میکروفون",
    count: 72,
    price: "11,900,000",
    date: "1404/03/18",
    inStock: "بله",
  },
  {
    id: 20,
    image: "/public/assets/icons/product-test-img.svg",
    name: "قلم نوری",
    count: 0,
    price: "16,300,000",
    date: "1404/04/02",
    inStock: "درحال تامین",
  },
  {
    id: 21,
    image: "/public/assets/icons/product-test-img.svg",
    name: "مانیتور",
    count: 0,
    price: "45,600,000",
    date: "1404/03/15",
    inStock: "درحال تامین",
  },
  {
    id: 22,
    image: "/public/assets/icons/product-test-img.svg",
    name: "ماوس بی‌سیم",
    count: 84,
    price: "3,200,000",
    date: "1404/05/10",
    inStock: "بله",
  },
  {
    id: 23,
    image: "/public/assets/icons/product-test-img.svg",
    name: "صفحه کلید مکانیکی",
    count: 0,
    price: "6,950,000",
    date: "1404/04/12",
    inStock: "خیر",
  },
  {
    id: 24,
    image: "/public/assets/icons/product-test-img.svg",
    name: "فلش مموری",
    count: 140,
    price: "1,250,000",
    date: "1404/03/05",
    inStock: "بله",
  },
  {
    id: 25,
    image: "/public/assets/icons/product-test-img.svg",
    name: "اسپیکر بلوتوثی",
    count: 0,
    price: "5,700,000",
    date: "1404/01/29",
    inStock: "خیر",
  },
  {
    id: 26,
    image: "/public/assets/icons/product-test-img.svg",
    name: "پروژکتور",
    count: 0,
    price: "35,000,000",
    date: "1404/02/18",
    inStock: "درحال تامین",
  },
  {
    id: 27,
    image: "/public/assets/icons/product-test-img.svg",
    name: "وب‌کم",
    count: 60,
    price: "8,350,000",
    date: "1404/04/22",
    inStock: "بله",
  },
  {
    id: 28,
    image: "/public/assets/icons/product-test-img.svg",
    name: "موس پد گیمینگ",
    count: 72,
    price: "1,800,000",
    date: "1404/03/28",
    inStock: "بله",
  },
  {
    id: 29,
    image: "/public/assets/icons/product-test-img.svg",
    name: "مچ‌بند هوشمند",
    count: 0,
    price: "9,400,000",
    date: "1404/05/03",
    inStock: "خیر",
  },
  {
    id: 30,
    image: "/public/assets/icons/product-test-img.svg",
    name: "مبدل Type-C",
    count: 95,
    price: "850,000",
    date: "1404/02/05",
    inStock: "بله",
  },
];
// const tableQty = $.querySelector("#table__qty-id");
// console.log(tableQty);

// const tableBody = $.querySelector("tbody");
// const paginationWrapper = $.querySelector(".pagination__numbers__wrapper ");
// const productsQTY = products.length;
// let itemPerPage = tableQty.value;
// let pagesNumber = Math.ceil(productsQTY / itemPerPage);
// // const itemPerPage = 4;
// tableQty.addEventListener("change", () => {
//   paginationWrapper.innerHTML = "";
//   itemPerPage = tableQty.value;
//   pagesNumber = Math.ceil(productsQTY / itemPerPage);
//   // createPageDiv(pagesNumber, paginationWrapper);
//   renderPagination(1);
//   activePage(1);
// });
// const first = 1;
// const firstPage = $.querySelector(".first__page");
// const nextPage = $.querySelector(".next__page");
// const lastPage = $.querySelector(".last__page");
// const prevPage = $.querySelector(".prev__page");
// let allPageNumbers;
// let currentPage = 1;
// let endIndex;
// let startIndex;
// let currentStartPage = 1;

// function activePage(page) {
//   currentPage = page;
//   showRows(page);

//   showRows();
//   updateActivePageUI();
// }

// function updateActivePageUI() {
//   allPageNumbers.forEach((p) => p.classList.remove("active"));
//   allPageNumbers[currentPage - 1].classList.add("active");
// }

// function showRows() {
//   tableBody.textContent = "";
//   endIndex = currentPage * itemPerPage;
//   startIndex = endIndex - itemPerPage;
//   const productForCurrentPage = products.slice(startIndex, endIndex);
//   productForCurrentPage.forEach((product) => {
//     createRow(product);
//   });
// }

// function renderPagination(startPage) {
//   paginationWrapper.innerHTML = "";
//   if (startPage > 1) {
//     const prevDots = $.createElement("div");
//     prevDots.textContent = "...";
//     prevDots.classList.add("pagination__number");
//     prevDots.addEventListener("click", () => {
//       renderPagination(startPage - 3);
//     });
//     paginationWrapper.appendChild(prevDots);
//   }
//   const endPage = Math.min(startPage + 2, pagesNumber);
//   for (let i = 1; i <= endPage; i++) {
//     const numPageDiv = $.createElement("div");
//     numPageDiv.textContent = i;
//     numPageDiv.classList.add("pagination__number");
//     paginationWrapper.appendChild(numPageDiv);
//     numPageDiv.addEventListener("click", () => {
//       activePage(i);
//     });
//     paginationWrapper.appendChild(prevDots);
//   }
//   if (endPage < pagesNumber - 1) {
//     const nextDots = document.createElement("div");
//     nextDots.textContent = "...";
//     nextDots.classList.add("pagination__number");
//     nextDots.addEventListener("click", () => {
//       renderPagination(startPage + 3);
//     });
//     paginationWrapper.appendChild(nextDots);
//   }
//   if (endPage < pagesNumber) {
//     const lastPageDiv = document.createElement("div");
//     lastPageDiv.textContent = pagesNumber;
//     lastPageDiv.classList.add("pagination__number");
//     lastPageDiv.addEventListener("click", () => {
//       activePage(pagesNumber);
//     });
//     paginationWrapper.appendChild(lastPageDiv);
//   }
// }

// function createPageDiv(pagesNumber, paginationWrapper) {
//   allPageNumbers = document.querySelectorAll(".pagination__number");
// }

// function createRow(item) {
//   const tr = $.createElement("tr");
//   if (item) {
//     const tdID = $.createElement("td");
//     tdID.textContent = item.id;
//     tr.appendChild(tdID);

//     const tdImg = $.createElement("td");
//     const img = $.createElement("img");
//     img.src = item.image;
//     img.alt = item.name;

//     tdImg.appendChild(img);
//     tr.appendChild(tdImg);

//     const tdName = $.createElement("td");
//     tdName.textContent = item.name;
//     tr.appendChild(tdName);

//     const tdCount = $.createElement("td");
//     tdCount.textContent = item.count;
//     tr.appendChild(tdCount);

//     const tdPrice = $.createElement("td");
//     tdPrice.textContent = item.price;
//     tr.appendChild(tdPrice);

//     const tdDate = $.createElement("td");
//     tdDate.textContent = item.date;
//     tr.appendChild(tdDate);

//     const tdInStock = $.createElement("td");
//     const spanInStock = $.createElement("span");
//     spanInStock.textContent = item.inStock;
//     spanInStock.classList.add("status");

//     if (spanInStock.textContent === "بله") {
//       spanInStock.classList.add("success");
//     } else if (spanInStock.textContent === "خیر") {
//       spanInStock.classList.add("cancelled");
//     } else if (spanInStock.textContent === "درحال تامین") {
//       spanInStock.classList.add("pending");
//     }
//     tdInStock.appendChild(spanInStock);
//     tr.appendChild(tdInStock);
//   }
//   tableBody.append(tr);
// }
// /* next page */

// nextPage.addEventListener("click", () => {
//   if (currentPage < pagesNumber) {
//     activePage(currentPage + 1);
//   }
// });

// /*last page */

// lastPage.addEventListener("click", () => {
//   activePage(pagesNumber);
// });

// /*prev page */

// prevPage.addEventListener("click", () => {
//   if (currentPage > 1) {
//     activePage(currentPage - 1);
//   }
// });

// /*first page */
// firstPage.addEventListener("click", () => {
//   activePage(first);
// });

// /* --------------------- */

// window.addEventListener("load", () => {
//   // createPageDiv(pagesNumber, paginationWrapper);
//   renderPagination(1);
//   // activePage(1);

//   showRows();
// });
// // let priceArr = [];
// // const sort = $.querySelectorAll(".table__main table thead tr th");
// // sort.forEach((th) => {
// //   th.addEventListener("click", (e) => {
// //     let cellindex = e.target.cellIndex;
// //     $.querySelectorAll("tr").forEach((tr) => {
// //       priceArr.push(tr.cells[cellindex]);
// //     });
// //   });
// // });
// const tableQty = $.querySelector("#table__qty-id");
// const tableBody = $.querySelector("tbody");
// const paginationWrapper = $.querySelector(".pagination__numbers__wrapper");

// const firstPageBtn = $.querySelector(".first__page");
// const prevPageBtn = $.querySelector(".prev__page");
// const nextPageBtn = $.querySelector(".next__page");
// const lastPageBtn = $.querySelector(".last__page");

// let productsQTY = products.length;
// let itemPerPage = parseInt(tableQty.value, 10);
// let pagesNumber = Math.ceil(productsQTY / itemPerPage);
// let currentPage = 1;
// let allPageNumbers;

// tableQty.addEventListener("change", () => {
//   itemPerPage = parseInt(tableQty.value, 10);
//   pagesNumber = Math.ceil(productsQTY / itemPerPage);
//   currentPage = 1;
//   renderPagination(2);
//   showRows();
// });

// function showRows() {
//   tableBody.textContent = "";
//   const endIndex = currentPage * itemPerPage;
//   const startIndex = endIndex - itemPerPage;
//   const productForCurrentPage = products.slice(startIndex, endIndex);
//   productForCurrentPage.forEach(createRow);
// }

// function createRow(item) {
//   const tr = $.createElement("tr");
//   if (!item) return;

//   const tdID = $.createElement("td");
//   tdID.textContent = item.id;
//   tr.appendChild(tdID);

//   const tdImg = $.createElement("td");
//   const img = $.createElement("img");
//   img.src = item.image;
//   img.alt = item.name;
//   tdImg.appendChild(img);
//   tr.appendChild(tdImg);

//   const tdName = $.createElement("td");
//   tdName.textContent = item.name;
//   tr.appendChild(tdName);

//   const tdCount = $.createElement("td");
//   tdCount.textContent = item.count;
//   tr.appendChild(tdCount);

//   const tdPrice = $.createElement("td");
//   tdPrice.textContent = item.price;
//   tr.appendChild(tdPrice);

//   const tdDate = $.createElement("td");
//   tdDate.textContent = item.date;
//   tr.appendChild(tdDate);

//   const tdInStock = $.createElement("td");
//   const spanInStock = $.createElement("span");
//   spanInStock.textContent = item.inStock;
//   spanInStock.classList.add("status");
//   if (item.inStock === "بله") spanInStock.classList.add("success");
//   else if (item.inStock === "خیر") spanInStock.classList.add("cancelled");
//   else if (item.inStock === "درحال تامین") spanInStock.classList.add("pending");
//   tdInStock.appendChild(spanInStock);
//   tr.appendChild(tdInStock);

//   tableBody.appendChild(tr);
// }

// // رندر صفحه بندی با نقطه‌چین‌ها و صفحات وسط
// function renderPagination(startPage) {
//   paginationWrapper.innerHTML = "";

//   // صفحه اول
//   const firstPageDiv = $.createElement("div");
//   firstPageDiv.textContent = 1;
//   firstPageDiv.classList.add("pagination__number");
//   if (currentPage === 1) firstPageDiv.classList.add("active");
//   firstPageDiv.addEventListener("click", () => {
//     currentPage = 1;
//     renderPagination(2);
//     showRows();
//   });
//   paginationWrapper.appendChild(firstPageDiv);

//   // نقطه‌چین قبل
//   if (startPage > 2) {
//     const prevDots = $.createElement("div");
//     prevDots.textContent = "...";
//     prevDots.classList.add("pagination__number");
//     prevDots.addEventListener("click", () => {
//       renderPagination(startPage - 3);
//     });
//     paginationWrapper.appendChild(prevDots);
//   }

//   // صفحات وسط
//   const endPage = Math.min(startPage + 2, pagesNumber - 1);
//   for (let i = startPage; i <= endPage; i++) {
//     const numPageDiv = $.createElement("div");
//     numPageDiv.textContent = i;
//     numPageDiv.classList.add("pagination__number");
//     if (i === currentPage) numPageDiv.classList.add("active");
//     numPageDiv.addEventListener("click", () => {
//       currentPage = i;
//       // برای جابجایی صفحات وسط حدودی
//       renderPagination(Math.max(2, i - 1));
//       showRows();
//     });
//     paginationWrapper.appendChild(numPageDiv);
//   }

//   // نقطه‌چین بعد
//   if (endPage < pagesNumber - 1) {
//     const nextDots = $.createElement("div");
//     nextDots.textContent = "...";
//     nextDots.classList.add("pagination__number");
//     nextDots.addEventListener("click", () => {
//       renderPagination(startPage + 3);
//     });
//     paginationWrapper.appendChild(nextDots);
//   }

//   // صفحه آخر
//   if (pagesNumber > 1) {
//     const lastPageDiv = $.createElement("div");
//     lastPageDiv.textContent = pagesNumber;
//     lastPageDiv.classList.add("pagination__number");
//     if (currentPage === pagesNumber) lastPageDiv.classList.add("active");
//     lastPageDiv.addEventListener("click", () => {
//       currentPage = pagesNumber;
//       renderPagination(Math.max(2, pagesNumber - 3));
//       showRows();
//     });
//     paginationWrapper.appendChild(lastPageDiv);
//   }

//   // بروز رسانی دکمه‌ها برای هایلایت
//   allPageNumbers = paginationWrapper.querySelectorAll(".pagination__number");
//   updatePaginationButtons();
// }

// // آپدیت وضعیت دکمه‌های اول، قبلی، بعدی و آخر
// function updatePaginationButtons() {
//   firstPageBtn.disabled = currentPage === 1;
//   prevPageBtn.disabled = currentPage === 1;
//   nextPageBtn.disabled = currentPage === pagesNumber;
//   lastPageBtn.disabled = currentPage === pagesNumber;
// }

// // دکمه‌های ناوبری
// firstPageBtn.addEventListener("click", () => {
//   if (currentPage !== 1) {
//     currentPage = 1;
//     renderPagination(2);
//     showRows();
//   }
// });
// prevPageBtn.addEventListener("click", () => {
//   if (currentPage > 1) {
//     currentPage--;
//     renderPagination(Math.max(2, currentPage - 1));
//     showRows();
//   }
// });
// nextPageBtn.addEventListener("click", () => {
//   if (currentPage < pagesNumber) {
//     currentPage++;
//     renderPagination(Math.max(2, currentPage - 1));
//     showRows();
//   }
// });
// lastPageBtn.addEventListener("click", () => {
//   if (currentPage !== pagesNumber) {
//     currentPage = pagesNumber;
//     renderPagination(Math.max(2, pagesNumber - 3));
//     showRows();
//   }
// });

// // شروع کار روی بارگذاری صفحه
// window.addEventListener("load", () => {
//   renderPagination(2);
//   showRows();
//   updatePaginationButtons();
// });

/* */

const tableQty = $.querySelector("#table__qty-id");
const tableBody = $.querySelector("tbody");
const paginationWrapper = $.querySelector(".pagination__numbers__wrapper");
const firstPageBtn = $.querySelector(".first__page");
const prevPageBtn = $.querySelector(".prev__page");
const nextPageBtn = $.querySelector(".next__page");
const lastPageBtn = $.querySelector(".last__page");

// داده‌ها
const productsQTY = products.length;
let itemPerPage = parseInt(tableQty.value, 10) || 5; // مقدار پیش‌فرض 5 اگر مقدار نامعتبر بود
let pagesNumber = Math.ceil(productsQTY / itemPerPage);
let currentPage = 1;

let allPageNumbers = []; // برای نگهداری دکمه‌های صفحه‌ها

// فعال کردن صفحه
function activePage(page) {
  if (page < 1) page = 1;
  if (page > pagesNumber) page = pagesNumber;

  currentPage = page;
  showRows();
  updateActivePageUI();
}

// نمایش ردیف‌ها برای صفحه فعلی
function showRows() {
  tableBody.textContent = "";
  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;
  const productForCurrentPage = products.slice(startIndex, endIndex);

  productForCurrentPage.forEach(createRow);
}

// بروز رسانی ظاهر صفحه فعال
function updateActivePageUI() {
  allPageNumbers.forEach((p) => p.classList.remove("active"));
  const activeBtn = allPageNumbers.find(
    (btn) => parseInt(btn.textContent, 10) === currentPage
  );
  if (activeBtn) activeBtn.classList.add("active");
}

// ساخت یک ردیف جدول
function createRow(item) {
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

  tableBody.appendChild(tr);
}

// ساخت Pagination و دکمه‌های صفحه
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

// به‌روزرسانی تعداد آیتم‌ها در هر صفحه و رندر مجدد
tableQty.addEventListener("change", () => {
  itemPerPage = parseInt(tableQty.value, 10) || 5;
  pagesNumber = Math.ceil(productsQTY / itemPerPage);
  currentPage = 1;
  renderPagination(1);
  showRows();
});

// دکمه‌های کنترل صفحه
nextPageBtn.addEventListener("click", () => {
  if (currentPage < pagesNumber) activePage(currentPage + 1);
});
prevPageBtn.addEventListener("click", () => {
  if (currentPage > 1) activePage(currentPage - 1);
});
firstPageBtn.addEventListener("click", () => activePage(1));
lastPageBtn.addEventListener("click", () => activePage(pagesNumber));

// بارگذاری اولیه صفحه
window.addEventListener("load", () => {
  renderPagination(1);
  showRows();
});
