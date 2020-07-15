
window.addEventListener('load', ()=>{

const sonidos = document.querySelectorAll('.sonidos');
const pads = document.querySelectorAll('.pads');
const visual = document.querySelector('.visual');
const colores = [
    "#B2FF59",
    "#69F0AE",
    "#C8E6C9",
    "#004D40",
    "#006064",
    "#424242"
];

// obtener todos los divs con audios
pads.forEach((pad, index) =>{
    pad.addEventListener('click', function(){
        sonidos[index].currentTime=0;
        sonidos[index].play();
        crearBolas(index);
    });
});

const crearBolas = index =>{
    const bolas = document.createElement('div');
    visual.appendChild(bolas);
    bolas.style.backgroundColor = colores[index];
    bolas.style.animation=`jump 1s ease`;

    bolas.addEventListener('animationend', function(){
        visual.removeChild(this);
    });
}







});












