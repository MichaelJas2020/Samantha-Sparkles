animate = function() {
    var banner = $('.mobile-banner-over')
    //setInterval(function(){ alert("Hello"); }, 3000);
    setInterval(function() {
        banner.addClass('closed');
        console.log('working...')
        setTimeout(function(){banner.removeClass('closed')}, 200)
    }, 2000);
}
animate()