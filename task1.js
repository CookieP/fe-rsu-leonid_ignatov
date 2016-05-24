$(document).ready(function(){
    var body = $("body");
    var container = $('.container');
    var content = $('.content');
    var h1 = $('h1');
    var p = $('p');
    var h1after = $('#h1after');

    body.css({'font-family': 'Arial, sans-serif'});
    container.css ({
        'width': '50%',
        'height': 'auto',
        'background-color': 'lightblue',
        'border': '2px solid cadetblue',
        'border-radius': '10px'
    });
    content.css({
        'background-color': 'transparent',
        'border': '2px solid mediumaquamarine',
        'width': '95%',
        'margin': '20px auto'
    });
    h1.css({
        'background-color': 'gold',
        'margin': '0',
        'padding': '0 20px',
        'font-weight': 'normal'
    });
    p.css({
        'background-color': 'beige',
        'padding': '20px',
        'margin': '0'
    });
    h1after.css({
        'content': '',
        'display': 'block',
        'position': 'absolute',
        'border-left': '20px solid transparent',
        'border-right': '20px solid transparent',
        'border-top': '20px solid gold',
        'left': '50px'
    });
});