const brandHeaderInfo = [
    {
        brand: 'nike',
        image: 'https://www.expocafeperu.com/w/2020/06/vapormax-flyknit-3-footlocker-nike-on-feet-air-junior-foot-locker-white-black-oreo-triple-up-close.jpg',
    },

    {
        brand: 'jordan',
        image: 'https://www.modern-notoriety.com/wp-content/uploads/2016/07/air-jordan-1-bred_10.jpg',
    },

    {
        brand: 'yeezy',
        image: 'https://cdn.sanity.io/images/c1chvb1i/production/5d6e020fefa0aae609a658cc90f590a9b1f1e5d0-1100x735.jpg',
    },

    {
        brand: 'adidas',
        image: 'https://sneakernews.com/wp-content/uploads/2016/07/pharrell-adidas-nmd-human-race-release-reminder-2.jpg',
    },


];

const sneakers = [
    {
        bestSeller: true,
        image: 'sneaker1.png',
        brand: 'nike',
        title: 'Nike Air Force 1',
        price: '$120',
    },

    {
        bestSeller: true,
        image: 'sneaker2.png',
        brand: 'jordan',
        title: 'Nike Air Force 1',
        price: '$120',
    },

    {
        bestSeller: true,
        image: 'sneaker3.png',
        brand: 'nike',
        title: 'Nike Air Force 1',
        price: '$120',
    },


    {
        bestSeller: true,
        image: 'sneaker4.png',
        brand: 'yeezy',
        title: 'Nike Air Force 1',
        price: '$120',
    },

    {
        bestSeller: true,
        image: 'sneaker5.png',
        brand: 'adidas',
        title: 'Nike Air Force 1',
        price: '$120',
    },

    {
        bestSeller: true,
        image: 'sneaker6.png',
        brand: 'jordan',
        title: 'Nike Air Force 1',
        price: '$120',
    },


    {
        bestSeller: true,
        image: 'sneaker13.png',
        brand: 'jordan',
        title: 'Nike Air Force 1',
        price: '$120',
    },

    {
        bestSeller: true,
        image: 'sneaker14.png',
        brand: 'yeezy',
        title: 'Nike Air Force 1',
        price: '$120',
    },

    {
        bestSeller: true,
        image: 'sneaker15.png',
        brand: 'yeezy',
        title: 'Nike Air Force 1',
        price: '$120',
    },

    {
        bestSeller: true,
        image: 'sneaker8.png',
        brand: 'nike',
        title: 'Nike Air Force 1',
        price: '$120',
    },

    {
        bestSeller: true,
        image: 'sneaker7.png',
        brand: 'eyezy',
        title: 'Nike Air Force 1',
        price: '$120',
    },

   

    {
        bestSeller: true,
        image: 'sneaker9.png',
        brand: 'jordan',
        title: 'Yeezy Air Force 1',
        price: '$120',
    },

    {
        image: 'sneaker10.png',
        brand: 'yeezy',
        title: 'Nike Air Force 1',
        price: '$120',
    },

    {
        image: 'sneaker11.png',
        brand: 'nike',
        title: 'Nike Air Force 1',
        price: '$120',
    },

    {
        image: 'sneaker12.png',
        brand: 'adidas',
        title: 'Nike Air Force 1',
        price: '$120',
    },


    {
        bestSeller2: true,
        image: 'sneaker16.png',
        brand: 'vans',
        title: 'Nike Air Force 1',
        price: '$120',
    },

    {
        bestSeller2: true,
        image: 'sneaker17.png',
        brand: 'jordan',
        title: 'Nike Air Force 1',
        price: '$120',
    },

    {
        bestSeller2: true,
        image: 'sneaker18.png',
        brand: 'nike',
        title: 'Nike Air Force 1',
        price: '$120',
    },

    {
        bestSeller2: true,
        image: 'sneaker19.png',
        brand: 'nike',
        title: 'Nike Air Force 1',
        price: '$120',
    },

    {
        bestSeller2: true,
        image: 'sneaker20.png',
        brand: 'jordan',
        title: 'Nike Air Force 1',
        price: '$120',
    },

    {
        bestSeller2: true,
        image: 'sneaker21.png',
        brand: 'nike',
        title: 'Nike Air Force 1',
        price: '$120',
    },

    {
        bestSeller2: true,
        image: 'sneaker22.png',
        brand: 'yeezy',
        title: 'Nike Air Force 1',
        price: '$120',
    },

    {
        bestSeller2: true,
        image: 'sneaker23.png',
        brand: 'adidas',
        title: 'Nike Air Force 1',
        price: '$120',
    },

    {
        bestSeller2: true,
        image: 'sneaker24.png',
        brand: 'jordan',
        title: 'Nike Air Force 1',
        price: '$120',
    },

    {
        bestSeller2: true,
        image: 'sneaker25.png',
        brand: 'eyezy',
        title: 'Nike Air Force 1',
        price: '$120',
    },

    {
        bestSeller2: true,
        image: 'sneaker26.png',
        brand: 'nike',
        title: 'Nike Air Force 1',
        price: '$120',
    },

    {
        bestSeller2: true,
        image: 'sneaker27.png',
        brand: 'jordan',
        title: 'Yeezy Air Force 1',
        price: '$120',
    },

    {
        image: 'sneaker28.png',
        brand: 'yeezy',
        title: 'Nike Air Force 1',
        price: '$120',
    },

    {
        image: 'sneaker29.png',
        brand: 'nike',
        title: 'Nike Air Force 1',
        price: '$120',
    },

    {
        image: 'sneaker30.png',
        brand: 'adidas',
        title: 'Nike Air Force 1',
        price: '$120',
    },

];



//get category from home page, update header title, image, and results heading
const categoryID = localStorage.getItem('categoryID');

function updateHeaderInfo(){

    const headerImg = document.querySelector('.category-header');
    const allResults = document.querySelector('.all-results');

   
    allResults.textContent = `${categoryID}`;

    for(let i = 0; i < brandHeaderInfo.length; i++){
        const brandHeaderItem = brandHeaderInfo[i];
        if(categoryID === brandHeaderItem.brand){
            headerImg.style.background = `url("${brandHeaderItem.image}") no-repeat center/cover`;
           
        }
    }
}





//get category from home page, filter items onto new page
const shopSectionGrid = document.querySelector('.shop-section-grid');

function filterSneakersByCategory(){
    const categorySneakers = [];
    for(let i = 0; i < sneakers.length; i++){
        if(categoryID === sneakers[i].brand){
            const categorySneaker = sneakers[i];
            categorySneakers.push(categorySneaker);
            
        }
    }

    const categorySneakersContent = categorySneakers.map(categorySneaker => `
    <div class="card">
        <img class="img" src="${categorySneaker.image}">
        <div class="info">
            <p>${categorySneaker.brand}</p>
            <h2>${categorySneaker.title}</h2>
            <p>$${categorySneaker.price}</p>
        </div>
        <a href="index3.html" class="clickable-card"></a>
    </div>`).join('');
   
    shopSectionGrid.innerHTML = categorySneakersContent;


    clickOnCards();
}




//click on individual item
function clickOnCards(){
    const clickableCards = document.querySelectorAll('.clickable-card');
    console.log(clickableCards);

    const cart = document.querySelector('.shopping-cart');
    const selectedSneaker = document.querySelector('.selected-sneaker');



    clickableCards.forEach(function(item){
        item.addEventListener('click', function(e){
            console.log(e.target);
            const selectedSneaker = e.target.previousElementSibling.previousElementSibling.src;
            const selectedBrand = e.target.previousElementSibling.children[0].textContent;
            const selectedTitle = e.target.previousElementSibling.children[1].textContent;
            const selectedPrice = e.target.previousElementSibling.children[2].textContent;
    
            localStorage.setItem('image', selectedSneaker);
            localStorage.setItem('brand', selectedBrand);
            localStorage.setItem('title', selectedTitle);
            localStorage.setItem('price', selectedPrice);
            
        })
    })
}



//when the window loads updateHeaderInfo and filterSneakersByCategory
window.addEventListener('DOMContentLoaded', function(){
    updateHeaderInfo();
    filterSneakersByCategory();
})