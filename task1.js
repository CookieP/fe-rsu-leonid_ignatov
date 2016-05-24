function doCss() {
    var body = document.getElementsByTagName('body');
    var container = document.getElementsByClassName('container');
    var content = document.getElementsByClassName('content');
    var h1 = document.getElementsByTagName('h1');
    var p = document.getElementsByTagName('p');
    var h1after = document.getElementById('h1after');

    body[0].style.cssText ='font-family: Arial, sans-serif;';
    container[0].style.cssText = 'width: 50%; height: auto; background-color: lightblue; ' +
        'border: 2px solid cadetblue; border-radius: 10px;';
    content[0].style.cssText = 'background-color: transparent; border: 2px solid mediumaquamarine;' +
        'width: 95%; margin: 20px auto;';
    h1[0].style.cssText = 'background-color: gold; margin: 0; padding: 0 20px; font-weight: normal;';
    p[0].style.cssText = 'background-color: beige; padding: 20px; margin: 0;';
    h1after.style.cssText = 'content: ""; display: block; position: absolute; border-left: 20px solid transparent;' +
        'border-right: 20px solid transparent; border-top: 20px solid gold; left: 50px;';
}

window.onload = function () {
    doCss();
};