$('<div>Hello</div>');

/*
创建等价的空 div 元素
*/
$('<div>');
$('<div />');
$('<div></div>');

/*
创建带属性的 图片元素
*/
$('<img>', 
{
    src: '../images/little.bear.png',
    alt: 'Little Bear',
    title: 'I woof in your general direction',
    click: function(){
        alert($(this).attr('title'));
    }
}).appendTo('body');