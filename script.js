let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
    if (scrollTop === 0) {
        navbar.classList.remove('hidden');
    } else if (scrollTop > lastScrollTop) {
        navbar.classList.add('hidden');
     } else {
         navbar.classList.remove('hidden');
    }
            
    lastScrollTop = scrollTop;
});

const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuToggle.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
});

// Close mobile menu when clicking a non-dropdown link
const mobileNavLinks = document.querySelectorAll('.mobile-nav-bubble > .nav-link:not([onclick])');
mobileNavLinks.forEach(link => {
    link.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
    });
});

function toggleMobileDropdown(event, id) {
    event.preventDefault();
    const dropdown = document.getElementById(id);
    dropdown.classList.toggle('active');
}