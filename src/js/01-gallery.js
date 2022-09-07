import { galleryItems } from './gallery-items.js';
import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";




// Change code below this line
// import SimpleLightbox from "simplelightbox";

console.log(galleryItems);

const divEl = document.querySelector(".gallery");


divEl.addEventListener("click", onClick);


function createCards (galleryItems){

    return galleryItems.map((item) => {

        return `<li><a href="${item.original}"><img src="${item.preview}" data-source="${item.original}"
        alt="${item.description}"/></a></li>`
  
    }).join("");
};
const markup = createCards(galleryItems);
divEl.insertAdjacentHTML("beforeend", markup);


function onClick(event) {
    event.preventDefault();
    if(event.target.nodeName !== 'IMG'){
        return;
    }
    

  
};

function openModalSimpleLightbox(event){
    let simpleLightbox = new SimpleLightbox('.gallery a',
        {
            captionSelector: 'img',
            captionType: 'attr',
            captionsData: 'alt',
            animationSpeed: 150,
            captionPosition: 'bottom',
            captionDelay: 250,
            enableKeyboard: true,
        });
        simpleLightbox.open();
        
};
openModalSimpleLightbox(event);