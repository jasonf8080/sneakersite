const sneakers = [
    {
        trending: true,
        image: 'sneaker-img1.png',
        brand: 'Nike',
        title: 'Nike Air Force 1',
        price: '$120',
    },

    {
        trending: true,
        image: 'sneaker-img2.png',
        brand: 'Jordan',
        title: 'Nike Air Force 1',
        price: '$120',
    },

    {
        trending: true,
        image: 'sneaker-img3.png',
        brand: 'Yeezy',
        title: 'Nike Air Force 1',
        price: '$120',
    },

    {
        trending: true,
        image: 'nike43.png',
        brand: 'Nike',
        title: 'Nike Air Force 1',
        price: '$120',
    },

    {
        trending: true,
        image: 'sneaker-img5.png',
        brand: 'Yeezy',
        title: 'Nike Air Force 1',
        price: '$120',
    },

    {
        trending: true,
        image: 'sneaker-img6.png',
        brand: 'Nike',
        title: 'Nike Air Force 1',
        price: '$120',
    },

    {
        trending: true,
        image: 'sneaker-img7.png',
        brand: 'Nike',
        title: 'Nike Air Force 1',
        price: '$120',
    },

    {
        trending: true,
        image: 'sneaker-img8.png',
        brand: 'Jordan',
        title: 'Nike Air Force 1',
        price: '$120',
    },

    {
        trending: true,
        image: 'sneaker-img24.png',
        brand: 'Yeezy',
        title: 'Yeezy Air Force 1',
        price: '$120',
    },

    {
        trending: true,
        image: 'sneaker-img15.png',
        brand: 'Yeezy',
        title: 'Nike Air Force 1',
        price: '$120',
    },

    {
        trending: true,
        image: 'sneaker-img11.png',
        brand: 'Jordan',
        title: 'Nike Air Force 1',
        price: '$120',
    },

    {
        trending: true,
        image: 'sneaker-img12.png',
        brand: 'Nike',
        title: 'Nike Air Force 1',
        price: '$120',
    },

    {
        trending: true,
        image: 'sneaker-img13.png',
        brand: 'Vans',
        title: 'Nike Air Force 1',
        price: '$120',
    },

    {
        trending: true,
        image: 'sneaker-img14.png',
        brand: 'Nike',
        title: 'Nike Air Force 1',
        price: '$120',
    },

    {
        trending: true,
        image: 'sneaker-img10.png',
        brand: 'Yeezy',
        title: 'Nike Air Force 1',
        price: '$120',
    },

    {
        trending: true,
        image: 'sneaker-img9.png',
        brand: 'Yeezy',
        title: 'Nike Air Force 1',
        price: '$120',
    },

    {
        trending: true,
        image: 'sneaker-img19.png',
        brand: 'Nike',
        title: 'Nike Air Force 1',
        price: '$120',
    },

    {
        trending: true,
        image: 'sneaker-img20.png',
        brand: 'Adidas',
        title: 'Nike Air Force 1',
        price: '$120',
    },

    {
        image: 'sneaker-img20.png',
        brand: 'Jordan',
        title: 'Jordan Air Force 1',
        price: '$120',
    },

    {
        image: 'sneaker-img20.png',
        brand: 'Jordan',
        title: 'Jordan Air Force 1',
        price: '$120',
    },

    {
        image: 'sneaker-img20.png',
        brand: 'Jordan',
        title: 'Jordan Air Force 1',
        price: '$120',
    },

    {
        image: 'sneaker-img20.png',
        brand: 'Jordan',
        title: 'Jordan Air Force 1',
        price: '$120',
    },

    {
        image: 'sneaker-img20.png',
        brand: 'Jordan',
        title: 'Jordan Air Force 1',
        price: '$120',
    },
];

//dynamically add html using js objects
const trendingSneakersGrid = document.querySelector('.shop-section-grid');

window.addEventListener('DOMContentLoaded', function(){
    addSneakersToDOM();
})

function addSneakersToDOM(){
    let trendingSneakers = []
    for(let i = 0; i < sneakers.length; i++){
        if(sneakers[i].trending === true){
            trendingSneakers.push(sneakers[i]);
        }
        
    }
    let trendingSneakersContent = trendingSneakers.map(trendingSneaker => `
    <div class="card">
        <img class="img" src="${trendingSneaker.image}">
        <div class="info">
            <p>${trendingSneaker.brand}</p>
            <h2>${trendingSneaker.title}</h2>
            <p>$${trendingSneaker.price}</p>
        </div>

        <a href="index3.html" class="clickable-card"></a>
    </div>
    `).join('');
    
    trendingSneakersGrid.innerHTML = trendingSneakersContent;

    fadeInSneakers();
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



//lazy loading of shop items (fade-in)
function fadeInSneakers(){
    const shopOptions = {
        threshold: 0.4 //how much the object is revealed, so when 100% of the object is revealed
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
    
}


const menuBtn = document.querySelector('.lni.lni-menu');
const menu = document.querySelector('.site-menu');

menuBtn.addEventListener('click', function(){
    menu.classList.add('active');
    displayCover();

    //exit menu 
    const menuExitBtn = menu.querySelector('.exit-container i')
    menuExitBtn.addEventListener('click', function(){
        menu.classList.remove('active');
        cover.style.display = 'none';
        
    })
})

//cover document when shop/menu is open
const cover = document.querySelector('.cover');

function displayCover(){
    cover.style.display = 'block';
}




//make nav fixed
const nav = document.querySelector('.fixed-nav-container');

window.addEventListener('scroll', function(){
    const navHeight = nav.getBoundingClientRect().height;
    if(pageYOffset > navHeight){
        nav.style.position = 'fixed';
    } else {
        nav.style.position = 'static';
    }
})




//access cart when clicked on icon
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




// header slider

let counter = 0 
const frame = document.querySelector('.frame');
const headerImgs = document.querySelectorAll('.slider-item');

setInterval(function(){
    counter++;
    console.log(counter);
    frame.style.transform = `translateX(-${counter}00%)`;

    if(counter > headerImgs.length - 1 - 1){
       counter = - 1;
    }
}, 5000)





const dots = document.querySelectorAll('.dots div');
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

    if(currentDot > dots.length - 1 - 1){
        currentDot = - 1;
    }

}, 5000)





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
    threshold: 0.5 //how much the object is revealed, so when 100% of the object is revealed
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



function show(){
    const shopOptions = {
        threshold: 0.4 //how much the object is revealed, so when 100% of the object is revealed
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
}











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


const categoryBtns = document.querySelectorAll('.category-btn');

categoryBtns.forEach(function(categoryBtn){
   categoryBtn.addEventListener('click', function(e){
        const categoryID = e.target.getAttribute('id');
        localStorage.setItem('categoryID', categoryID);
        
   })

});