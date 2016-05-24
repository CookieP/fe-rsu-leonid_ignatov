$(document).ready(function () {
    var label = $('label');
    var input = $('input');
    var ul = $('ul');
    var li = $('li');

    label.css({
        'width': '200px',
        'border-radius': '15px',
        'background-color': '#35baf6',
        'color': 'white',
        'border': '2px solid #1bb1f4',
        'position': 'absolute',
        'font-size': '36px',
        'text-align': 'center',
        'top': '-15px',
        'left': '50px',
        'z-index': '0',
        'padding': '15px 0 5px'
    });
    input.css({'display': 'none'});
    ul.css({
        'width': '200px',
        'background-color': '#35baf6',
        'color': 'white',
        'border': '2px solid #1bb1f4',
        'position': 'absolute',
        'font-size': '36px',
        'text-align': 'center',
        'top': '-220px',
        'padding': '0',
        'margin': '0',
        'left': '50px',
        'list-style': 'none',
        'z-index': '1'
    });
    label.hover(function () {
        label.css({'boxShadow': '0 0 15px 2px #1bb1f4'});
    }, function () {
        label.css({'boxShadow': ''});
    });
    li.hover(function () {
        $(this).css({'backgroundColor': '#03a9f4'});
    }, function () {
        $(this).css({'backgroundColor': '#35baf6'});
    });
    click = 0;
    input.on('click', function () {
        click += 1;
        if (click % 2 == 1) {
            label.css({'top': '200px'});
            ul.css({'top': '0px'});
        } else {
            label.css({'top': '-15px'});
            ul.css({'top': '-220px'});
        }
        return click;
    });
});