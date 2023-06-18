// SELECTORS
const $board = document.querySelector('#board');
const colors = ['#3399ff', '#79a6d2', '#7094db', '#85adad', '#bbbb77', '#ff4000', '#4d94ff', 'orange', 'purple'];
const squeryCount = 899; 

for(let i=0; i<squeryCount; i++){
    const $squary = document.createElement('div');
    $squary.classList.add('squary');
    $squary.addEventListener('mouseover', ()=> setColor($squary) );
    $squary.addEventListener('mouseleave', ()=> removeColor($squary));
    // $squary.addEventListener('mousedown', ()=> setColor($squary));
    $board.append($squary);
}


function setColor($el){
    const color = getRandomColor();
    $el.style.backgroundColor = color;
    $el.style.boxShadow = `0 0 .1rem ${color} `;
}

function removeColor($el){
    $el.style.backgroundColor = '#2c2b2b';
    $el.style.boxShadow = '0 0 .1rem #000';
}


function getRandomColor(){
    const index = Math.floor(Math.random() * colors.length); 
    return colors[index];
}