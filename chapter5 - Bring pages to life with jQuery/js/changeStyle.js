/*
样式名的值是以空格分割多个值de字符串形式出现，而不是以 COM 属性数组的形式，这给处理带来了复杂性。
HTML5 引入了一个好的解决办法，通过称为 classList （样式列表）的 API 实现。
*/
 

/*
原生 js 使用 classList 增加样式（兼容新的浏览器，IE 10以上，包括 IE 10。
*/
var elements = document.getElementsByClassName('box-small');

for(var i = 0; i < elements.length; i++){
    elements[i].classList.add('target');
}

/*
addClass(names)
为集合中的元素添加指定的样式名，兼容从 IE6 开始的浏览器

name(String|Function)：空格分割的多个样式名字符串；如果是函数，调用函数的上下文是当前元素（this），
参数是元素索引和元素当前样式值（所有用到的样式名，用空格分割）
*/
$('img').addClass(function(index, styleValue){
    console.log(this);
    console.log(styleValue);  //元素当前样式值（所有用到的样式名，用空格分割）
    return 'target';   //返回值作为样式名
});

$('.box-small').addClass(function(index, styleValue){
    console.log(this);
    console.log(styleValue);
    return 'target';
});

/*
removeClass(names)
从 jQuery 集合中删除每个元素指定的样式；如果是函数，调用函数的上下文是当前元素（this），参数是元素索引和要删除的
样式名（可以是以空格分割的样式名），返回值是要删除的样式名

names(String|Function)
*/
$('#target-pane > div').removeClass('target');

console.log('删除 .box-small 中的样式：')
$('.box-small').removeClass(function(index, styleName){
    console.log($(this));
    console.log(styleName);
    return 'box-small target';
});

/*
toggleClass([names][, switch])
为没有样式的元素指定添加指定的样式名，或者删除已经存在的样式

names(String|Function)
switch(Boolean)
如果设置 switch 参数，当 switch 为 true 时，那么样式通常会添加样式到没有此样式的元素上，如果为false，从元素中删除该样式
如果无参调用，集合中所有样式都会删除或恢复
如果只设置 switch 参数，集合中每个元素的样式名将根据 switch 的值保留会删除
如果提供了函数，则返回值为样式名，参数接受两个值：元素索引和元素样式的值
*/
var switchValue = true;

$('#target-pane').addClass('target');
console.log('id 为 target-pane 的 div 是否包含 target 样式：' + $('#target-pane').hasClass('target'));

$('#button-toggle').click(function(){   

    $('img').toggleClass('target');
    switchValue = !switchValue;
    console.log(switchValue);
   $('#target-pane').toggleClass('target', switchValue);

    /*
    hasClass(name)
    确定集合中的元素是否包含指定的样式
    */
    console.log('id 为 target-pane 的 div 是否包含 target 样式：' + $('#target-pane').hasClass('target'));
});

/*
直接在元素上添加样式代码（DOM 元素的 style 属性），可以覆盖预定的样式（设置了 !important 的除外）
*/

/*
css(name, value)：CSS 属性的名称。接受两种 CSS 和 DOM 的属性（如 background-color 与 backgroundColor），一般使用第一种
css(properties)
为每个元素的 CSS 样式设置指定的 value

name(String)
value(String|Number|Function)：如果是数字，转换为字符串在末尾加上“px”；如果是函数，接受两个参数：元素索引和当前值，返回值
为 CSS的新值
*/

/*
给按钮增加 20px 宽度（如果设置长度和宽度没有指定单位，那么默认就是 px）
*/
$('#button-toggle').css('width', '+=20');

$('p').css({
    margin: '1em',
    color: '#1933FF',
    opacity: 0.8
});

$('button').css({
    margin: '1em',
    color: '#1933FF',
    opacity: function(index, currentValue){
        return 1 - ((index % 10 + 3) / 10);
    }

});

/*
css(name)
根据指定的 name 查询集合中首个元素的 CSS 属性的计算值

name(String|Array)
返回值为字符串或属性-值对
*/
var styles = $('#source-pane').css(['border', 'background-color']);
for(var property in styles){
    console.log(property　+　': ' + styles[property]);
}


/*
对于经常访问的一些小的 css 集合，jQuery 提供了便捷的方法来访问它们并返回值为常见的数据类型
*/

/*
width(value)
height(value)
设置集合中每个匹配元素的宽度和高度

value(Number|String|Function)：
 */

 /*
width()
height()
查询 jQuery 对象的第一个元素的宽度和高度,单位为像素
 */
var tmpWidth = $('#source-pane').width();
console.log('#source-pane 的宽度为：' + tmpWidth);


/*
offset()
返回集合中第一个元素相对于文档的坐标，该对象（非 jQuery 对象）包含 left 和 top 属性，以像素为单位 
*/
console.log($('#button-toggle').offset());

/*
offset(coordinates)
设置集合中所有元素相对于文档的当前坐标，以像素为单位 

coordinates(Object|Function)：包含 left 和 top 的对象
*/
setTimeout(function(){
    $('#button-toggle').offset({
        left: 0,
        top: 0
    })
}, 1000);

/*
position()
返回匹配集合元素中第一个元素的相对于父元素的位置（像素）
 */
console.log($('#button-toggle').position());

 /*
 注：offset() 和 position 只能用在可见元素上
 */

/*
scrollLeft()
scrollLeft(value)
scrollTop()
scrollTop(value)
*/
$('#button-restore').click(function(){
    console.log('document 滚动条的水平位置为：' + $(document).scrollLeft());
    console.log('document 滚动条的垂直位置为：' + $(document).scrollTop());

    //重回文档顶部
    setTimeout(function(){
        $(document).scrollTop(0);
    }, 1000);
});

