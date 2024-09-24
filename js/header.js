window.addEventListener('scroll', function(){
    let navbar = selectId('header');
    let buttonSection = selectId('button-section');
    let historyBorder = selectId('btn-history');
    let headerBg = selectId('header-content')
    if(window.pageYOffset >= 200){
        navbar.classList.add('fixed','backdrop-blur-3xl');
        buttonSection.classList.add('md:mt-4');
        historyBorder.classList.add('border-gray-900')
        headerBg.classList.remove('bg-[#F9F7F3]')

    }else{
        navbar.classList.remove('fixed');
        historyBorder.classList.remove('border-gray-900');
        headerBg.classList.add('bg-[#F9F7F3]')
        buttonSection.classList.remove('md:mt-4');
    }
})