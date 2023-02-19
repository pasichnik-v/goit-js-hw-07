import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);




// Викликаю gallery
const galleryContainer = document.querySelector('.gallery');
// Присвоюю змінну виклику функції
const cardsMarkup = ctreatePicturesCardsMarkup(galleryItems);

// Додаю розмітку в HTML
galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);
// Створюю слухача, який створює події під час кліку
galleryContainer.addEventListener('click', lightbox);

    
// Функція: дії при кліку і Esc
function ctreatePicturesCardsMarkup(galleryItems) { 
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        `;
    })
        .join('');
}
var lightbox = new SimpleLightbox('.gallery a', { 
        captionsData: 'alt',
        captionDelay: 250,
        captionPosition: 'bottom',
        captionType: 'attr'
     });
    

