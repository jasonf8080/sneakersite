const selectedSneakerImg = document.querySelector('.selected-shoe-container img');
const selectedSneakerBrand = document.querySelector('.brand');
const selectedSneakerTitle = document.querySelector('.shoe-name');
const selectedSneakerPrice = document.querySelector('.price');

window.addEventListener('load', function(){
    const image = localStorage.getItem('image');
    const brand = localStorage.getItem('brand');
    const title = localStorage.getItem('title');
    const price = localStorage.getItem('price');

    selectedSneakerImg.src = image;
    selectedSneakerBrand.textContent = brand;
    selectedSneakerTitle.textContent = title;
    selectedSneakerPrice.textContent = price;
})