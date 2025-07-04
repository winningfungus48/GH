// Sample game data
const games = [
    {
        id: 1,
        title: "Numberle",
        description: "Guess the 5-digit number in 6 tries. A challenging number puzzle game that tests your logic and deduction skills.",
        category: "Puzzle",
        icon: "numberle-logo.svg",
        page: "numberle-game.html",
        isLogo: true
    }
];

// Function to create a game card element
function createGameCard(game) {
    const card = document.createElement('a');
    card.href = game.page;
    card.className = 'game-card';
    
    // Handle Numberle logo specially
    const iconContent = game.isLogo 
        ? `<img src="${game.icon}" alt="${game.title} logo" class="game-card-logo">`
        : game.icon;
    
    console.log('Creating card for', game.title, 'with icon:', iconContent);
    
    card.innerHTML = `
        <div class="game-card-image">
            ${iconContent}
        </div>
        <h3 class="game-card-title">${game.title}</h3>
        <p class="game-card-description">${game.description}</p>
        <div class="game-card-meta">
            <span class="game-card-category">${game.category}</span>
            <span>Click to play →</span>
        </div>
    `;
    
    return card;
}

// Function to render all game cards
function renderGames() {
    const gamesContainer = document.getElementById('gamesContainer');
    if (!gamesContainer) {
        console.log('Games container not found');
        return;
    }
    
    console.log('Rendering games:', games);
    gamesContainer.innerHTML = '';
    
    games.forEach(game => {
        console.log('Creating card for:', game.title);
        const card = createGameCard(game);
        gamesContainer.appendChild(card);
    });
}

// Function to handle navigation highlighting
function highlightCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// Function to add smooth scrolling to all internal links
function addSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Function to add loading animation to game cards
function addCardAnimations() {
    const cards = document.querySelectorAll('.game-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
}

// Function to handle search functionality (if needed in the future)
function initializeSearch() {
    // This can be expanded later to add search functionality
    console.log('Search functionality ready to be implemented');
}

// Function to handle responsive navigation
function handleResponsiveNav() {
    const nav = document.querySelector('.nav');
    const header = document.querySelector('.header');
    
    // Add mobile menu toggle functionality if needed
    if (window.innerWidth <= 768) {
        // Mobile-specific navigation handling can be added here
    }
}

// Main initialization function
function init() {
    renderGames();
    highlightCurrentPage();
    addSmoothScrolling();
    addCardAnimations();
    initializeSearch();
    handleResponsiveNav();
    
    // Add window resize listener for responsive behavior
    window.addEventListener('resize', handleResponsiveNav);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Export functions for potential use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        games,
        createGameCard,
        renderGames
    };
} 