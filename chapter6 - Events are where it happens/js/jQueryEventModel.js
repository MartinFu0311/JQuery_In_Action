/*
jQuery Event Model
1. 为创建事件处理器提供统一方法
2. 允许每个元素、每个事件类型注册多个方法
3. 适用标准事件名称，如 click 或 mouseover
4. 传递 Event 实例作为第一个参数
5. 规范事件实例中最常用的属性
6. 为事件取消和阻止操作提供统一的方法

除了不支持捕获阶段，jQuery 事件模型几乎完美支持 DOM Level 2 Event Model
*/

function formatDate(date) {
    return (date.getHours() < 10 ? '0' : '') + date.getHours() +
            ':' + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes() +
            ':' + (date.getSeconds() < 10 ? '0' : '') + date.getSeconds() +
            '.' + (date.getMilliseconds() < 10 ? '00' : (date.getMilliseconds() < 100 ? '0' : '')) +
            date.getMilliseconds();
 }

 /*
on(eventType[, selector][, data], handler)
on(eventHash[, selector][, data])
为选择的元素的一个或多个事件添加一个或多个事件处理器

eventType(String)：事件类型的名称，多个事件类型可以用空格分隔
selector(String)：过滤器用来过滤选中元素的子元素，这些子元素触发事件
data(Any)：传递给 Event 实例的数据，赋值给 data 属性
handler(Function)：事件处理器的函数，冒泡阶段的当前元素作为函数上下文，false 值表示函数 return false

eventHash(Object)：单个调用中为多个事件类型建立处理器的对象。属性名区分事件类型，属性值提供事件处理器

返回 jQuery 集合
 */
 $('#example')
         .on('click', function (event) {
            console.log('At ' + formatDate(new Date()) + ' BOOM once!');
         })
         .on('click', function (event) {
            console.log('At ' + formatDate(new Date()) + ' BOOM twice!');
         })
         .on('click', function (event) {
            console.log('At ' + formatDate(new Date()) + ' BOOM thrice!');
         })
         .on('mouseenter mouseleave', function(event){
             console.log(event.type)
         });

$('#btn1').on('click', function(){
    console.log('The button is clicked!');
}).on('mouseenter mouseleave', myFunctionHandler);

/*
使用 eventHash 参数类型的代码
*/
$('#btn2').on({
    click: function(){
        console.log('Oh no, you clicked me!');
    },
    mouseenter: myFunctionHandler,
    mouseleave: myFunctionHandler
});

function myFunctionHandler(event){
    event.stopPropagation();
    console.log(event.type + ' ' + event.target.id);
}

/*
注意这里的第二个参数，设置了 data 参数后，可以通过 event 参数的 data 属性访问
*/
$('#btn1').on('click', {
    name: 'Martin_Fu'
}, function(event){
    console.log(event.data.name + ' clicked the button!');
});

/*
事件委托（event delegation）
这是一种向元素的父元素添加事件处理器的重要技术，可以为不存在的元素添加事件处理器
*/
$('<li>item1</li>').add($('<li>item2</li>')).appendTo('#myList');
/*
原生 JS 写法
*/
document.getElementById('myList').addEventListener('click', function(event){
    if(event.target.nodeName === 'LI'){
        console.log('List item: ' + 
            (Array.prototype.indexOf.call(document.getElementById('myList').children, event.target) + 1));
    }
});

/*
这里注意第二个参数，它会对子元素进行筛选
事件委托的优势不只局限于为不存在的元素执行事件处理器，更可以节省内存和时间。比如 myList 下有很多 <li> ，那么需要循环
添加事件处理器，如果 <li> 元素很多，那么会耗费不少时间，由于 JS 是单线程的，会导致不好的用户体验。
但也不能因为这个原因给一个元素（比如 document ）添加过多处理器，同样影响性能，建议尽可能为离目标元素近的元素添加处理器
*/
$('#myList').on('click', 'li', function(event){
    console.log('List item(jQuery): ' + ($(this).index() + 1));
});


/*
one(eventType[, selector][, data], handler)
one(eventHash[, selector][, data])
为选择的元素的一个或多个事件添加一个或多个事件处理器，一旦执行，事件处理器会自动删除

返回 jQuery 集合
 */



/*
off(eventType[, selector][, data], handler)
off(eventHash[, selector][, data])
删除参数指定的 jQuery 对象中所有元素的事件处理器，如果没有提供参数，那么删除所有的元素处理器

返回 jQuery 集合
 */
/*
这里注意一点，如果多次点击 btn-attach 按钮，btn 按钮会添加两个 click 事件，但是只要点击一次
btn-remove 按钮，这两个事件都会移除
*/
var $btn = $('#btn');
var counter = 1;

function logHandler(event){
    console.log('Click ' + counter);
    counter++;
}

$('#btn-attach').on('click', function(event){
    $btn.on('click', logHandler).text('Log');
});

$('#btn-remove').on('click', function(event){
    $btn.off('click', logHandler).text('Does nothing');
});


