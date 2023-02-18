import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);



// Реалізація делегування на div.gallery і отримання url великого зображення.
// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. 
// Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані(.min) файли бібліотеки.
// Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// Заміна значення атрибута src елемента < img > в модальному вікні перед відкриттям. 
// Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.






// 1.
// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// Розмітка елемента галереї

// Посилання на оригінальне зображення повинно зберігатися в data - атрибуті source на елементі < img >,
//     і вказуватися в href посилання. 
// Не додавай інші HTML теги або CSS класи, крім тих, що містяться в цьому шаблоні.


//  Створити функцію, яка створить масив карток через map з картинками і описом. 
// Додати картки в DOM div gallery
// Додати активний клас і реалізувати щоб при кліку на картинку 
// з попередньої активний клас видалявся, а до нової додавався
// При кліку активний клас відкриває модалку розміром gallery 
// в якій відображається фото з посиланням на original



// нажати картнку-присвоєння активного стану- при активному стані відкривається модалка:
// 
// створити div з класом модал в якому розмістити crs original


// const modalEl = document.createElement('div')
// console.log(modalEl);
// modalEl.classList.add('modal');

// 
// Присвоїти клас, який додасть з css розміри і тд..
// -і викликається картинка original.
// закривається модалка і знімається клас активний



const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = ctreatePicturesCardsMarkup(galleryItems);


galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

galleryContainer.addEventListener('click', onGalleryContainerClick);

    

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

function onGalleryContainerClick(event) {
    event.preventDefault();

    const isGalleryImagesEl = event.target.classList.contains('gallery__image');
   
    if (!isGalleryImagesEl) {
        return;
    }
    const instance = basicLightbox.create(`
    <div class="modal">
        <img src="${event.target.dataset.source}" width="1140" height="auto">
    </div>
`)
instance.show()
    console.log(event.target.dataset.source);
    galleryContainer.addEventListener('keydown', closeImage)
    function closeImage(event) {
        if (event.code === 'Escape') {
            instance.close();
        }
        console.log(event.code);
        
    }
}



// Зверни увагу на те, що зображення обгорнуте посиланням,
// отже по кліку за замовчуванням користувач буде перенаправлений на іншу сторінку. 
// Заборони цю поведінку за замовчуванням.

