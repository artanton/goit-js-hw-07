import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);
const imagesList = document.querySelector('.gallery');

const galleryMarkup = createGalleryMarkup(galleryItems);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
 <li class="gallery__item">
 <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
 </a>
</li>`;
    })
    .join(" ");
}

imagesList.insertAdjacentHTML("beforeend", galleryMarkup);



let lightbox = new SimpleLightbox('.gallery a', {
  captions: 'true',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

// imagesList.addEventListener("click", onImageClick);

// function onImageClick(evt) {
//   evt.preventDefault();

//   if (!evt.target.classList.contains("gallery__image")) {
//     return;
//   }
//   {
//     const pickedImage = evt.target;
//     const pickedUrl = pickedImage.getAttribute("alt");

//     console.log(pickedUrl);
//   }
// }
