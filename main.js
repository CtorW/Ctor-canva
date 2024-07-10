document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href]');

    links.forEach(link => {
        const originalHref = link.href;

   
        const fileMap = {
            'https://wndrofu.github.io/Project-Canva/index.html': 'https://yourwebsite.com/home.html',  
            'https://wndrofu.github.io/Project-Canva/Full.html': 'https://yourwebsite.com/complete.html', 
        };

        const maskedHref = fileMap[originalHref] || 
                           '#' + btoa(originalHref).replace(/[^a-zA-Z0-9]/g, '').substring(0, 10);

        link.dataset.originalHref = originalHref;
        link.href = maskedHref; 
    });

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            window.location.href = link.dataset.originalHref;
        });
    });
});
