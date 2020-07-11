(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var ratio = $(window).width() / $(window).height();
            if (ratio > 1.9) {
                // 宽屏
                var clientHeight = docEl.clientHeight;
                if (!clientHeight) return;
                docEl.style.fontSize = 16 * (clientHeight / 909) + 'px';//设计稿H为909，baseFontSize为16
                console.log(docEl.style.fontSize,'宽屏');
            } else {
                // 窄屏
                var clientWidth = docEl.clientWidth;
                if (!clientWidth) return;
                docEl.style.fontSize = 16 * (clientWidth / 1680) + 'px';//设计稿W为1680
                console.log(docEl.style.fontSize,'窄屏');
            }
            // if (ratio > 1.9) {
            // // 宽屏
            //   var clientWidth = docEl.clientWidth;
            //   if (!clientWidth) return;
            //   docEl.style.fontSize = 16 * (clientWidth / 1680) + 'px';//设计稿W为1680，baseFontSize为16
            //   console.log(docEl.style.fontSize,'宽屏');
            // } else {
            // // 窄屏
            //   var clientHeight = docEl.clientHeight;
            //   if (!clientHeight) return;
            //   docEl.style.fontSize = 16 * (clientHeight / 909) + 'px';//设计稿H为909
            //   console.log(docEl.style.fontSize,'窄屏');
            // }
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);