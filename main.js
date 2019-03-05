// 'Add to button' events

$('div > div > button').click(function() {
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

$('div > div > button').click(function() {
    $(this).next().slideDown(500)
})

$('div > div > button').click(function() {
    $(this)
        .closest('div')
        .find('a > img')
        .clone()
        .addClass('basket_book')
        .appendTo('.basket_grid');
})

// 'Basket' event

$('.basket').click(function() {
    $('.basket_modal').css('display', 'block')
})

$('.closeBtn').click(function() {
    $('.basket_modal').css('display', 'none')
})