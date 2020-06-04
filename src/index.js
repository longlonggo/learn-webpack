import './style.css';
import Icon from './icon.jpg'
import Data from './data.xml';

import printMe from './print.js';

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = [].join.call(['Hello', 'webpack'], ' ');

    element.classList.add('hello');

    // 将图像添加到我们现有的 div。
    var myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);


    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);



    console.log(Data);

    return element;
}

document.body.appendChild(component());