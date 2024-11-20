var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        document.title = '[]~(￣▽￣)~*拿点好东西犒劳一下自己';
        clearTimeout(titleTime);
    }
    else {
        document.title = 'w(ﾟДﾟ)w你你你什么时候回来的?!' + OriginTitile;
        titleTime = setTimeout(function () {
            document.title = OriginTitile;
        }, 2000);
    }
});