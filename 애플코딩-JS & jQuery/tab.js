//for(let i = 0; i < $('.tab-button').length; i++){
//    $('.tab-button').eq(i).click(function(){
//        $('.tab-button').removeClass('active');
//        $('.tab-content').removeClass('show');
//        $('.tab-button').eq(i).addClass('active');
//        $('.tab-content').eq(i).addClass('show');
//    });
//}

$('.list').data('작명','값');
$('.list').data('작명');

$('.list').click(function(e){
    탭열기(e.target.dataset.id);
});

function 탭열기(숫자){
    $('.tab-button').removeClass('active');
    $('.tab-content').removeClass('show');
    $('.tab-button').eq(숫자).addClass('active');
    $('.tab-content').eq(숫자).addClass('show');
}