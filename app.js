const sneakers = [
    {
        trending: true,
        image: 'sneaker1.png',
        brand: 'Nike',
        title: 'Nike Air Force 1',
        price: '$120',
    },

    {
        trending: true,
        image: 'sneaker2.png',
        brand: 'Jordan',
        title: 'Nike Air Force 1',
        price: '$120',
    },

    {
        trending: true,
        image: 'sneaker3.png',
        brand: 'Nike',
        title: 'Nike Air Force 1',
        price: '$120',
    },

    {
        trending: true,
        image: 'sneaker4.png',
        brand: 'Yeezy',
        title: 'Nike Air Force 1',
        price: '$120',
    },

    {
        trending: true,
        image: 'sneaker5.png',
        brand: 'Adidas',
        title: 'Nike Air Force 1',
        price: '$120',
    },

    {
        trending: true,
        image: 'sneaker6.png',
        brand: 'Jordan',
        title: 'Nike Air Force 1',
        price: '$120',
    },

    {
        trending: true,
        image: 'sneaker7.png',
        brand: 'Yeezy',
        title: 'Nike Air Force 1',
        price: '$120',
    },

    {
        trending: true,
        image: 'sneaker8.png',
        brand: 'Nike',
        title: 'Nike Air Force 1',
        price: '$120',
    },

    {
        trending: true,
        image: 'sneaker9.png',
        brand: 'Jordan',
        title: 'Yeezy Air Force 1',
        price: '$120',
    },

    {
        trending: true,
        image: 'sneaker10.png',
        brand: 'Yeezy',
        title: 'Nike Air Force 1',
        price: '$120',
    },

    {
        trending: true,
        image: 'sneaker11.png',
        brand: 'Nike',
        title: 'Nike Air Force 1',
        price: '$120',
    },

    {
        trending: true,
        image: 'sneaker12.png',
        brand: 'Adidas',
        title: 'Nike Air Force 1',
        price: '$120',
    },

    {
        trending: true,
        image: 'sneaker13.png',
        brand: 'Jordan',
        title: 'Nike Air Force 1',
        price: '$120',
    },

    {
        trending: true,
        image: 'sneaker14.png',
        brand: 'Yeezy',
        title: 'Nike Air Force 1',
        price: '$120',
    },

    {
        trending: true,
        image: 'sneaker15.png',
        brand: 'Yeezy',
        title: 'Nike Air Force 1',
        price: '$120',
    },

    {
        trending: true,
        image: 'sneaker16.png',
        brand: 'Vans',
        title: 'Nike Air Force 1',
        price: '$120',
    },

    {
        trending: true,
        image: 'sneaker17.png',
        brand: 'Jordan',
        title: 'Nike Air Force 1',
        price: '$120',
    },

    {
        trending: true,
        image: 'sneaker18.png',
        brand: 'Nike',
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

const mediaFeedItems = [
    {
        image: 'https://www.kicksonfire.com/wp-content/uploads/2015/12/Boost-350-4.jpg',
        social: 'facebook',
    },

    {
        image: 'https://cdn.sanity.io/images/c1chvb1i/production/bbf767933d6e59c7b2bcb9a6730abba91e0226bd-700x467.jpg?rect=117,0,467,467&w=700&h=700',
        social: 'instagram',
    },

    {
        image: 'https://static01.nyt.com/images/2020/05/18/multimedia/18xp-jordans/merlin_172309662_16bf4886-cd40-4fe4-ac1b-8c4dba986fb7-mediumSquareAt3X.jpg',
        social: 'facebook',
    },

    {
        image: 'https://images.pexels.com/photos/8451911/pexels-photo-8451911.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        social: 'twitter',
    },

    {
        image: 'https://images.solecollector.com/images/fl_lossy,q_auto,w_910,dpr_auto/obohvnqom3s1ghi4ycgp/patta-nike-air-max-1-monarch-dh1348-001-toe',
        social: 'instagram',
    },

    {
        image: 'https://images.pexels.com/photos/2404959/pexels-photo-2404959.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        social: 'facebook',
    },

    {
        image: 'https://cdn.shopify.com/s/files/1/1313/3665/products/by9612_3_530x@2x.png',
        social: 'instagram',
    },

    {
        image: 'https://craftofmanhood.com/wp-content/uploads/2020/12/Can-a-Man-Wear-Womens-Jordans-Is-It-Weird-00.jpg',
        social: 'facebook',
    },

    {
        image: 'https://pbs.twimg.com/media/D-e7CnqX4AAay0y.jpg',
        social: 'facebook',
    },

    {
        image: 'https://i.pinimg.com/736x/bf/e5/78/bfe57848174613e4d4922c9ed3fd3df4.jpg',
        social: 'instagram',
    },

    {
        image: 'https://sneakerbardetroit.com/wp-content/uploads/2021/08/Nike-Air-Max-97-Cracked-Gold-DO5881-700-Release-Date-7.jpg',
        social: 'twitter',
    },

    {
        image: 'https://i.pinimg.com/736x/cd/ce/a0/cdcea0d74d99bced0258a0395a365535.jpg',
        social: 'instagram',
    }
]

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

function dynamicMediaFeed(){
    const mediaFeedGrid = document.querySelector('.media-feed-grid');

    const dynamicMediaFeed = mediaFeedItems.map(mediaFeedItem => {
    return ` <div class="media-img-container">
                <img src="${mediaFeedItem.image}">
                <i class="lni lni-${mediaFeedItem.social}"></i>
            </div>`;
    })

    const dynamicMediaFeedContent = dynamicMediaFeed.join('');
    mediaFeedGrid.innerHTML = dynamicMediaFeedContent;
}

dynamicMediaFeed();



//Links to category pages using both: navLinks and categorySection btns;
const categoryBtns = document.querySelectorAll('.category-btn');
const categoryLinks = document.querySelectorAll('.links a');

console.log(categoryLinks);

function goToCategoryPage(links){
    links.forEach(function(link){
        link.addEventListener('click', function(e){
             const categoryID = e.target.getAttribute('id');
             localStorage.setItem('categoryID', categoryID);
        })
     });
}

goToCategoryPage(categoryBtns);
goToCategoryPage(categoryLinks);




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




