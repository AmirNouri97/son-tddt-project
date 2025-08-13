const body = document.body;
const toggleBtn = document.querySelector(
  ".navbar__wrapper__theme-changer span"
);
const toggleBtnLogo = document.querySelector(
  ".navbar__wrapper__theme-changer span img"
);
let isDark = false;

toggleBtn.addEventListener("click", () => {
  const newTheme = body.classList.contains("dark-theme") ? "light" : "dark";
  const isNowDark = newTheme === "dark";

  const themeData = {
    theme: newTheme,
    iconLeft: isNowDark ? "32px" : "4px",
    iconSrc: isNowDark
      ? "./public/assets/icons/dark-mode.svg"
      : "./public/assets/icons/light-mode.svg",
  };

  localStorage.setItem("theme", JSON.stringify(themeData));

  if (isNowDark) {
    body.classList.add("dark-theme");
  } else {
    body.classList.remove("dark-theme");
  }

  toggleBtnLogo.style.left = themeData.iconLeft;
  toggleBtnLogo.src = themeData.iconSrc;
});

const savedThemeData = localStorage.getItem("theme");

if (savedThemeData) {
  const parsedTheme = JSON.parse(savedThemeData);

  if (parsedTheme.theme === "dark") {
    body.classList.add("dark-theme");
  } else {
    body.classList.remove("dark-theme");
  }

  toggleBtnLogo.style.left = parsedTheme.iconLeft;
  toggleBtnLogo.src = parsedTheme.iconSrc;
}
