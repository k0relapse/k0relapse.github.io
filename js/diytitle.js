var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        document.title = ' ₍˄·͈༝·͈˄*₎◞ ̑̑人走了就变回猫猫吧~~';
        clearTimeout(titleTime);
    }
    else {
        document.title = 'w(ﾟДﾟ)w你你你什么时候回来的?!';
        titleTime = setTimeout(function () {
            document.title = OriginTitile;
        }, 2500);
    }
});