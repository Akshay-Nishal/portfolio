var card = document.querySelectorAll('.card')
var active_cat = 0
var ids = document.getElementsByTagName('button')

for (let i = 0; i < ids.length; i++) {
    ids[i].addEventListener('click',()=>{
        ids[i].className='active'
        ids[active_cat].classList.remove('active')
        active_cat = i
        if(ids[i].id=='all'){
            displayall()
        }
        else{
            dispcards(ids[i].id);
        }
    })
    
}


function dispcards(name){
    for (let i = 0; i < card.length; i++) {
        if(card[i].classList.contains(name)){
            card[i].style.display='block'
        }
        else{
            card[i].style.display='none'

        }
        
    }
}

function displayall(){
    for (let i = 0; i<15; i++) {
        card[i].style.display='block'
    }
}

displayall()




const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}



var btn = $('#top-arrow');

$(window).scroll(function() {
  if ($(window).scrollTop() > 100) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0});
});