$(function(){
  // SEC02 TAB
  $('.stat_design').click(function(){
    $('.stat_code').removeClass('active');
    $('.stat_design').addClass('active');
    $('.tab_item_design').css('display','block');
    $('.tab_item_code').css('display','none');
  });
  $('.stat_code').click(function(){
    $('.stat_design').removeClass('active');
    $('.stat_code').addClass('active');
    $('div.tab_item_design').css('display','none');
    $('div.tab_item_code').css('display','block');
  })


//////////////////////////////////////////////
let isFuncRunning = false;
function func1() {
  $(".info_stat").delay(5).stop().animate({"width": "540px"},1000);
  $("#info_ad").stop().animate({'border-radius': '40px'},1000);
  
  $(".info_stat div").delay(500).stop().animate({"opacity": 1},1000);
  $(".career").delay(500).stop().animate({"opacity": 1},1000);

  $(".info_more").delay(500).stop().animate({"width": "330px"},800);
}
function func2() {
    $(".info_stat").delay(5).stop().animate({"width": "590px"},1000);
    $("#info_ad").stop().animate({'border-radius': '40px'},1000);
    
    $(".info_stat div").delay(500).stop().animate({"opacity": 1},1000);
    $(".career").delay(500).stop().animate({"opacity": 1},1000);
    // $("#bgwhite2").delay(500).stop().animate({"opacity": 1},1000);
    $(".info_more").delay(500).stop().animate(
        {
            "width": "330px",
            "border-top-right-radius": "40px"
        }
        ,500)
  }
  function func3() {
    $(".info_stat").stop().animate({"width": "375px",
      "border-radius": "40px"},1000);
  }
function refunc1(){
  $(".info_stat").delay(5).stop().animate({"width": "50px"},800);
  $("#info_ad").stop().animate({'border-radius': '40px 40px 40px 0px'},800);
  
  $(".info_stat div").delay(300).stop().animate({"opacity": 0},700);
  $(".career").delay(300).stop().animate({"opacity": 0},700);

  $(".info_more").delay(300).stop().animate({"width": "50px"},500);
}
function refunc2(){
    $(".info_stat").delay(5).stop().animate({"width": "0"},1000);
    $("#info_ad").stop().animate({'border-radius': '40px 40px 40px 0px'},1000);

    $(".info_stat div").delay(500).stop().animate({"opacity": 0},1000);
    $(".career").delay(500).stop().animate({"opacity": 0},1000);

    $(".info_more").stop().animate(
        {
            "width": "330px",
            "border-top-right-radius": "0px"
        }
        ,500)

}
// IntersectionObserver 설정
let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
      if (entry.isIntersecting && !isFuncRunning) {
          // 요소가 화면에 보이면 func 함수 실행

          if($(window).width() < 1480) {
            // window 크기가 1480px보다 작을때
            func2();
            }
          if($(window).width() < 768) {
            // window 크기가 768px보다 작을때
            func3();
            }
          else {
            // window 크기가 1480px보다 클때
            func1();

            }
          isFuncRunning = true;
      } else {
          // 요소가 화면에서 사라지면 추가 작업을 여기서 할 수 있음 (선택사항)
          // 요소가 화면에 보이면 func 함수 실행

          if($(window).width() < 1480) {
            // window 크기가 1480px보다 작을때
            refunc2();    
            
            }
            if($(window).width() < 768) {
              // window 크기가 768px보다 작을때
              func3();
              }
               else {
            // window 크기가 1480px보다 클때
          refunc1();

            }
          isFuncRunning = false;
      }
  });
}, {
  threshold: 0.1 // 요소가 10% 이상 보일 때 트리거
});

// 관찰할 대상 선택
let target = document.querySelector('.sec02');
observer.observe(target);


// /////////////////////////////////////////////

// 스크롤 1섹션씩

///////////////////////////////////////////////
var mhtml = $("html");
var page = 1;


mhtml.animate({scrollTop : 0},10);


$(window).on("wheel", function(e) {
  if(mhtml.is(":animated")) return;
  if(e.originalEvent.deltaY > 0) {
      if(page == 3) return;
      page++;
  } else if(e.originalEvent.deltaY < 0) {
      if(page == 1) return;
      page--;
  }
  var posTop =(page-1) * $(window).height();
  mhtml.animate({scrollTop : posTop});
})
/////////////////////////////////////////////





/////////////////////////////////////////////
let isFuncRunning2 = false;
let text = "PORTFOLIO";
        let originalText = ""; // 원래 텍스트를 저장할 변수
        let typingFinished = false; // 타이핑 완료 여부를 저장

        function typing() {
            const target = document.querySelector('.sec01 p:nth-child(1)');
            originalText = target.innerHTML; // 원래 텍스트 저장
            let i = 0;

            function type() {
                if (i < text.length) {
                    target.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, 100);
                } else {
                    typingFinished = true; // 타이핑 완료
                }
            }
            type();
        }

        function eraseText() {
            if (!typingFinished) return; // 타이핑이 끝나지 않았으면 실행하지 않음

            const target = document.querySelector('.sec01 p:nth-child(1)');
            let currentText = target.innerHTML; // 현재 텍스트
            let length = currentText.length;

            function erase() {
                if (length > 0) {
                    target.innerHTML = currentText.slice(0, length - 1); // 한 글자씩 제거
                    length--;
                    setTimeout(erase, 100); // 일정 시간 간격으로 반복
                } else {
                    typingFinished = false; // 타이핑이 끝난 상태 리셋
                }
            }
            erase();
        }

        // IntersectionObserver 설정
        let obs = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // .sec01 요소가 화면에 보일 때 typing() 실행
                    typing();
          isFuncRunning2 = true;

                } else {
                    // .sec01 요소가 화면에서 사라지면 eraseText() 실행
                    eraseText();
          isFuncRunning2 = false;

                }
            });
        }, {
            threshold: 0.1 // 요소가 10% 이상 보일 때 트리거
        });

        // 관찰할 대상 선택
        let target2 = document.querySelector('.sec01');
        obs.observe(target2);





















});

