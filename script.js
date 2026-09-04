// Nav bar color transition on scroll
// While the page is scrolled near the top, the nav-bar sits over the blue
// header and its links stay white. Once the user scrolls past the header,
// the "nav-scrolled" class is added, and the CSS transition on #nav-bar a
// fades the link color to dark blue so it stays readable against the
// lighter page background below.

const navBar = document.getElementById('nav-bar');
const header = document.getElementById('header');

function updateNavColor() {
    const scrollThreshold = header.offsetHeight;

    if (window.scrollY > scrollThreshold) {
        navBar.classList.add('nav-scrolled');
    } else {
        navBar.classList.remove('nav-scrolled');
    }
}

// Run on scroll, and once on load in case the page loads already scrolled
// (e.g. from a bookmarked anchor link).
window.addEventListener('scroll', updateNavColor);
window.addEventListener('load', updateNavColor);