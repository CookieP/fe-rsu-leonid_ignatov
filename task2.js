function doCss() {
    var label = document.getElementsByTagName('label');
    var input = document.getElementsByTagName('input');
    var ul = document.getElementsByTagName('ul');
    var li = document.getElementsByTagName('li');

    label[0].style.cssText = 'width: 200px; border-radius: 15px; background-color: #35baf6; color: white;' +
        'border: 2px solid #1bb1f4; position: absolute; font-size: 36px; text-align: center; top: -15px; left: 50px;' +
        'z-index: 0; padding: 15px 0 5px;';
    input[0].style.cssText = 'display: none;';
    ul[0].style.cssText = 'width: 200px; background-color: #35baf6; color: white; border: 2px solid #1bb1f4;' +
        'position: absolute; font-size: 36px; text-align: center; top: -220px; padding: 0; margin: 0; left: 50px;' +
        'list-style: none; z-index: 1;';

    label[0].onmouseover = function () {
        label[0].style.boxShadow = '0 0 15px 2px #1bb1f4';
    };
    label[0].onmouseout = function () {
        label[0].style.boxShadow = 'none';
    };

    for (var i = 0; i < li.length; i++) {
        li[i].onmouseover = function () {
            this.style.backgroundColor = '#03a9f4';
        };
        li[i].onmouseout = function () {
            this.style.backgroundColor = '#35baf6';
        };
    }

    click = 0;
    input[0].onclick = function () {
        click += 1;
        if (click % 2 == 1) {
            label[0].style.top = '200px';
            ul[0].style.top = '0px';
        } else {
            label[0].style.top = '-15px';
            ul[0].style.top = '-220px';
        }
        return click;
    }
}

window.onload = function () {
    doCss();
};