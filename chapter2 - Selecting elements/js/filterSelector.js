/*
过滤器是与其他类型的选择器结合进一步筛选匹配元素结果集的选择器。
通常以冒号（:）开头，其中一些选择器接受括号内的传递参数。
*/


/*
位置过滤器
*/

var $aFisrt = $('a:first');
console.log('页面第一个a元素选择器 "a:first" 结果:')
console.log($aFisrt);

var $aLast = $('a:last');
console.log('页面最后一个a元素选择器 "a:last" 结果:')
console.log($aLast);

//索引从 0 开始，返回偶数索引元素
var $aEven = $('a:even');
$aEven.addClass('red-border');
console.log('a偶数元素选择器 "a:even" 结果:')
console.log($aEven);

//索引从 0 开始，返回奇数索引元素
var $aEven = $('a:odd');
console.log('a奇数选择器 "a:odd" 结果:')
console.log($aEven);

var $aEqule = $('a:eq(2)');
console.log('a选择器 "a:eq(2)" 结果:')
console.log($aEqule);

var $aGreaterThan = $('a:gt(2)');
console.log('a选择器 "a:gt(2)" 结果:')
console.log($aGreaterThan);

var $aLessThan = $('a:lt(2)');
console.log('a选择器 "a:lt(2)" 结果:')
console.log($aLessThan);


/*
子过滤器
*/
var $firstChild = $('div:first-child');  //查找的是 div 类型标签，是它的父元素的第一个子元素
console.log('匹配上下文第一个子元素选择器 "div:first-child" 结果:')
console.log($firstChild);

var $lastChild = $('div:last-child');  //查找的是 div 类型标签，是它的父元素的最后一个子元素
console.log('匹配上下文最后一个子元素选择器 "div:last-child" 结果:')
console.log($lastChild);

var $typeFirstChild = $('div:first-of-type');  //查找的是 div 类型标签，是它的父元素的第一个符合指定类型的子元素
console.log('匹配上下文第一个符合指定类型的子元素选择器 "div:first-of-type" 结果:')
console.log($typeFirstChild);

var $typeLastChild = $('div:last-of-type');  //查找的是 div 类型标签，是它的父元素的最后一个符合指定类型的子元素
console.log('匹配上下文最后一个符合指定类型的子元素选择器 "div:last-of-type" 结果:')
console.log($typeLastChild);

/*
nth-child 索引从 1 开始而不是从 0 开始
*/
/*
查找的是 div 类型标签，是它的父元素的第二个子元素
*/
var $threeChild = $('div:nth-child(2)');
console.log('匹配上下文第二个子元素选择器 "div:nth-child(2)" 结果:')
console.log($threeChild);

/*
查找的是 div 类型标签，是它的父元素的第偶数个子元素，索引仍是从 1 开始
*/
var $evenChild = $('div:nth-child(even)');
console.log('匹配上下文偶数个子元素选择器 "div:nth-child(even)" 结果:')
console.log($evenChild);

var $evenChild = $('div:nth-child(2n + 1)');
console.log('匹配上下文偶数个子元素选择器 "div:nth-child(2n + 1)" 结果:')
console.log($evenChild);