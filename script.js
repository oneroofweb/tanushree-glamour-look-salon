
document.addEventListener('DOMContentLoaded', function() {
    // Sabhi gallery items ko select karo
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightboxImage = document.getElementById('lightboxImage');

    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            // Click kiye hue item ke andar ki image ka link (src) nikalo
            const imgSrc = this.querySelector('img').getAttribute('src');
            // Us link ko modal wali image me set kar do
            lightboxImage.setAttribute('src', imgSrc);
        });
    });
});


