document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a'); // Get all links

    links.forEach(link => {
        const originalHref = link.href;

        // Specific mappings for your files
        const fileMap = {
            'index.html': 'HOME',  
            'Full.html': 'FULL?', 
        };

        // Check if the file is in the map, otherwise, use a random string
        const newFilename = fileMap[originalHref.split('/').pop()] || 
                           Math.random().toString(36).substring(2, 15) + '.html';

        // Store original and update the href
        link.dataset.originalHref = originalHref;
        link.href = newFilename;
    });

    // Click handling (same as before)
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            window.location.href = link.dataset.originalHref;
        });
    });
});
