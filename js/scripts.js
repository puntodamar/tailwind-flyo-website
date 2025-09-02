const themeToggleBtn = document.getElementById("theme-toggle");
const themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
const themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");


if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
   themeToggleLightIcon.classList.remove('hidden')
} else {
    themeToggleDarkIcon.classList.remove('hidden')
}

themeToggleBtn.addEventListener("click", function() {
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');
    
    localStorage.setItem('color-theme', localStorage.getItem('color-theme') === 'dark' ? 'light' : 'dark');
    document.documentElement.classList.toggle('dark')
})