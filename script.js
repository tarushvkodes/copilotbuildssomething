// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: false,
    mirror: true
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Parallax effect for stars
window.addEventListener('scroll', () => {
    const stars = document.querySelector('.stars');
    const scrolled = window.pageYOffset;
    stars.style.transform = `translateY(${scrolled * 0.5}px)`;
});

// Add click animation to CTA button
const ctaButton = document.querySelector('.cta-button');
ctaButton.addEventListener('click', () => {
    ctaButton.style.transform = 'scale(0.95)';
    setTimeout(() => {
        ctaButton.style.transform = 'scale(1)';
    }, 200);
});