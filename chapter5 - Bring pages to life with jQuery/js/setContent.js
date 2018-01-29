/*
html()
获取匹配集合中第一个元素的 HTML 内容
*/
console.log('class 为 footer 的 div 的 HTML 内容为：');
console.log($('.footer').html());

/*
html(content)
为匹配的元素设置 HTML 代码块内容

content(String|Function)：如果是函数，参数为元素索引和存在的内容，函数返回值作为新的内容
*/
$('.footer').html(function(index, curContent){
    return curContent + '<p>New content added by html() function</p>'
});

/*
text()
获取匹配元素集合的每个元素的内容，包含其后代节点
*/
console.log('id 为 target-pane 的 div 用 text() 方法得到的内容：');
console.log($('#target-pane').text());