$('button').click(function() {
    $(this)
        .closest('div')
        .find('a > img')
        .clone()
        .addClass('zoom')
        .appendTo('body');

    setTimeout(function() {
        $('.zoom').remove();
    }, 1500);
})