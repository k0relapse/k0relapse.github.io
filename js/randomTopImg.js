function randomPic() {
    var backPicture = document.getElementById("page-header");
    if (backPicture.style.backgroundImage == "") {
        var background_urls = [
            'https://k0re.xyz/img/86.webp',
            'https://k0re.xyz/img/MisakuraRin.webp',
            'https://k0re.xyz/img/Misuzu.webp',
            'https://k0re.xyz/img/Aisa.webp'
        ]
        var url = background_urls[Math.floor((Math.random() * background_urls.length))];
        var urlPhoto = ('background-image:url(' + url + ')');
        console.log("BackGround URL:" + url);
        backPicture.setAttribute("style", urlPhoto);
    }
}