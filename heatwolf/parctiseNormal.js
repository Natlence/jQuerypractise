$(function () {
    //1.监听游戏规则的点击
    $(".rules").click(function () {
        $(".rule").stop().fadeIn(100);
    })
    //2.监听游戏规则关闭按钮
    $(".rule").find("a").click(function () {
        $(".rule").stop().fadeOut(100);
    })
    //3.监听开始按钮使其消失
    $(".start").click(function () {
        $(this).stop().fadeOut(100);
        //处理进度条的方法
        progressHandler();
        //灰太狼动画的方法
        startWolfAnimaition();
    })
    //监听重新开始
    $(".reStart").click(function () {
        $(".mask").stop().fadeOut(100);
        $(".start").stop().fadeIn(100);
    })
    //专门定义一个进度条的函数
    function progressHandler() {
        //重新设置进度条的宽度
        $(".progress").css({
            width:180
        })
        //定义一个定时器
        var timer = setInterval(function () {
            //获取进度条的宽度
            var progressWidth = $(".progress").width();
            //进度条宽度减小
            progressWidth-=5;
            //重新赋值回去
            $(".progress").css({
                width:progressWidth
            })
            //时间用完后，弹出结束游戏
            if(progressWidth<=0){
                clearInterval(timer);
                $(".mask").stop().fadeIn(100);
                //停止灰太狼动画
                stopWolfAnimation();
            }
        },800)
    }
    var wolfTimer;
    //专门定义一个灰太狼动画的函数
    function startWolfAnimaition() {
        //定义两个数组，保存灰太狼和小灰灰
        var wolf_1 = ['img/h0.png','img/h1.png','img/h2.png','img/h3.png','img/h4.png','img/h5.png','img/h6.png','img/h7.png','img/h8.png','img/h9.png',];
        var wolf_2 = ['img/x0.png','img/x1.png','img/x2.png','img/x3.png','img/x4.png','img/x5.png','img/x6.png','img/x7.png','img/x8.png','img/x9.png',];
        //定义一个数组保存所有可能出现的位置
        var arrPos=[
            {left:"100px",top:"115px"},
            {left:"20px",top:"160px"},
            {left:"190px",top:"142px"},
            {left:"105px",top:"193px"},
            {left:"19px",top:"221px"},
            {left:"202px",top:"212px"},
            {left:"120px",top:"275px"},
            {left:"30px",top:"295px"},
            {left:"209px",top:"297px"},
        ];
        //创建一个图片
        var $wolfImage = $("<img src='' class='wolfImage'>");
        //随机获取图片位置
        var posIndex = Math.floor(Math.random()*8);
        //设置图片显示位置
        $wolfImage.css({
            position:"absolute",
            left:arrPos[posIndex].left,
            top:arrPos[posIndex].top
        });
        //随机获取数据类型
        var wolfType = Math.round(Math.random())==0 ? wolf_1 : wolf_2;
        //设置图片内容
        window.wolfIndex = 0;
        window.wolfIndexEnd = 5;
        wolfTimer = setInterval(function () {
            if(wolfIndex>wolfIndexEnd){
                $wolfImage.remove();
                clearInterval(wolfTimer);
                startWolfAnimaition();
            }
            $wolfImage.attr("src",wolfType[wolfIndex]);
            wolfIndex++;
        },120)
        $wolfImage.attr("src",wolfType[5]);
        //将图片添加到页面上
        $(".container").append($wolfImage.attr("src",wolfType[wolfIndex]));
        //调用处理游戏规则的方法
        gameRules($wolfImage);
    }
    function gameRules($wolfImage){
        $wolfImage.one("click",function(){
            //修改索引
            window.wolfIndex = 5;
            window.wolfIndexEnd = 9;
            //拿到当前图片的地址
            var $src =$(this).attr("src");
            //根据图片地址判断是否是灰太狼
            var flag = $src.indexOf("h")>=0;
            //根据图片点击类型增减分数
            if(flag){
                $(".score").text(parseInt($(".score").text())+10);
            }
            else{
                $(".score").text(parseInt($(".score").text())-10);
            }

        })
    }
    function stopWolfAnimation(){
        $(".wolfImage").remove();
        clearInterval(wolfTimer);
    }
})
function back(){
    window.location.href="practise.html"
}
