function easy(){
    window.location.href ="practiseEasy.html";//跳转页面
}
function normal(){
    window.location.href ="practiseNormal.html";//跳转页面
}
function hard(){
    window.location.href ="practiseHard.html";//跳转页面
}
function ruleOpen(){
    var rule =document.getElementById("rule");
    rule.style.display="block";
}
function ruleClose(){
    var rule =document.getElementById("rule");
    rule.style.display="none";
}
// $function(){
//     //1.监听游戏规则的点击
//     $(".rules").click(function () {
//         $(".rule").stop().fadeIn(100);
//     })
//     //2.监听游戏规则关闭按钮
//     $(".rule").find("a").click(function () {
//         $(".rule").stop().fadeOut(100);
//     })
// }
