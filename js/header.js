window.addEventListener('scroll', function(){
    let navbar = selectId('header');
    let buttonSection = selectId('button-section');
    if(window.pageYOffset >= 200){
        navbar.classList.add('fixed','backdrop-blur-3xl');
        buttonSection.classList.add('md:mt-4');

    }else{
        navbar.classList.remove('fixed');
    }
})