$(document).ready(function() {


function show() {
    $('.c02').css('display', 'block');
    $('.c01, .c03').css('display', 'none');
}


function unshow() {
    $('.c01').css('display', 'block');
    $('.c02, .c03').css('display', 'none');
}



    let obs = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // .sec01 요소가 화면에 보일 때 typing() 실행
                show();
      isFuncRunning2 = true;

            } else {
                // .sec01 요소가 화면에서 사라지면 eraseText() 실행
                unshow();
      isFuncRunning2 = false;

            }
        });
    }, {
        threshold: 0.1 // 요소가 10% 이상 보일 때 트리거
    });

    // 관찰할 대상 선택
    let target2 = document.querySelector('.c02IMG');
    obs.observe(target2);


});


$(document).ready(function() {

    $('.contBTN > li').on('click', function() {
        // data-target 속성에서 대상 섹션 ID 가져오기
        var target = $(this).data('target');
        
        // 부드럽게 스크롤
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500); // 500ms 동안 스크롤
    });

});



