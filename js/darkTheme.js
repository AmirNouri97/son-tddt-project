const body = document.body;
const toggleBtn = document.querySelector('.navbar__wrapper__theme-changer span')
const toggleBtnLogo = document.querySelector('.navbar__wrapper__theme-changer span img')
let isDark = false


toggleBtn.addEventListener('click', () => {
  const newTheme = body.classList.contains('dark-theme') ? 'light' : 'dark';
  const isNowDark = newTheme === 'dark';

  const themeData = {
    theme: newTheme,
    iconLeft: isNowDark ? '32px' : '6px',
    iconRight: isNowDark ? '32px' : '6px',
    iconSrc: isNowDark 
      ? './public/assets/icons/dark-mode.svg' 
      : './public/assets/icons/light-mode.svg'
  };

  // ذخیره در localStorage
  localStorage.setItem('theme', JSON.stringify(themeData));

  // اعمال به DOM
  if (isNowDark) {
    body.classList.add('dark-theme');
  } else {
    body.classList.remove('dark-theme');
  }

  toggleBtnLogo.style.left = themeData.iconLeft;
  toggleBtnLogo.src = themeData.iconSrc;

  isDark = isNowDark;
});

const savedThemeData = localStorage.getItem('theme');

if (savedThemeData) {
  const parsedTheme = JSON.parse(savedThemeData);

  if (parsedTheme.theme === 'dark') {
    body.classList.add('dark-theme');
    isDark = true;
  } else {
    body.classList.remove('dark-theme');
    isDark = false;
  }

  toggleBtnLogo.style.left = parsedTheme.iconLeft;
  toggleBtnLogo.src = parsedTheme.iconSrc;
}

//  const savedTheme = localStorage.getItem('theme');
//     if (savedTheme === 'dark') {
//       body.classList.add('dark-theme');
//     }

// toggleBtn.addEventListener('click',()=>{
//     const newTheme = body.classList.contains('dark-theme') ? 'light' : 'dark';
//       localStorage.setItem('theme', newTheme);

//     if(isDark){
//         body.classList.remove('dark-theme')
// toggleBtnLogo.style.left='6px';
// toggleBtnLogo.src = "./public/assets/icons/light-mode.svg"
// isDark = false;

//     }else{
//         body.classList.add('dark-theme');
//         toggleBtnLogo.style.left='32px';
//         toggleBtnLogo.src = "./public/assets/icons/dark-mode.svg"
// isDark = true;
//     }

// })