//giveaway
const exitGiveawayBtn = document.querySelector('.exit-giveaway i');
const giveawayContainer = document.querySelector('.giveaway-container');

window.addEventListener('DOMContentLoaded', function(){
    setTimeout(function(){
        //initally 0
        giveawayContainer.style.opacity = '1';
    }, 2500);

    //giveaway has been loaded
    exitGiveawayBtn.addEventListener('click', function(e){
    const giveawayContainer = document.querySelector('.giveaway-container');
    giveawayContainer.style.opacity = '0';
    
    document.body.style.overflow = 'auto';

    setTimeout(function(){
        giveawayContainer.remove();
    }, 800)
})
});


document.body.style.overflow = 'auto';


//Make nav fixed
/*const nav = document.querySelector('.nav');
navHeight = nav.getBoundingClientRect().height;

window.addEventListener('scroll', function(){
    
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
*/
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

        //altering hard coded page
        selectedSneaker.innerHTML = `
<div class="back-container">
    <i class="fas fa-chevron-left"></i>

    <div class="alert-div">
    <p>ITEM ADDED TO CART</p><i class="fas fa-check"></i>
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
            
            <div class="size-div">
                    <h3>SIZE:<span>10.5</span></h3>
                    <div class="sizes">
                        <div class="size">8.0</div>
                        <div class="size">8.5</div>
                        <div class="size">9.0</div>
                        <div class="size">9.5</div>
                        <div class="size">10.0</div>
                        <div class="size">10.5</div>
                        <div class="size">11.0</div>
                        <div class="size">11.5</div>
                        <div class="size">12.0</div>
                        <div class="size">12.5</div>
                    </div>
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
    //hidden element moves over 
    selectedSneaker.style.transform = 'translateX(100%)';
        

        //exit card
        const goBackBtn = document.querySelector('.back-container i');
       
        goBackBtn.addEventListener('click', function(e){
            selectedSneaker.style.transform = 'translateX(-100%)';
       })//hide page


    
    
    





    //pt2 --add an item to cart - from individual card
    const addToCartBtn = document.querySelector('.add-to-cart-btn');
    const alertDiv = document.querySelector('.alert-div');

    addToCartBtn.addEventListener('click', function(e){
            alertDiv.style.visibility = 'visible';
            setTimeout(function(){
                alertDiv.style.visibility = 'hidden';
            }, 2000)

           
            cart.classList.add('active');//display none -- to display flex/visible
            const cartItem = document.createElement('div');//create new item
            cartItem.classList.add('shopping-cart-item');
            cartItem.innerHTML = `<img src="${img}">

            <h4>${title}</h4>

            <div class="size-div">
                <p>size:<span class="cart-size">11</span></p>
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

// header slider

let counter = 0 
const frame = document.querySelector('.frame');
const headerImgs = document.querySelectorAll('.slider-item');

setInterval(function(){
    counter++;
    console.log(counter);
    frame.style.transform = `translateX(-${counter}00%)`;

    if(counter > headerImgs.length - 1){
       counter = - 1;
    }
}, 5000)








//change dot along with image/shoe info in slider

/*const dots = document.querySelectorAll('.dots div');
let currentDot = 0;//change to counter?//

window.addEventListener('DOMContentLoaded', function(){
    changeCurrentDot(currentDot);//pass in currentDot into function
});

function changeCurrentDot(fullDot){//holder for variable that will be passed in
    const activeDot = dots[fullDot];
    dots.forEach(function(dot){
        dot.innerHTML = '<i class="fas fa-circle"></i>'
        activeDot.innerHTML = '<i class="far fa-circle"></i>';
    });
}

setInterval(function(){
    currentDot++;
    changeCurrentDot(currentDot);

}, 3000)
*/




//view more products
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

/*const backToTopBtn = document.querySelector('.back-to-top-btn');

window.addEventListener('scroll', function(){
    if(pageYOffset > 3300){
        backToTopBtn.classList.add('active');
    } else {
        backToTopBtn.classList.remove('active');
    };
})*/




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

//scroll animations




const upcomingReleases = document.querySelectorAll('.upcoming-release-item');

const options = {
    threshold: 1.0 //how much the object is revealed, so when 100% of the object is revealed
};

const observer = new IntersectionObserver(function(entries, observer){
    entries.forEach(function(entry){
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    })
}, options);


upcomingReleases.forEach(function(upcomingRelease){
    observer.observe(upcomingRelease);//observe each release
})







const shopOptions = {
    threshold: 0.5 //how much the object is revealed, so when 100% of the object is revealed
};


const shopItemsObserver = new IntersectionObserver(function(entries, shopItemsObserver){
    entries.forEach(function(entry){
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
            //console.log(entry.target)
        } else {
            entry.target.classList.remove('visible');
        }
    })
}, shopOptions)

const cards = document.querySelectorAll('.card');

cards.forEach(function(card){
    shopItemsObserver.observe(card);
});








const mediaFeedOptions = {
    threshold: 0.3
}

const mediaFeedObserver = new IntersectionObserver(function(entries, mediaFeedObserver){
    entries.forEach(function(entry){
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    })
}, mediaFeedOptions)

const mediaFeedImgs = document.querySelectorAll('.media-img-container');

mediaFeedImgs.forEach(function(mediaFeedImg){
    mediaFeedObserver.observe(mediaFeedImg);
})


const brandsOptions = {
    threshold: 0.35
}

const brandsObserver = new IntersectionObserver(function(entries, brandsObserver){
    entries.forEach(function(entry){
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, brandsOptions)


const brandImgs = document.querySelectorAll('.shop-option-item');


brandImgs.forEach(function(brandImg){
    brandsObserver.observe(brandImg);
})

