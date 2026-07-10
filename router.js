/**
 * Home of AI - URL Router & Obfuscator (GitHub Pages Compatible)
 * Using Hash-based routing to prevent 404 errors on refresh
 */

const pageIDs = {
    'index': 'main-A1b2C3d4E5f6G7h8I9j0K1l2M3n4O5p6Q7',
    'home': 'chat-R8s9T0u1V2w3X4y5Z6a7B8c9D0e1F2g3H4',
    'politics': 'legal-I5j6K7l8M9n0O1p2Q3r4S5t6U7v8W9x0Y1'
};

function initRouter() {
    const hash = window.location.hash.substring(1);
    const path = window.location.pathname.split('/').pop();

    // If accessing via filename, redirect to hash for clean URL
    if (path === 'index.html' && !hash) {
        window.location.hash = pageIDs.index;
    } else if (path === 'Home.html' && !hash) {
        window.location.hash = pageIDs.home;
    } else if (path === 'Politics.html' && !hash) {
        window.location.hash = pageIDs.politics;
    }
}

// Handle internal navigation via hash
document.addEventListener('click', (e) => {
    const target = e.target.closest('a');
    if (target) {
        const href = target.getAttribute('href');
        if (href === 'index.html') {
            e.preventDefault();
            window.location.href = 'index.html#' + pageIDs.index;
        } else if (href === 'Home.html') {
            e.preventDefault();
            window.location.href = 'Home.html#' + pageIDs.home;
        } else if (href === 'Politics.html') {
            e.preventDefault();
            window.location.href = 'Politics.html#' + pageIDs.politics;
        }
    }
});

window.addEventListener('load', initRouter);
window.addEventListener('hashchange', initRouter);
