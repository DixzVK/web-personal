document.addEventListener('DOMContentLoaded', function () {
    // Intersection Observer for sections
    const observerOptions = {
        threshold: 0.1
    };

    const fadeInUpObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section').forEach(section => {
        fadeInUpObserver.observe(section);
    });

    // Fade in animation for header and footer
    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                fadeInObserver.unobserve(entry.target);
            }
        });
    });

    fadeInObserver.observe(document.querySelector('header'));
    fadeInObserver.observe(document.querySelector('footer'));
});
