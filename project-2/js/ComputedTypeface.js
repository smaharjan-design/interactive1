
$('#submit').on('click', function() {
    if ($('#container').css('opacity') == 0) {
        $('#container').css('opacity', 1);
    }
    else {
        $('#container').css('opacity', 0);
    }
});
