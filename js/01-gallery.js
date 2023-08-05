import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const imagesList = document.querySelector('.gallery');

const galleryMarkup = createGalleryMarkup(galleryItems);


function createGalleryMarkup (galleryItems) {

return galleryItems.map (({preview, original, description}) => {
    
 return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
}) .join (" ");

}

imagesList.insertAdjacentHTML('beforeend', galleryMarkup);

imagesList.addEventListener('click', onImageClick);

function onImageClick(evt){
    evt.preventDefault();
    
if ( !evt.target.classList.contains('gallery__image')){
    return;
}else{
    
    const pickedImage = evt.target.dataset.source;
    console.log(pickedImage);

    const instance = basicLightbox.create(`
    <img src="${pickedImage}" width="800" height="600">
`)

instance.show()

function onEscPress(e) {
    if (e.code === 'Escape') {
      instance.close();
      document.removeEventListener('keydown', onEscPress);
    }
  }

  document.addEventListener('keydown', onEscPress);
  
}
}



