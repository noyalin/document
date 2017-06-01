// jQuery(function () {
//     //选项卡滑动切换通用
//     jQuery(function () {
//         jQuery(".hoverTag .chgBtn").hover(function () {
//             jQuery(this).parent().find(".chgBtn").removeClass("chgCutBtn");
//             jQuery(this).addClass("chgCutBtn");
//             var cutNum = jQuery(this).parent().find(".chgBtn").index(this);
//             jQuery(this).parents(".hoverTag").find(".chgCon").hide();
//             jQuery(this).parents(".hoverTag").find(".chgCon").eq(cutNum).show();
//         })
//     });
//
//     //选项卡点击切换通用
//     jQuery(function () {
//         jQuery(".clickTag .chgBtn").click(function () {
//             jQuery(this).parent().find(".chgBtn").removeClass("chgCutBtn");
//             jQuery(this).addClass("chgCutBtn");
//             var cutNum = jQuery(this).parent().find(".chgBtn").index(this);
//             jQuery(this).parents(".clickTag").find(".chgCon").hide();
//             jQuery(this).parents(".clickTag").find(".chgCon").eq(cutNum).show();
//         })
//     });
//
//
//     //点击查看原图
//     $(".mskeLayBg").height($(document).height());
//     // var small = $(".msKeimgBox li img:first-child");
//     // small.attr("title", "点击查看原图")
//     // $(".msKeimgBox li").click(function () {
//     //     $(".mske_html").html($(this).find(".hidden").html());
//     //     $(".mskeLayBg").show();
//     //     $(".mskelayBox").fadeIn(300)
//     // });
//     //
//     //
//     // var big_img = $(".hidden img:first-child");
//     // big_img.attr("title", "点击还原缩略图");
//     // big_img.css("cursor", "pointer");
//     // big_img.css("max-width", "1920" + "px");
//     // var big_img_close = $(".mske_html").html($(this).find(".hidden").html());
//     // big_img_close.click(function () {
//     //     $(".mskeLayBg,.mskelayBox").hide()
//     // });
//     //
//
//
//
//
// });
function getInner() {
    if (typeof window.innerWidth == 'undefined') {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    } else {
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        }
    }
}

window.onload=function () {
    var img_click=document.getElementById('img_click');

    img_click.onclick=function () {
        var original_img=document.getElementById('original_img');
        original_img.style.width=getInner().width+'px';
        original_img.style.height=getInner().height+'px';
    };

};


// //屏蔽页面错误
// jQuery(window).error(function () {
//     return true;
// });
// jQuery("img").error(function () {
//     $(this).hide();
// });
//
// // Sofia03-05 Q & A 页面滑动效果
// $(document).ready(function () {
//     $(".btn_detail,.omsbtn_detail,.wmsbtn_detail").hide();
//     $(".btn").click(function () {
//         $(".btn_detail").slideToggle();
//     });
//     $(".omsbtn").click(function () {
//         $(".omsbtn_detail").slideToggle();
//     });
//     $(".wmsbtn").click(function () {
//         $(".wmsbtn_detail").slideToggle();
//     });
//     $(".cmsbtn").click(function () {
//         $(".cmsbtn_detail").slideToggle();
//     });
// });
//
// //sofia 03-16 tab标签
// function resetTabs(obj) {
//     $(obj).parent().parent().next("div").find("div").hide();
//     $(obj).parent().parent().find("a").removeClass("current");
// }
//
// function loadTab() {
//     $(".content > div").hide();
//     $(".tabs").each(function () {
//         $(this).find("li:first a").addClass("current");
//     });
//     $(".content").each(function () {
//         $(this).find("div:first").fadeIn();
//     });
//     $(".tabs a").on("click", function (e) {
//         e.preventDefault();
//         if ($(this).attr("class") == "current") {
//             return;
//         } else {
//             resetTabs(this);
//             $(this).addClass("current");
//             $($(this).attr("name")).fadeIn();
//         }
//     });
// }
//
//
