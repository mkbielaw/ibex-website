// const premades = [
//     {
//     id: 'tag1',
//     h1: 'climb your way',
//     p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi animi et ipsum esse explicabo obcaecati atque eius nobis nostrum distinctio?',
//     a: 'discover our bikes',
//     },
//     {
//     id: 'tag2',
//     h1: 'made to last',
//     p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi animi et ipsum esse explicabo obcaecati atque eius nobis nostrum distinctio?',
//     a: 'enter the workshop',
//     },
//     {
//     id: 'tag3',
//     h1: 'comfort & reliability',
//     p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi animi et ipsum esse explicabo obcaecati atque eius nobis nostrum distinctio?',
//     a: 'see the collection',
//     },
// ];

const searchBtn = document.querySelector('.search');
const searchBar = document.querySelector('.search-bar');
const links = document.querySelector('.links');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const btns = document.querySelector('.buttons');
const everyBtn = document.querySelectorAll('.button');
const banners = document.querySelectorAll('.banner');
const whiteBox = document.querySelector('.whitebox');
const navbar = document.querySelector('.navbar');
const header = document.querySelector('header');

let tags = [];
let tagIndex = 1;
const delay = 200;


searchBtn.addEventListener('click',function(){
    searchBar.classList.toggle('searching');
    searchBtn.classList.toggle('searching');
    links.classList.toggle('hidden');
})

btns.addEventListener('click',function(e){
    whiteBox.classList.add('changing');
    setTimeout(() => {
        changeBanner(e)
    },delay );
});

next.addEventListener('click',function(){
    tagIndex++;
    if(tagIndex>tags.length){
        tagIndex = 1;
    };
    whiteBox.classList.add('changing');
    setTimeout(() => {
        nextPrev(tagIndex);
    }, delay);
});

prev.addEventListener('click',function(){
    tagIndex--;
    if(tagIndex<=0){
        tagIndex = tags.length;
    };
    whiteBox.classList.add('changing');
    setTimeout(() => {
        nextPrev(tagIndex);
    }, delay);
});

banners.forEach(function(e){
    const id = e.id;
    let index = 1;
    if(id){
        tags.splice(index,0,id);
        index++;
    }
});
// FIXED NAVBAR
window.addEventListener('scroll',function(){
    const scrollHeight = window.pageYOffset;
    const headHeight = header.getBoundingClientRect().height;
    if(scrollHeight > headHeight){
        navbar.classList.add('fixedbar');
    }else{
        navbar.classList.remove('fixedbar');
    }
});

// FUNCTIONS
function changeBanner(e){
    const id = e.target.dataset.id;
    if(id){
        tagIndex = parseInt(id.substr(3,1));
        // remove active from other buttons
        everyBtn.forEach(function(btn){
            btn.classList.remove('active-banner');
        });
        e.target.classList.add('active-banner');
        // hide other banners
        banners.forEach(function(banner){
            banner.classList.remove('active-banner');
        });
        document.getElementById(id).classList.add('active-banner');
    };
    whiteBox.classList.remove('changing');
}

function nextPrev(target){
    // remove active from other buttons
    everyBtn.forEach(function(btn){
        btn.classList.remove('active-banner');
    });
    // add active to btn
    const actBtn = btns.querySelector('[data-id="tag'+target+'"]');
    actBtn.classList.add('active-banner');
    // hide other banners
    banners.forEach(function(banner){
        banner.classList.remove('active-banner');
    });
    document.getElementById('tag'+target).classList.add('active-banner');
    whiteBox.classList.remove('changing');
}
