// Page Navigation
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const pages = document.querySelectorAll('.page');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            navLinks.forEach(nl => nl.classList.remove('active'));
            this.classList.add('active');
            
            pages.forEach(page => page.classList.remove('active'));
            
            const targetPage = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetPage);
            if (targetElement) {
                targetElement.classList.add('active');
            }
        });
    });

    // CTA Button
    const ctaButton = document.querySelector('.hero .cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            navLinks.forEach(nl => nl.classList.remove('active'));
            document.querySelector('a[href="#dashboard"]').classList.add('active');
            pages.forEach(page => page.classList.remove('active'));
            document.getElementById('dashboard').classList.add('active');
        });
    }

    // Form Submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const loading = document.getElementById('loading');
            loading.classList.add('show');
            
            setTimeout(() => {
                loading.classList.remove('show');
                alert('Thank you! We will get back to you soon.');
                this.reset();
            }, 2000);
        });
    }

    // Update Prediction Button
    const updateButtons = document.querySelectorAll('.cta-button');
    updateButtons.forEach(button => {
        if (button.textContent.includes('Update') || button.textContent.includes('Generate')) {
            button.addEventListener('click', function() {
                const loading = document.getElementById('loading');
                loading.classList.add('show');
                
                setTimeout(() => {
                    loading.classList.remove('show');
                    alert('Prediction updated successfully!');
                }, 1500);
            });
        }
    });
});
