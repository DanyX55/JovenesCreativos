const btnSwitch = document.querySelector(".navbar__switch");
btnSwitch.addEventListener("click",()=>{
    btnSwitch.classList.toggle("navbar__switch--active");
    document.body.classList.toggle("dark");
    document.getElementById("fondo").classList.toggle('fade');
    document.getElementById("fondo").classList.toggle('fade--on');
    
}
)