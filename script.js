// Form submission handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // In a real application, you would send this data to a server
            // For now, we'll just show a success message
            alert('Thank you for your message! I will get back to you soon.');
            
            // Reset the form
            contactForm.reset();
        });
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Offset for fixed header
                behavior: 'smooth'
            });
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    
    if (window.scrollY > 50) {
        header.style.background = 'rgba(44, 62, 80, 0.95)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
    } else {
        header.style.background = 'var(--primary-color)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Animation for service cards
function animateOnScroll() {
    const elements = document.querySelectorAll('.service-card, .tool-card, .testimonial-card');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize animations
window.addEventListener('DOMContentLoaded', function() {
    // Set initial state for animation elements
    const animatedElements = document.querySelectorAll('.service-card, .tool-card, .testimonial-card');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Run animation on load
    animateOnScroll();
});

// Run animation on scroll
window.addEventListener('scroll', animateOnScroll);

// Report thumbnail interactions
document.addEventListener('DOMContentLoaded', function() {
    const reportCards = document.querySelectorAll('.report-card');
    
    reportCards.forEach(card => {
        // Add click event to the entire card (except buttons)
        card.addEventListener('click', function(e) {
            // If the click is not on a button, trigger the preview link
            if (!e.target.closest('.btn-view') && !e.target.closest('.btn-download')) {
                const previewLink = this.querySelector('.btn-view');
                if (previewLink) {
                    previewLink.click();
                }
            }
        });
    });
});

// Education & Certifications Dropdown Toggle
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Education & Certifications Dropdown Toggle
    const educationToggle = document.getElementById('educationToggle');
    const educationContent = document.getElementById('educationContent');
    const toggleIcon = document.querySelector('.toggle-icon');
    
    if (educationToggle && educationContent && toggleIcon) {
        // Set initial state - open by default for GitHub Pages
        educationContent.classList.add('active');
        toggleIcon.classList.add('active');
        
        educationToggle.addEventListener('click', function() {
            educationContent.classList.toggle('active');
            toggleIcon.classList.toggle('active');
        });
    }
    
    // Vertical Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navClose = document.getElementById('navClose');
    const body = document.body;
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            body.classList.toggle('menu-open');
        });
    }
    
    if (navClose) {
        navClose.addEventListener('click', function() {
            body.classList.remove('menu-open');
        });
    }
    
    // Close menu when clicking on a link (mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                body.classList.remove('menu-open');
            }
        });
    });
    
    // Active menu item based on scroll position
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavItem() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active');
            } else {
                document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active');
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavItem);
    
    // Initialize any other interactive elements
    initializeReportCards();
});

// Function to initialize report cards
function initializeReportCards() {
    const reportCards = document.querySelectorAll('.report-card');
    
    reportCards.forEach(card => {
        // Add click event to the entire card
        card.addEventListener('click', function(e) {
            // Only trigger if not clicking on a direct link
            if (!e.target.closest('a')) {
                const link = this.querySelector('.report-link');
                if (link) {
                    window.open(link.href, '_blank');
                }
            }
        });
    });
}