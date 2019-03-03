$('button').click(function() {
    $(this)
        .slideUp(500)
        .closest('div')
        .css('background-color', 'rgba(0, 255, 0, 0.3)')
        .find('a > img')
        .clone()
        .addClass('zoom')
        .appendTo('body');

    setTimeout(function() {
        $('.zoom').remove();
    }, 1500);
})

$('button').click(function() {
    $(this).next().slideDown(500)
})