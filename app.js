//Make nav fixed
const nav = document.querySelector('.nav');

window.addEventListener('scroll', function(){
    navHeight = nav.getBoundingClientRect().height;
    //console.log(navHeight);

    if(pageYOffset > navHeight){
       nav.classList.add('nav-fixed');
    } else {
        nav.classList.remove('nav-fixed');
    }
})

//show search bar
const searchIcon = document.querySelector('.lni.lni-search.search-icon');
const searchContainer = document.querySelector('.search-bar-container');
const searchBar = document.querySelector('.search-bar');
searchBarHeight = searchBar.getBoundingClientRect().height;

searchIcon.addEventListener('click', function(e){
    //console.log(e.target);
    searchContainer.classList.toggle('active');

    if(searchContainer.classList.contains('active')){
        searchContainer.style.height = `${searchBarHeight}px`;
       
        console.log(searchBarHeight);
    } else {
        searchContainer.style.height = `0px`;
    }
});

//access cart
const cartIcon = document.querySelector('.lni.lni-cart');
cartIcon.addEventListener('click', function(){
    if(cart.innerHTML === ''){
       const cartAlertDiv = document.querySelector('.cart-alert-div');
        cartAlertDiv.style.visibility = 'visible';
       

        setTimeout(function(){
            cartAlertDiv.style.visibility = 'hidden';
        }, 1000)
    }   
})

//select individual items
const clickableCards = document.querySelectorAll('.clickable-card');
const singleCard = document.querySelector('.card-clicked');
const cart = document.querySelector('.shopping-cart');

clickableCards.forEach(function(card){
    card.addEventListener('click', function(e){
        document.body.style.overflow = 'hidden';
        singleCard.classList.add('active');

        const img = e.target.parentElement.children[0].src;
        const title = e.target.parentElement.children[1].children[0].textContent;

        singleCard.innerHTML = `<div class="alert-div"><p>Item Added to Cart</p><i class="fas fa-check"></i></div>
        <div class="selected-card">
        <img class="selected-img" src="${img}">
        <div class="info">
            <h2>${title}</h2>
            <p>10.5</p>
            <button type="button" class="add-to-cart-btn">Add to Cart</button>
        </div>
        <i class="lni lni-close"></i>
    </div>`;


        //exit card
        const exitBtn = document.querySelector('.selected-card i');
       
        exitBtn.addEventListener('click', function(e){
            singleCard.classList.remove('active');
            document.body.style.overflow = 'auto';//back to normal
    })
    





    //pt2 --add an item to cart - from individual card
    const addToCartBtn = document.querySelector('.add-to-cart-btn');
    const alertDiv = document.querySelector('.alert-div');

    addToCartBtn.addEventListener('click', function(e){
            alertDiv.style.visibility = 'visible';
            setTimeout(function(){
                alertDiv.style.visibility = 'hidden';
            }, 1000)

           
            cart.classList.add('active');//display none -- to display flex/visible
            const cartItem = document.createElement('div');//create new item
            cartItem.classList.add('shopping-cart-item');
            cartItem.innerHTML = `<img src="${img}">

            <h4>${title}</h4>

            <div class="size-div">
                <p>size:<span class="size">11</span></p>
            </div>

            <p class="cart-price">$480</p> 
             <i class="lni lni-close remove-btn"></i>`
            ;

           //toggle cart height -- after item is added
            cartIcon.addEventListener('click', function(){
               
                if(cart.classList.contains('active')){
                    cart.classList.remove('active');
                    //solves the padding issue cart.style.padding = '0px';
                } else {
                    cart.classList.add('active');
                }

            });

            
         

            cart.appendChild(cartItem);//add item to cart element - add list item to list

            const cartCount = document.querySelector('.cart-icon-container span');
            cartCount.classList.add('active');
             //count cart items
            updateCartAmount();

            //remove from cart
            const removeCartBtns = document.querySelectorAll('.shopping-cart-item i');
            removeCartBtns.forEach(function(removeCartBtn){
                removeCartBtn.addEventListener('click', function(e){
                    e.target.parentElement.remove();
                    updateCartAmount();

                    if(cart.innerHTML === ''){
                        cart.classList.remove('active');
                    }
                });
            });

           
    
    });

  
    });//event listener end
})//for each end


function updateCartAmount(){
    const cartCount = document.querySelector('.cart-icon-container span');
   const cartItems = document.querySelectorAll('.shopping-cart-item');

   cartCount.textContent = cartItems.length;

   if(cartItems.length === 0){
        cartCount.style.visibility = 'hidden';
   } else {
    cartCount.style.visibility = 'visible';
   }
}

//new release slider
const slides = document.querySelectorAll('.slide');
const frame = document.querySelector('.frame');
let counter = 0;


setInterval(function(){ 
    counter++;
    //console.log(counter);

    frame.style.transform = `translateX(-${counter * 100}%)`;
    if(counter > slides.length - 1 - 1){
        counter = -1;
    }

    

    
}, 3000);


const featuredShoeInfo = [

    {
        title: 'Nike Airmax Plus',
        price: '$190',
    },

    {
        title: 'Nike SB Burnt Sienna',
        price: '$120',
    },

    {
        title: 'Nike Pink Yellow Blue',
        price: '$410',
    },

    {
        title: 'Yeezy 700 Cement',
        price: '$320',
    },


];



const newReleaseTitle = document.querySelector('.new-release-title');
const newReleasePrice = document.querySelector('.new-release-price');
let currentRelease = 0;




function updateFeaturedShoe(){
    newReleaseTitle.textContent = featuredShoeInfo[currentRelease].title;
    newReleasePrice.textContent = featuredShoeInfo[currentRelease].price;
};

updateFeaturedShoe(currentRelease);

setInterval(function(){ 
   currentRelease++;
   //console.log(currentRelease)

   updateFeaturedShoe(currentRelease);
    if(currentRelease > featuredShoeInfo.length - 1 - 1){
        currentRelease = -1;
    }
    
}, 3000);


const viewMoreBtn = document.querySelector('.view-more-btn');
const loaderContainer = document.querySelector('.loader-container');
const loader = document.querySelector('.loader-container i');
const shopSection = document.querySelector('.shop-section');

viewMoreBtn.addEventListener('click', function(e){
    e.target.parentElement.remove();
    loaderContainer.classList.add('active');

    const firstShopSection = document.querySelector('.shop-section-grid');
    firstShopSection.style.marginbottom = '0px';

    setTimeout(function(){
        loaderContainer.classList.remove('active');
    }, 2400)

    const moreItemsGrid = document.createElement('div');
    moreItemsGrid.classList.add('shop-section-grid');
   
    setTimeout(function(){
        shopSection.appendChild(moreItemsGrid);
    }, 2400)


    moreItemsGrid.innerHTML = `<div class="card">
        <img class="img" src="sneaker-img26.png">
        <div class="info">
            <h2>Air Force One Black</h2>
            <p>10.5</p>
        </div>

        <div class="clickable-card"></div>
    </div>

    <div class="card">
        <img class="img" src="sneaker-img27.png">
        <div class="info">
            <h2>Off White Zoom Vaporfly</h2>
            <p>10.5</p>
        </div>

        <div class="clickable-card"></div>
    </div>

    <div class="card">
        <img class="img" src="sneaker-img28.png">
        <div class="info">
            <h2>Air Max Game Royal</h2>
            <p>10.5</p>
        </div>

        <div class="clickable-card"></div>
    </div>

    <div class="card">
        <img class="img" src="sneaker-img4.png">
        <div class="info">
            <h2>Jordan Backboard 1</h2>
            <p>10.5</p>
        </div>

        <div class="clickable-card"></div>
    </div>

    <div class="card">
        <img class="img" src="sneaker-img5.png">
        <div class="info">
            <h2>Yeezy 350</h2>
            <p>10.5</p>
        </div>

        <div class="clickable-card"></div>
    </div>


    <div class="card">
        <img class="img" src="sneaker-img6.png">
        <div class="info">
            <h2>Off White Air Force 1</h2>
            <p>10.5</p>
        </div>

        <div class="clickable-card"></div>
    </div>


    <div class="card">
        <img class="img" src="sneaker-img7.png">
        <div class="info">
            <h2>Nike Vapormax</h2>
            <p>10.5</p>
        </div>

        <div class="clickable-card"></div>
    </div>

    <div class="card">
        <img class="img" src="sneaker-img8.png">
        <div class="info">
            <h2>Jordan 1 Yellow</h2>
            <p>10.5</p>
        </div>

        <div class="clickable-card"></div>
    </div>

    <div class="card">
        <img class="img" src="sneaker-img24.png">
        <div class="info">
            <h2>Yeezy Desert Sage</h2>
            <p>10.5</p>
        </div>

        <div class="clickable-card"></div>
    </div>

    <div class="card">
        <img class="img" src="sneaker-img15.png">
        <div class="info">
            <h2>Yeezy 700 Cement</h2>
            <p>10.5</p>
        </div>

        <div class="clickable-card"></div>
    </div>


    <div class="card">
        <img class="img" src="sneaker-img11.png">
        <div class="info">
            <h2>Jordan 11 Concord</h2>
            <p>10.5</p>
        </div>

        <div class="clickable-card"></div>
    </div>


    <div class="card">
        <img class="img" src="sneaker-img12.png">
        <div class="info">
            <h2>Off White Airmax 90</h2>
            <p>10.5</p>
        </div>

        <div class="clickable-card"></div>
    </div>

    <div class="card">
        <img class="img" src="sneaker-img13.png">
        <div class="info">
            <h2>Fear of God Vans</h2>
            <p>10.5</p>
        </div>

        <div class="clickable-card"></div>
    </div>

    <div class="card">
        <img class="img" src="sneaker-img14.png">
        <div class="info">
            <h2>Airmax Sean Wotherspoon</h2>
            <p>10.5</p>
        </div>

        <div class="clickable-card"></div>
    </div>

    <div class="card">
        <img class="img" src="sneaker-img10.png">
        <div class="info">
            <h2>Yeezy 350</h2>
            <p>10.5</p>
        </div>

        <div class="clickable-card"></div>
    </div>



    <div class="card">
        <img class="img" src="sneaker-img9.png">
        <div class="info">
            <h2>Yeezy Slide</h2>
            <p>10.5</p>
        </div>

        <div class="clickable-card"></div>
    </div>

    <div class="card">
        <img class="img" src="sneaker-img19.png">
        <div class="info">
            <h2>Air Max Plus 3</h2>
            <p>10.5</p>
        </div>

        <div class="clickable-card"></div>
    </div>

    <div class="card">
        <img class="img" src="sneaker-img20.png">
        <div class="info">
            <h2>NMD R1 Original</h2>
            <p>10.5</p>
        </div>

        <div class="clickable-card"></div>
    </div>
`
})