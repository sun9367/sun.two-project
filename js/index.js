$(function(){
    // 메뉴
    $('.headerwrap').mouseover(function(){
      $('.nav_s').stop().slideDown();
      $('#aqualogo').attr('src', 'img/logo_2.png');
      $('#navimg').stop().slideDown();
    })

    $('.headerwrap').mouseout(function(){
      $('.nav_s').stop().slideUp();
      $('#aqualogo').attr('src', 'img/logo_1.png');
      $('#navimg').stop().slideUp();
    })

});

// 페이지 실행시 함수적용
window.onload = function() {
  scrollTop();
  scrollNav();
};

// 스크롤 위치를 확인하여 실행여부
document.querySelector('.container').addEventListener('scroll', function() {
  scrollNav();
  scrollTop();
});



// aside 맨위로 버튼
function scrollTop() {
  let container = document.querySelector('.container');
  if (container.scrollTop > 20) {
      document.getElementById("TopBtn").style.display = "block";
  } else {
      document.getElementById("TopBtn").style.display = "none";
  }
}


// 헤더, 네비 스크롤발생시 fixed 네비만
function scrollNav() {
  let navElement = document.getElementById('nav');
  var container = document.querySelector('.container');
  if (container.scrollTop > 20) {
    navElement.style.position = 'fixed';
    navElement.style.top = '0';
    navElement.style.zIndex = '999';
  } else {
    navElement.style.position = 'relative';
    navElement.style.top = '0';
  }
}


//가운데 스크롤애니메이션 푸터 만나면 사라짐
let scrollbar = document.querySelector('.scroll-bar');

let scrollbarhiOb = new IntersectionObserver((e) => {
  e.forEach((a) => {
    if (a.isIntersecting) {
      scrollbar.style.display = 'none';
    }    
  }) 
});

let footer = document.querySelector('.footer_s');
scrollbarhiOb.observe(footer)

// 사라진 스크롤바 맨위로오면 다시 생김
let scrollbarshowOb = new IntersectionObserver((e) => {
  e.forEach((a) => {
    if (a.isIntersecting) {
      scrollbar.style.display = 'block';
    }    
  }) 
});
let header = document.querySelector('.headerwrap');
scrollbarshowOb.observe(header)




// 애니메이션 효과

let fadeUpOb = new IntersectionObserver((e) => {
  e.forEach((a) => {
    if (a.isIntersecting) {
      a.target.classList.add('animate__animated', 'animate__fadeInUp');
    }
  })
})

let bgtexth1 = document.querySelector('.bgtext > h1');
let bgtextp = document.querySelector('.bgtext > p');
let programbox = document.querySelectorAll('.programbox > div');

let inforbox = document.querySelectorAll('.inforbox > div');
let section3h1 = document.querySelector('#section3 > h1');
let section3p = document.querySelector('#section3 > p');

let eventbox = document.querySelectorAll('.eventbox > div');
let section4h1 = document.querySelector('.eventTextbox > h1');
let section4p = document.querySelector('.eventTextbox > p');

let groupbox = document.querySelectorAll('.groupbox > div');
let section5h1 = document.querySelector('.groupTextbox > h1');
let section5p = document.querySelector('.groupTextbox > p');

let commubox = document.querySelectorAll('.commubox > div');
let section6h1 = document.querySelector('.commuTextbox > h1');
let section6p = document.querySelector('.commuTextbox > p');

fadeUpOb.observe(bgtexth1)
fadeUpOb.observe(bgtextp)
fadeUpOb.observe(programbox[0])
fadeUpOb.observe(programbox[1])
fadeUpOb.observe(programbox[2])

fadeUpOb.observe(inforbox[0])
fadeUpOb.observe(inforbox[1])
fadeUpOb.observe(section3h1)
fadeUpOb.observe(section3p)

fadeUpOb.observe(section4h1)
fadeUpOb.observe(section4p)
fadeUpOb.observe(eventbox[0])
fadeUpOb.observe(eventbox[1])
fadeUpOb.observe(eventbox[2])

fadeUpOb.observe(section5h1)
fadeUpOb.observe(section5p)
fadeUpOb.observe(groupbox[0])
fadeUpOb.observe(groupbox[1])
fadeUpOb.observe(groupbox[2])

fadeUpOb.observe(section6h1)
fadeUpOb.observe(section6p)
fadeUpOb.observe(commubox[0])
fadeUpOb.observe(commubox[1])
fadeUpOb.observe(commubox[2])
fadeUpOb.observe(commubox[3])
