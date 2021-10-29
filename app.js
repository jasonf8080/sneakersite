
const clickableCards = document.querySelectorAll('.clickable-card');
const singleCard = document.querySelector('.card-clicked');

clickableCards.forEach(function(card){
    
    card.addEventListener('click', function(e){
        singleCard.classList.add('active');

        const img = e.target.parentElement.children[0].src;
        const title = e.target.parentElement.children[1].children[0].textContent;

        singleCard.innerHTML = `<div class="selected-card">
        <img class="selected-img" src="${img}">
        <div class="info">
            <h2>${title}</h2>
            <p>10.5</p>
        </div>
        <i class="fas fa-times"></i>
    </div>`;


        const exitBtn = document.querySelector('.selected-card i');
        console.log(exitBtn);

        exitBtn.addEventListener('click', function(e){
        singleCard.classList.remove('active');
        console.log(e.target);
    })
  
    });//event listener end
})//for each end


/*window.addEventListener('scroll', function(){
    //only when scroll over will these items become visible
    //classlist.add() //no remove either
})*/