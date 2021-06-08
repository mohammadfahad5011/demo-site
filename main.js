
// ///////Add active-design on menu items//////

// $(document).ready(function(){

//     //Add active-design on menu items
//     $(document).on('click','ul li',function(){
//         $(this).addClass('active').siblings('.active').removeClass('active')
//     });

// });

///////Active Menu-Bar//////


let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.nav-bar');
let fixdnav = document.querySelector('.nav-header');

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('show');
    
});

///////For-fixd-Nav//////
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('show');

    if(window.scrollY > 150 ){
        fixdnav.classList.add('active');
    }else{
        fixdnav.classList.remove('active');
    }

}


///////For-Search-Container//////

// let sBtn = document.querySelector('#btn-icon');
// let sContainer = document.querySelector('.search-container');
// let sbar = document.querySelector('.searchbar');


// sBtn.addEventListener('click', () =>{
//     sContainer.classList.toggle('active');
//     sbar.classList.toggle('active');

// });




/////////pop-up///////

$(document).ready(function(){
    $('.image-container').magnificPopup({
        type:'image',
        delegate:'a',
        gallery:{
            enabled:true
        }
    });

});


/////////Scroll-top Button///////


$(document).ready(function(){

    // For Button fadeIn and FadeOute

    $(window).scroll(function(){
        if(window.scrollY > 40 ){
            $('#topBtn').fadeIn();
        }else{
            $('#topBtn').fadeOut();
        }
    });

    // For scroll

    $('#topBtn').click(function(){
        $('html , body').animate({scrollTop : 0},800);
    });

});

////////Smooth-scrolling////////

butter.init({
    wrapperDamper: 0.09
  });



