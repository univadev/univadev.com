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
