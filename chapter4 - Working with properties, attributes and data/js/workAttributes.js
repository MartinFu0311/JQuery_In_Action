/*
每个元素都有一或多个特性，，这些特性的用途是给出相应元素或其内容的附加信息。（出自 JavaScript 高级程序设计）
*/
/*
特性是固有的 JavaScript 对象
属性指的是在标记中指定的 DOM 元素值
属性值的类型始终是字符串
*/
/*
如果属性存在相应的 DOM 的内置特性值，那么对象特性被同步
如果属性作为一个内建属性存在并且是一个布尔值，那么该值不会被同步
*/
var checkbox = document.getElementById('checkbox-1');

//属性在没有初始值的情况下为 null
console.log('The value of attribute of title: ' + checkbox.getAttribute('title'));
//特性在没有初始值的情况下为空
console.log('The value of property of title: ' + checkbox.title);

console.log(checkbox.getAttribute('title') === checkbox.title);

checkbox.title = 'New title!';
console.log(checkbox.getAttribute('title') === checkbox.title);

checkbox.setAttribute('title', 'Another title!');
console.log(checkbox.getAttribute('title') === checkbox.title);

/*
属性如果没有显式设置就是 null，而属性则根据类型有默认值
*/
console.log('The value of attribute of checked: ' + checkbox.getAttribute('checked'));
console.log('The value of property of checked: ' + checkbox.checked);
console.log(checkbox.getAttribute('checked') === checkbox.checked);


/*
对属性支持的检测
*/
if('required' in document.createElement('input')){
    console.log('The property of required is supported!')
}else{
    console.log('The property of required is not supported!')
}


/*
attr(name) 
获取第一个匹配元素的属性值，属性名称大小写不敏感（JavaScript 本身是区分大小写的）
如果没有匹配元素或没有值，返回 undefined
*/
var attrValue = $('#li1').attr('data-level');
console.log('id 为 li1 的 li 元素的 data-level 属性值为 ' + attrValue);

/*
如果属性不存在，返回的是 undefined
*/
var liName = $('#li1').attr('name');
console.log('id 为 li1 的 li 元素的 name 属性值为 ' + liName);

/*
attr(name, value)
value(String|Number|Boolean|Function)：除非设置的是函数，否则都会转换为字符串；函数的话，每个元素都会调用函数，传递的参数为
元素的索引和当前命名属性的值
返回 jQuery 集合
*/
var $titles = $('[title]').attr('title', function(index, previousValue){
    return previousValue + ' I am element ' + index + 
        ' and my name is ' + (this.id || 'unset');
});
console.log($titles);

/*
attr(attributes)
一次指定多个属性值
*/
var $inputs = $('input:not(:submit)').attr({
    value: '',
    title: 'Please enter a value'
});
console.log('设置属性后的 input：');
console.log($inputs);

/*
removeAttr(name)
删除属性
name(String)：要删除的属性名称或者名称的集合，用空格分割
删除属性并不会删除 DOM 元素对应的特性
方法内部使用了 JS 的 removeAttribute()
返回的还是 jQuery 集合
*/
var $imgAfterDelAttr = $('img').removeAttr('title alt');
console.log('删除 title 和 alt 属性后的 img 集合： ');
console.log($imgAfterDelAttr);


/*
可以使用 attr() 方法处理特性，也可以使用 prop() 方法
*/

/*
prop(name)   
获取匹配集合中第一个元素给定的特性值
name(String)
如果没有匹配元素或没有值，返回 undefined
*/
console.log('id 为 checkbox-3 的 checkbox 的 checked 特性值：' + $('#checkbox-3').prop('checked'));

/*
prop(name, value)
为集合的所有元素设置给定命名的特性和值
name(String)
value(Any|Function)，如果是函数，传递的参数是集合中元素的索引及命名的属性的当前值
*/
$('input:checkbox').prop('checked', function(index, attrValue){
    if(index % 2 == 0){
        console.log(attrValue);
        //attrValue = true;  //这样设置了没有起作用
        $(this).prop('checked', true);
    }
});

/*
prop(properties)
properties(Object)
*/
$(':submit').prop({
    disabled: true,
    class: 'red-border'
});

/*
removeProp(name)
删除集合中每个元素的特性
name(String)：不支持以空格分割的名称列表
这个方法不应该用来删除原生特性，比如 required 和 checked，删除后无法再次添加
*/
$('#checkbox-4').removeProp('checked').prop('checked', true); //啥情况？？？


/*
data(name, value)
为集合中的所有元素添加传递的数据
name(String)
value(Any)：除了 undefined
可以保存数据的类型
*/
$('#li4').data('last-value', 10);
console.log(typeof $('#li4').attr('lastValue'));  //undefined???说好的 String 呢？  last-value 转换为 lastValue 是 jQuery3 修改的
console.log(typeof $('#li4').data('last-value'));

/*
对自定义属性 data-technologies 的两种读法
*/
console.log($('#li4').attr('data-technologies'));
console.log($('#li4').data('technologies'));

/*
data(Object)
略
*/

/*
jQuery.data() 等价的低级方法 $.data()
*/
$.data(document.getElementById('li3'), 'price', 55);
$('#li2').data('price', 55);

/*
data([name])
使用指定的名字查询存储的数据或 HTML5 data-* 属性，如果没有指定名字，返回所有存储的数据
name(String)
如果没有匹配元素或没有值，返回 undefined
*/
console.log($('#li2').data('price'));
console.log($('#li4').data()); //只取了 data-* 开头的数据和用 data(name, value) 设定的数据


/*
jQuery 有一个存储区，是存储 jQuery 内部使用的存储数据的区域
data() 方法会先查找内存中的数据，找不到才会用指定的名字去查找 HTML 元素的 data-* 属性，如果找到了那么就会把
值存放到内存中，所以之后用 attr() 对该属性做修改再用 data() 取还是内存中的数据
*/
console.log($('#level').data('custom'));
console.log($('#level').attr('data-custom'));
$('#level').data('custom', 'new value');
console.log($('#level').data('custom'));
console.log($('#level').attr('data-custom'));  //这里读到的还是老的“foo”，上面的语句修改的是内存中的吗？？？

/*
removeData([name])   ==  $.removeData(element[, name])
name(String|Array) 要删除的数据的数据名，包括名字或以空格分割的名字，也可以是数组；如果没有参数，删除所有数据
*/
$('#li3').removeData('custom', 'technologies');
$('#li3').removeData('custom technologies');

/*
jQuery.hasData(element)
 */
console.log('id 为 li4 的元素是否包含自定义数据：' + $.hasData(document.getElementById('li4')));