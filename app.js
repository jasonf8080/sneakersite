//giveaway
const exitGiveawayBtn = document.querySelector('.exit-giveaway i');
const giveawayContainer = document.querySelector('.giveaway-container');


setTimeout(function(){
    //initally 0
    giveawayContainer.style.opacity = '1';
}, 2500)

//giveaway has been loaded
exitGiveawayBtn.addEventListener('click', function(e){
    const giveawayContainer = document.querySelector('.giveaway-container');
    giveawayContainer.style.opacity = '0';
    
    document.body.style.overflow = 'auto';

    setTimeout(function(){
        giveawayContainer.remove();
    }, 800)
});

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
const selectedSneaker = document.querySelector('.selected-sneaker');



clickableCards.forEach(function(card){
    card.addEventListener('click', function(e){
        

        const img = e.target.parentElement.children[0].src;
        const title = e.target.parentElement.children[1].children[0].textContent;
        
        selectedSneaker.classList.add('selected-sneaker');

        selectedSneaker.innerHTML = `
<div class="back-container">
    <i class="fas fa-arrow-left"></i>

    <div class="alert-div">
    <p>ITEM ADDED TO CART</p>
</div>

</div>


<div class="image-info-flex">
    <img src="${img}">
    
    <div class="shoe-info-container">
        <div class="shoe-info">
            <h2 class="sneaker-title">${title}</h2>
            <div class="ratings">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>         
            </div>
            <h2 class="price">$<span>120.00</span></h2>
            <div class="sizes-container">
                <select id="sizes">
                    <option value="none"></option>
                    <option value="8.0">8</option>
                    <option value="8.0">8.5</option>
                    <option value="8.0">9</option>
                    <option value="8.0">9.5</option>
                    <option value="8.0">10</option>
                    <option value="8.0">10.5</option>
                    <option value="8.0">11</option>
                </select>
                <span>PLEASE SELECT A SIZE</span>
            </div> 
            
            <div class="shipping">
                <i class="fas fa-truck"></i>
                <p>Arrives within 5-6 business days</p>
            </div>

            <button type="button" class="add-to-cart-btn">Add to Cart</button>
        </div>
    </div>
</div>
`;

        selectedSneaker.style.transform = 'translateX(100%)';
        


        //exit card
        const goBackBtn = document.querySelector('.back-container i');
       
        goBackBtn.addEventListener('click', function(e){
            selectedSneaker.style.transform = 'translateX(-100%)';
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


const headerContent = document.querySelector('.header-content');


function updateCartAmount(){
    const cartCount = document.querySelector('.cart-icon-container span');
    const cartItems = document.querySelectorAll('.shopping-cart-item');
    const headerContent = document.querySelector('.header-content');

   cartCount.textContent = cartItems.length;


   if(cartItems.length === 0){
        cartCount.style.visibility = 'hidden';
        headerContent.style.visibility = 'visible';
   } else {
    cartCount.style.visibility = 'visible';
    headerContent.style.visibility = 'hidden';
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
        title: 'Jordan 1 Off White',
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

    
    //console.log(selectedDot);

   /* dots.forEach(function(dot){
       dot.innerHTML = '<i class="fas fa-circle">';
     

       //selectedDot.innerHTML = '><i class="far fa-circle"></i>';


    })
*/
    
changeCurrentDot();

    
}, 3000);

const dots = document.querySelectorAll('.dots div');
let currentDot = 0;

document.addEventListener('DOMContentLoaded', function(){
    changeCurrentDot(currentDot);
})

function changeCurrentDot(){
    let selectedDot = dots[currentDot];
    currentDot++;
   
    
    if(currentDot > 3){
        currentDot = 0;
        console.log(currentDot);
    }
    


    dots.forEach(function(dot){
        dot.innerHTML = '<i class="fas fa-circle">';
        selectedDot.innerHTML = '<i class="far fa-circle">';
    }) 
}




const viewMoreBtn = document.querySelector('.view-more-btn');
const loaderContainer = document.querySelector('.loader-container');
const loader = document.querySelector('.loader-container i');


viewMoreBtn.addEventListener('click', function(e){
    e.target.parentElement.remove();//removing the btn-container
    loaderContainer.classList.add('active');//display loader

    const firstShopSection = document.querySelector('.shop-section-grid');
    firstShopSection.style.marginbottom = '0px';

    setTimeout(function(){
        loaderContainer.classList.remove('active');
    }, 2400) //after 2.4 seconds remove loader animation

    const nextShopSection = document.querySelector('.shop-section-grid2');
   
    setTimeout(function(){
        nextShopSection.style.display = 'grid';
    }, 2400) //unhide the hidden section

    

})

const backToTopBtn = document.querySelector('.back-to-top-btn');

window.addEventListener('scroll', function(){
    if(pageYOffset > 3300){
        backToTopBtn.classList.add('active');
    } else {
        backToTopBtn.classList.remove('active');
    };
})




//show upcoming releases

/*window.addEventListener('scroll', function(){
   const newReleases = document.querySelectorAll('.upcoming-release-item');

   if(pageYOffset > 3400){
    console.log(pageXOffset);
    newReleases.forEach(function(newRelease){
        newRelease.style.opacity = '1';
    }) 
}
  
})*/