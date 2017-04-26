(function() {
    // document.addEventListener();
    var docuH = document.documentElement.clientHeight,
        firLoadImg = document.getElementsByClassName('firLoad');
        secLoadImg = document.getElementsByClassName('secLoad');
        allMoveBox = document.getElementsByClassName('swiper-slide');

    document.getElementsByClassName('swiper-container')[0].style.height = docuH + 'px';
    var addClass = function(ele, strClass) {
        var reg = new RegExp("(^| )" + strClass + "( |$)");
        if (reg.test(ele.className)) {
            //如果此类已经存在则什么也不做
        } else {
            ele.className = ele.className.trim() + " " + strClass;
        }
    };

    var removeClass = function(ele, strClass) {
        if (!(ele && ele.nodeType ==1)) {
            alert('第一参数ele需要是一个DOM元素对象');
            // throw new Error('第一参数ele需要时一个DOM元素对象')；
        }
        if (typeof strClass != 'string') {
            alert('第二参数必须为string类型');
            // throw new Error('第二参数必须为string类型');
        }
        var reg = new RegExp("(?:^| )" + strClass +"(?: |$)", "g");
        ele.className = ele.className.replace(reg, '').trim();
    };
    var getIndex = function(ele) {
        var nIndex = 0;
        var p = ele.previousSibling
        while (p) {
            if (p.nodeType == 1) {
                //元素节点
                nIndex++;
            }
            p = p.previousSibling;
        }
        return nIndex;
    };
    for (var i = 0; i < firLoadImg.length; i++) {
        firLoadImg[i].style.backgroundImage = firLoadImg[i].dataset.url;
        addClass(allMoveBox[0], 'slide-move');
    }
    var imgObj = new Image();
    imgObj.src = "img/page-1.jpg";
    imgObj.onload = function() {
        for (var i = 0; i < secLoadImg.length; i++) {
            secLoadImg[i].style.backgroundImage = secLoadImg[i].dataset.url;
        }
        document.getElementsByClassName('loading')[0].style.display = 'none';
        addClass(allMoveBox[0], 'slide-move');
    }

    var mySwiper = new Swiper('.swiper-container', {
        paginationClickable: true,
        mode: 'vertical',
        onSlideChangeEnd: function() {
            //当滑块滑到下一块时
            var thisDiv = mySwiper.activeSlide(),
                thisIndex = getIndex(thisDiv);
            for (var i = 0; i < allMoveBox.length; i++) {
                removeClass(allMoveBox[i], 'slide-move');
            };
            addClass(thisDiv, 'slide-move');

        }
    });
})()
