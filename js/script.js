const headerHTML = `<header><section class="header__top d-flex">
        <div class="navbar__wrapper d-flex">
          <div class="navbar__wrapper__logo d-flex">
            <a href="/index.html"
              ><img src="./public/assets/images/logo.png" alt="logo"
            /></a>
          </div>
          <nav class="navbar__wrapper__links d-flex">
            <ul class="navbar__links d-flex">
              <li class="navbar__link">
                <a href="index.html" class="nav-link">صفحه اصلی</a>
              </li>
              <li class="navbar__link">
                <a href="table.html" class="nav-link">جدول</a>
              </li>
              <li class="navbar__link">
                <a href="dropdown.html" class="nav-link">لیست کشویی</a>
              </li>
              <li class="navbar__link">
                <a href="tree.html" class="nav-link">درخت</a>
              </li>
              <li class="navbar__link">
                <a href="resume.html" class="nav-link">درباره من</a>
              </li>
            </ul>
          </nav>
          <div class="navbar__wrapper__theme-changer d-flex">
            <span
              ><img src="./public/assets/icons/light-mode.svg" alt="theme"
            /></span>
          </div>
        </div>
      </section></header>`;

const footerHTML = `<footer>
      <section class="footer__top">
        <div class="footer__wrapper">
          <div class="footer__wrapper__socials">
            <ul>
              <li>
                <a href="#"
                  ><img src="/public/assets/icons/git.svg" alt="social"
                /></a>
              </li>
              <li>
                <a href="#"
                  ><img src="/public/assets/icons/linkedin.svg" alt="social"
                /></a>
              </li>
              <li>
                <a href="#"
                  ><img src="/public/assets/icons/rubika.svg" alt="social"
                /></a>
              </li>
              <li>
                <a href="#"
                  ><img src="/public/assets/icons/telegram.svg" alt="social"
                /></a>
              </li>
              <li>
                <a href="#"
                  ><img src="/public/assets/icons/instagram.svg" alt="social"
                /></a>
              </li>
            </ul>
          </div>
          <div class="footer__wrapper__links">
            <ul>
              <li><a href="/index.html">صفحه اصلی</a></li>
              <li><a href="/table.html">جدول</a></li>
              <li><a href="/dropdown.html">لیست کشویی</a></li>
              <li><a href="/tree.html">درخت</a></li>
              <li><a href="/resume.html">رزومه</a></li>
            </ul>
          </div>
        </div>
      </section>
      <section class="footer__bottom">
        <p class="footer__bottom__copy-right">تمامی حقوق برای طراح محفوظ است</p>
      </section>
    </footer>`;

document.addEventListener("DOMContentLoaded", () => {
  const headerPlaceHolder = document.getElementById("header-placeHolder");
  const footerPlaceHolder = document.getElementById("footer-placeHolder");

  if (headerPlaceHolder) headerPlaceHolder.innerHTML = headerHTML;
  if (footerPlaceHolder) footerPlaceHolder.innerHTML = footerHTML;

  const links = document.querySelectorAll(".nav-link");
  const currentUrl = window.location.pathname;
  links.forEach((link) => {
    if (link.getAttribute("href") === currentUrl.split("/").pop()) {
      link.classList.add("active");
    }
  });

  const theme = document.createElement("script");
  theme.src = "./js/darkTheme.js";
  console.log(theme);

  document.body.appendChild(theme);
});
