$(window).scroll(function () {
    var y = $(this).scrollTop(),
        speed = 0.3,
        spin = (y * speed),
        $spinner = $('.gear');
    $spinner.css({
        '-webkit-transform': 'rotate(' + spin + 'deg)',
        '-moz-transform': 'rotate(' + spin + 'deg)',
        '-o-transform': 'rotate(' + spin + 'deg)',
        'transform': 'rotate(' + spin + 'deg)'
    });
});