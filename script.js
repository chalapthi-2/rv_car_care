document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal Animation
    function reveal() {
        const reveals = document.querySelectorAll('.reveal');
        
        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = reveals[i].getBoundingClientRect().top;
            const elementVisible = 50; // Trigger slightly earlier
            
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add('active');
            }
        }
    }

    // Trigger reveal on load and scroll
    window.addEventListener('scroll', reveal);
    
    // Call once with a slight delay to ensure DOM is fully rendered
    setTimeout(reveal, 100);
});
