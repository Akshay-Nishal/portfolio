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
        if(card[i].id!==name){
            card[i].style.display='none'
        }
        else{
            card[i].style.display='block'

        }
        
    }
}

function displayall(){
    for (let i = 0; card.length; i++) {
        card[i].style.display='block'
    }
}




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
