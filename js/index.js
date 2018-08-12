    window.setTimeout(function() {
        $('#rubberBand').addClass('rubberBand')
        $('#rubberBand2').addClass('rubberBand')
    },1000)
    removerubberBand();
    function removerubberBand (){
        window.setTimeout(function() {
            $('#rubberBand').removeClass('rubberBand')
            $('#rubberBand2').removeClass('rubberBand')
        },3000)
    }
    
    window.setInterval(function(){
        $('#rubberBand').addClass('rubberBand')
        $('#rubberBand2').addClass('rubberBand')
        removerubberBand();
    },2000)

    $(window).scroll(function(){ 
        var topp = $(document).scrollTop();
        // console.log(topp);
        if(topp>=1000 && topp<=1200){
            $('#anli').show();
            $('.anli1').addClass('fadeInLeft');
            $('.anli2').addClass('fadeInRight');
            $('.anli3').addClass('fadeInLeft');
            $('.anli4').addClass('fadeInRight');
            $('.anli5').addClass('fadeInLeft');
            $('.anli6').addClass('fadeInRight');

        }else if(topp>=4641 && topp<6300){
            $('.zhanshi8').animate({'margin-top':'0','opacity':'1'},1000);
        }
     })
$('.xzwm li').hover(function(){
    // alert(12)
    // console.log(123)
    $(this).addClass('xzwm_back8')
},function(){
    $('.xzwm li').removeClass('xzwm_back8');
    
})
$('.baoming').hover(function(){
    $(this).attr('src','http://cxf-img-new.b0.upaiyun.com/jingjia/videozhibo/anniu_09.png')
},function(){
    $('.baoming').attr('src','http://cxf-img-new.b0.upaiyun.com/jingjia/videozhibo/anniu_10.png')

})
$('#rubberBand').hover(function(){
    $(this).attr('src','http://cxf-img-new.b0.upaiyun.com/jingjia/videozhibo/anniu_02.png')
},function(){
    $('#rubberBand').attr('src','http://cxf-img-new.b0.upaiyun.com/jingjia/videozhibo/anniu_01.png')

})
$('.kst_tz').click(function(){
     // self.location='dollare.htm';
    // window.open ("https://ryak66.kuaishang.cn/bs/im.htm?cas=58000___777791&fi=68697");
    window.open ("https://gytk5.kuaishang.cn/bs/im.htm?cas=78074___559265&fi=89100");
})
var localUrl = window.location.host;
var beian_obj = {
    "127.0.0.1": "太康县金海达商贸有限公司 太康县老冢镇凡庄行政村 0394-88568862",
        "zb.hzcfsmb.cn": "湖州承丰商贸有限公司",
        "zb.hzcfsm.cn": "湖州承丰商贸有限公司",

    }
$(".beian").html(beian_obj[localUrl]);