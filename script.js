document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.btn');
    
    links.forEach(link => {
        if (!link.getAttribute('href')) {
            link.style.display = 'none';
        }
    });
});