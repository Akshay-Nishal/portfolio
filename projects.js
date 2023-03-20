var card = document.querySelectorAll('.card')
console.log(card);
var active_cat = 0
var ids = document.getElementsByTagName('button')
console.log(ids);

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
    console.log("disp func called");
    for (let i = 0; i < card.length; i++) {
        console.log(card[i].id);
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