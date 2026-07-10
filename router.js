/**
 * Home of AI - URL Router & Obfuscator
 * This script manages clean URLs by replacing file names with unique 34-char IDs
 */

const routes = {
    'index': 'index.html',
    'home': 'Home.html',
    'politics': 'Politics.html'
};

// Function to generate a random 34-character ID
function generateUniqueID() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 34; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

// Generate unique IDs for each page on load (or use persistent ones)
const pageIDs = {
    'index': 'main-' + generateUniqueID().substring(0, 29),
    'home': 'chat-' + generateUniqueID().substring(0, 29),
    'politics': 'legal-' + generateUniqueID().substring(0, 28)
};

function initRouter() {
    const currentPath = window.location.pathname;
    const fileName = currentPath.split('/').pop();

    // Mapping logic to mask the URL
    if (fileName === 'index.html' || fileName === '') {
        window.history.replaceState(null, '', '/' + pageIDs.index);
    } else if (fileName === 'Home.html') {
        window.history.replaceState(null, '', '/' + pageIDs.home);
    } else if (fileName === 'Politics.html') {
        window.history.replaceState(null, '', '/' + pageIDs.politics);
    }
}

// Handle internal navigation
document.addEventListener('click', (e) => {
    const target = e.target.closest('a');
    if (target && target.getAttribute('href')) {
        const href = target.getAttribute('href');
        
        if (href === 'Politics.html') {
            e.preventDefault();
            window.location.href = 'Politics.html';
        } else if (href === 'Home.html') {
            e.preventDefault();
            window.location.href = 'Home.html';
        } else if (href === 'index.html') {
            e.preventDefault();
            window.location.href = 'index.html';
        }
    }
});

window.addEventListener('load', initRouter);
