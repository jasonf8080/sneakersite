const brandHeaderInfo = [
    {
        brand: 'nike',
        image: 'https://www.expocafeperu.com/w/2020/06/vapormax-flyknit-3-footlocker-nike-on-feet-air-junior-foot-locker-white-black-oreo-triple-up-close.jpg',
    },

    {
        brand: 'jordan',
        image: 'https://i.pinimg.com/originals/25/4f/e8/254fe85b346d59ea7d9a14d5754486b3.jpg',
    },

    {
        brand: 'yeezy',
        image: 'https://cdn.sanity.io/images/c1chvb1i/production/5d6e020fefa0aae609a658cc90f590a9b1f1e5d0-1100x735.jpg',
    },

    {
        brand: 'adidas',
        image: 'https://sneakernews.com/wp-content/uploads/2017/12/sneaker-con-nyc-2017-on-foot-recap-25.jpg',
    },


]

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
        image: 'sneaker-img4.png',
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



const categoryID = localStorage.getItem('categoryID');

function updateHeaderInfo(){

    const headerText = document.querySelector('.category-header h1');
    const headerImg = document.querySelector('.category-header');
    const allResults = document.querySelector('.all-results');

    headerText.textContent = categoryID;
    allResults.textContent = `showing all results for "${categoryID}"`;

    for(let i = 0; i < brandHeaderInfo.length; i++){
        const brandHeaderItem = brandHeaderInfo[i];
        if(categoryID === brandHeaderItem.brand){
            headerImg.style.background = `url("${brandHeaderItem.image}") no-repeat center/cover`;
           
        }
    }
}
const shopSectionGrid = document.querySelector('.shop-section-grid');

function filterSneakerByCategory(){
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

}



window.addEventListener('DOMContentLoaded', function(){
    updateHeaderInfo();
    filterSneakerByCategory();
})