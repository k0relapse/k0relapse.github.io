function randomPic() {
    var backPicture = document.getElementById("page-header");
    if (backPicture.style.backgroundImage == "") {
        var background_urls = [
            'http://localhost:4000/img/86.webp',
            'http://localhost:4000/img/MisakuraRin.webp',
            'http://localhost:4000/img/Misuzu.webp',
            'http://localhost:4000/img/Aisa.webp'
        ]
        var url = background_urls[Math.floor((Math.random() * background_urls.length))];
        var urlPhoto = ('background-image:url(' + url + ')');
        console.log("BackGround URL:" + url);
        backPicture.setAttribute("style", urlPhoto);
    }
}