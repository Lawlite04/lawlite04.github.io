// navbar
var checkbox = document.querySelector('.humberger-menu input');
var navbar = document.querySelector('nav ul');

checkbox.addEventListener('click', function(){
    if(checkbox.checked == true){
        navbar.classList.add('show');
    }else{
        navbar.classList.remove('show');
    }
});

// end navbar

// kategori
var semua = document.querySelectorAll('.all');
var brand = document.querySelectorAll('.brand');
var cetak = document.querySelectorAll('.cetak');
var kemasan = document.querySelectorAll('.kemasan');
filtering('all');
function filtering(c){
    if(c == 'all'){
        for(let i = 0; i < semua.length; i++){
            semua[i].classList.add('show');
        }
    }

    if(c == 'brand'){
        for(let i = 0; i < semua.length; i++){
            semua[i].classList.remove('show');
        }

        for(let i = 0; i < brand.length; i++){
            brand[i].classList.add('show');
        }
    }

    if(c == 'cetak'){
        for(let i = 0; i < semua.length; i++){
            semua[i].classList.remove('show');
        }

        for(let i = 0; i < cetak.length; i++){
            cetak[i].classList.add('show');
        }
    }

    if(c == 'kemasan'){
        for(let i = 0; i < semua.length; i++){
            semua[i].classList.remove('show');
        }

        for(let i = 0; i < kemasan.length; i++){
            kemasan[i].classList.add('show');
        }
    }
}
// end kategori

// to beranda

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    if(wScroll >= $('#tentang-kami').offset().top){
        $('.toup').css({
            'opacity': '1',
        });
    }
    if(wScroll <= $('#tentang-kami').offset().top){
        $('.toup').css({
            'opacity': '0',
        });
    }
});
