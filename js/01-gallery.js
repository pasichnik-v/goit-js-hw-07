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
galleryContainer.addEventListener('click', onGalleryContainerClick);

    
// Функція: дії при кліку і Esc
function ctreatePicturesCardsMarkup(galleryItems) { 
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>
        `;
    })
        .join('');
}
// Відкриття картнки original
function onGalleryContainerClick(event) {
    event.preventDefault();

    const isGalleryImagesEl = event.target.classList.contains('gallery__image');
   
    if (!isGalleryImagesEl) {
        return;
    }

const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}">
    
`,
    {
	
	onShow: (instance) => {window.addEventListener('keydown', closeImage)},
	
    onClose: (instance) => { window.removeEventListener('keydown', closeImage) },
}
)

instance.show()
    
    // закриття модального вікна
    
    function closeImage(event) {
        if (event.code === 'Escape') {
            instance.close();
        }
        // console.log(event.code);
        
    }
}

