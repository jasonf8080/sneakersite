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
        trending: true,
        image: 'sneaker-img1.png',
        brand: 'nike',
        title: 'nike Air Force 1',
        price: '$120',
    },

    {
        trending: true,
        image: 'sneaker-img2.png',
        brand: 'jordan',
        title: 'nike Air Force 1',
        price: '$120',
    },

    {
        trending: true,
        image: 'sneaker-img3.png',
        brand: 'yeezy',
        title: 'nike Air Force 1',
        price: '$120',
    },

    {
        trending: true,
        image: 'nike43.png',
        brand: 'nike',
        title: 'nike Air Force 1',
        price: '$120',
    },

    {
        trending: true,
        image: 'sneaker-img5.png',
        brand: 'yeezy',
        title: 'nike Air Force 1',
        price: '$120',
    },

    {
        trending: true,
        image: 'sneaker-img6.png',
        brand: 'nike',
        title: 'nike Air Force 1',
        price: '$120',
    },

    {
        trending: true,
        image: 'sneaker-img7.png',
        brand: 'nike',
        title: 'nike Air Force 1',
        price: '$120',
    },

    {
        trending: true,
        image: 'sneaker-img8.png',
        brand: 'jordan',
        title: 'nike Air Force 1',
        price: '$120',
    },

    {
        trending: true,
        image: 'sneaker-img24.png',
        brand: 'yeezy',
        title: 'yeezy Air Force 1',
        price: '$120',
    },

    {
        trending: true,
        image: 'sneaker-img15.png',
        brand: 'yeezy',
        title: 'nike Air Force 1',
        price: '$120',
    },

    {
        trending: true,
        image: 'sneaker-img11.png',
        brand: 'jordan',
        title: 'nike Air Force 1',
        price: '$120',
    },

    {
        trending: true,
        image: 'sneaker-img12.png',
        brand: 'nike',
        title: 'nike Air Force 1',
        price: '$120',
    },

    {
        trending: true,
        image: 'sneaker-img13.png',
        brand: 'Vans',
        title: 'nike Air Force 1',
        price: '$120',
    },

    {
        trending: true,
        image: 'sneaker-img14.png',
        brand: 'nike',
        title: 'nike Air Force 1',
        price: '$120',
    },

    {
        trending: true,
        image: 'sneaker-img10.png',
        brand: 'yeezy',
        title: 'nike Air Force 1',
        price: '$120',
    },

    {
        trending: true,
        image: 'sneaker-img9.png',
        brand: 'yeezy',
        title: 'nike Air Force 1',
        price: '$120',
    },

    {
        trending: true,
        image: 'sneaker-img19.png',
        brand: 'nike',
        title: 'nike Air Force 1',
        price: '$120',
    },

    {
        trending: true,
        image: 'sneaker-img20.png',
        brand: 'adidas',
        title: 'nike Air Force 1',
        price: '$120',
    },

    {
        image: 'sneaker-img20.png',
        brand: 'jordan',
        title: 'jordan Air Force 1',
        price: '$120',
    },

    {
        image: 'sneaker-img20.png',
        brand: 'jordan',
        title: 'jordan Air Force 1',
        price: '$120',
    },

    {
        image: 'sneaker-img20.png',
        brand: 'jordan',
        title: 'jordan Air Force 1',
        price: '$120',
    },

    {
        image: 'sneaker-img20.png',
        brand: 'jordan',
        title: 'jordan Air Force 1',
        price: '$120',
    },

    {
        image: 'sneaker-img20.png',
        brand: 'jordan',
        title: 'jordan Air Force 2',
        price: '$120',
    },

    {
        image: 'nike36.png',
        brand: 'nike',
        title: 'jordan Air Force 2',
        price: '$120',
    },

    {
        image: 'nike37.png',
        brand: 'nike',
        title: 'jordan Air Force 2',
        price: '$120',
    },

    {
        image: 'nike38.png',
        brand: 'nike',
        title: 'jordan Air Force 2',
        price: '$120',
    },

    

    {
        image: 'nike39.png',
        brand: 'nike',
        title: 'jordan Air Force 2',
        price: '$120',
    },

   

    {
        image: 'nike40.png',
        brand: 'nike',
        title: 'jordan Air Force 2',
        price: '$120',
    },


    {
        image: 'yeezy33.png',
        brand: 'yeezy',
        title: 'yeezy Air Force 1',
        price: '$120',
    },

    {
        image: 'yeezy31.png',
        brand: 'yeezy',
        title: 'yeezy Air Force 1',
        price: '$120',
    },

    {
        image: 'yeezy32.png',
        brand: 'yeezy',
        title: 'yeezy Air Force 1',
        price: '$120',
    },

    

    {
        image: 'yeezy34.png',
        brand: 'yeezy',
        title: 'yeezy Air Force 1',
        price: '$120',
    },

    {
        image: 'yeezy30.png',
        brand: 'yeezy',
        title: 'yeezy Air Force 1',
        price: '$120',
    },

    {
        image: 'yeezy36.png',
        brand: 'yeezy',
        title: 'yeezy Air Force 1',
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