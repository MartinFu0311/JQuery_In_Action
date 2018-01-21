//IE6-7 不支持 console.log() 方法

//通用选择器
var $allElements = $('*');

console.log('通用选择器 "*" 结果：');
console.log($allElements);

//ID 选择器，原生 Javascript 函数 getElementById()
var $idElement = $('#some-div');
console.log('ID 选择器 "#some-div" 结果：');
console.log($idElement);
//$('\\.description')   圆点符号"." 在 CSS 中有特殊的用法，所以这里需要使用转义

//Class 选择器，原生 Javascript 函数 getElementsByClassName()
var $classElements = $('.my-list');
console.log('Class 选择器 ".my-list" 结果：');
console.log($classElements);

//元素选择器，原生 Javascript 函数 getElementsByTagName()
var $divs = $('div');
console.log('元素选择器 "div" 结果：');
console.log($divs);

//选择 div 和 span 的所有元素
var $divAndSpan = $('div, span');
console.log('元素选择器 "div, span" 结果：');
console.log($divAndSpan);

//选择 div 下的 span 子元素
var $divSpan = $('div span');
console.log('元素选择器 "div span" 结果：');
console.log($divSpan);