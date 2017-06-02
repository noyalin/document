//点击查看原图
window.onload=function () {
    $("body").delegate(".img_click img", "click", function (evt) {
        evt.stopPropagation();
        var $w = $(window).width();
        var $h = $(window).height();
        $('#big_img_bg').css('width', $w + 'px');
        $('#big_img_bg').css('height', $h + 'px');
        $('#big_img_bg').css('display', 'block');

        //防止重复添加img元素

        //获取img的src
        var $img_src = $('.img_click img').attr('src');
        //创建新的img
        var $big_img_ele = $('<img>');
        $('#big_img').empty();
        $big_img_ele.attr('src', $img_src).appendTo('#big_img');
        var $b_w = $('#big_img').width();
        var $b_h = $('#big_img').height();
        var $left = ($w - $b_w) / 2 + 'px';
        var $top = ($h - $b_h) / 2 + 'px';
        $('#big_img').css('left', $left);
        $('#big_img').css('top', $top);
        $('#big_img').css('display', 'block');
        $(document).scrollTop(0);

    });
    $("body").delegate("#big_img", "click", function (evt) {
        evt.stopPropagation();
        $('#big_img').css('display', 'none');
        $('#big_img_bg').css('width', 0 + 'px');
        $('#big_img_bg').css('height', 0 + 'px');
    });
};


