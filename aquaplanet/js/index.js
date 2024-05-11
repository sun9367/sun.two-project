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



//--------------------- 변경예정
/* window.onload = function() {

  window.addEventListener('wheel', function(event) {
    // 스크롤 방향 확인
    var delta = Math.sign(event.deltaY);
    
    // 화면 전체높이 만큼 이동
    if (delta > 0) {
      window.scrollBy(0, window.innerHeight); // 아래로 스크롤
    } else {
      window.scrollBy(0, -window.innerHeight); // 위로 스크롤
    }
    
    // 이벤트 전파 방지
    event.preventDefault();
  });
};
 */


