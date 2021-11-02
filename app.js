
const clickableCards = document.querySelectorAll('.clickable-card');
const singleCard = document.querySelector('.card-clicked');

clickableCards.forEach(function(card){
    
    card.addEventListener('click', function(e){
        document.body.style.overflow = 'hidden';
        singleCard.classList.add('active');

        const img = e.target.parentElement.children[0].src;
        const title = e.target.parentElement.children[1].children[0].textContent;

        singleCard.innerHTML = `<div class="selected-card">
        <img class="selected-img" src="${img}">
        <div class="info">
            <h2>${title}</h2>
            <p>10.5</p>
        </div>
        <i class="lni lni-close"></i>
    </div>`;


        const exitBtn = document.querySelector('.selected-card i');
        console.log(exitBtn);

        exitBtn.addEventListener('click', function(e){
        singleCard.classList.remove('active');
        document.body.style.overflow = 'auto';
        console.log(e.target);
    })
  
    });//event listener end
})//for each end



/*window.addEventListener('scroll', function(){
    //only when scroll over will these items become visible
    //classlist.add() //no remove either
})*/




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
