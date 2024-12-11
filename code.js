    let slideIndex = 0;
    showSlides();

    function showSlides() {
        const slides = document.querySelectorAll('.mySlides');
        
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.left = '100%';
        }

        slideIndex++;

        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        slides[slideIndex - 1].style.left = '0';
        setTimeout(showSlides, 3000);
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    const links = document.querySelectorAll('a[target="_blank"]');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            
            const newTab = window.open(this.href, '_blank');
            
            if (newTab) {
                newTab.blur();
                window.focus();
            }

            event.preventDefault();
        });
    });