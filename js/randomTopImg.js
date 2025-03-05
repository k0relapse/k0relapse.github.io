function randomPic() {
    var backPicture = document.getElementById("page-header");
    if (backPicture.style.backgroundImage == "") {
        var background_urls = [
            'https://k0re.xyz/img/86.webp',
            'https://k0re.xyz/img/MisakuraRin.webp',
            'https://k0re.xyz/img/Misuzu.webp',
            'https://k0re.xyz/img/Aisa.webp',
            'https://k0re.xyz/img/Mizuna.webp',
            'https://k0re.xyz/img/Rinchan.webp',
            'https://k0re.xyz/img/Konron.webp'
        ]
        var url = background_urls[Math.floor((Math.random() * background_urls.length))];
        var urlPhoto = ('background-image:url(' + url + ')');
        backPicture.setAttribute("style", urlPhoto);
    }
}