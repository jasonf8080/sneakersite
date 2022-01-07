const shoppingCartIcon = document.querySelector('.lni.lni-cart');

shoppingCartIcon.addEventListener('click', function(){
    shiftShoppingCart();
    cover.style.display = 'block';
})



const selectedSneakerImg = document.querySelector('.selected-shoe-container img');
const selectedSneakerBrand = document.querySelector('.brand');
const selectedSneakerTitle = document.querySelector('.shoe-name');
const selectedSneakerPrice = document.querySelector('.price');

window.addEventListener('load', function(){
    const image = localStorage.getItem('image');
    const brand = localStorage.getItem('brand');
    const title = localStorage.getItem('title');
    const price = localStorage.getItem('price');

    selectedSneakerImg.src = image;
    selectedSneakerBrand.textContent = brand;
    selectedSneakerTitle.textContent = title;
    selectedSneakerPrice.textContent = price;
})

//selecting a size
 const sizes = document.querySelectorAll('.size');
 const selectedSize = document.querySelector('.selected-size span');

 sizes.forEach(function(size){
     size.addEventListener('click', function(e){
         const activeSize = e.target;
         selectedSize.textContent = activeSize.textContent;
       
        sizes.forEach(function(size){
            size.classList.remove('active');
            activeSize.classList.add('active');
        })
     })
 })

 //add item to cart
const addToCartBtn = document.querySelector('.add-to-cart-btn');
const shoppingCart = document.querySelector('.shopping-cart');
const cover = document.querySelector('.cover');

addToCartBtn.addEventListener('click', function(e){
    //size is not selected
    if(selectedSize.textContent === ''){
        selectedSize.textContent = 'Please Select a Size';

        setTimeout(function(){
            selectedSize.textContent = '';
        }, 1500)   
             
    } else {
        shiftShoppingCart();
        cover.style.display = 'block';//alter body background color

        //get selected sneaker elements
        const cartImg = e.target.parentElement.previousElementSibling.children[0].src;
        const cartTitle = e.target.parentElement.children[1].textContent;
       

        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        cartItem.innerHTML = `<div class="cart-img-container">
        <img src="${cartImg}">
    </div>

    <div class="cart-info">
        <h3 class="cart-title">${cartTitle}</h3>
        <p class="cart-size">11.5</p>
    </div>

    <div class="exit-price">
         <i class="lni lni-close"></i>
         <p>$120.99</p>
    </div>`;

    shoppingCart.appendChild(cartItem);
    
    
    //remove item from cart
    const removeBtns = cartItem.querySelectorAll('i');
    removeBtns.forEach(function(removeBtn){
        removeBtn.addEventListener('click', function(e){
            e.target.parentElement.parentElement.remove();
        })
    })




    }


  
})


function shiftShoppingCart(){
    shoppingCart.classList.add('active');
}



//hide shopping cart 
const exitCartBtn = document.querySelector('.cart-title-exit i');

exitCartBtn.addEventListener('click', function(){
    shoppingCart.classList.remove('active');
    cover.style.display = 'none';
})

//remove item from cart

