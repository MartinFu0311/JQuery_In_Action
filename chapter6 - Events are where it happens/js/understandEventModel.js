/*
DOM Level 用来表示实现 W3C DOM 规范的级别要求
DOM Level 0 Event Model，在这个模型背后，事件处理器通过把函数赋值给元素的属性来声明实现
*/
function formatDate(date) {
    return (date.getHours() < 10 ? '0' : '') + date.getHours() +
            ':' + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes() +
            ':' + (date.getSeconds() < 10 ? '0' : '') + date.getSeconds() +
            '.' + (date.getMilliseconds() < 10 ? '00' : (date.getMilliseconds() < 100 ? '0' : '')) +
            date.getMilliseconds();
}


/*
id 为 example 的图片在 HTML 代码中直接在标签属性 onclick 中声明了一个 click 事件，这个属性值会被使用创建一个
匿名函数体，类似下面的代码，直接在标签属性中声明事件不是推荐的做法
*/
document.getElementById('example').onmouseover = function(event) {
    console.log(this);
    console.log('At ' + formatDate(new Date()) + ' Crackle!');

    //当触发事件处理器时，在所有兼容标准的浏览器里，一个名为 Event 的对象会作为第一参数传递给处理器，只有 IE9 以上，
    //Firefox，Chrome， Safari 和 Opera 支持， IE8 之前的浏览器可以通过自己的方式把 Event 对象传给全局的 event 属性
    event = event || window.event;

    //获取目标元素的引用，也就是触发事件的元素，必须通过兼容标准浏览器的 target 属性获取，但是旧的 IE 使用
    //的是 srcElement
    var target = event.target || event.srcElement;
};

 

/*
事件冒泡
目标元素有机会处理事件之后，浏览器的事件处理机制会检查元素的父元素是否包含此事件类型的处理器，如果有也会调用，再
依次检查爷爷元素，直到 DOM 树的顶部
*/
var elements = document.getElementsByTagName('*');  //得到页面上的所有元素

for(var i = 0; i < elements.length; i++){
    if(elements[i].id != 'example'){
        (function(current){
            current.onclick = function(event){
                event = event || window.event;
                var target = event.target || event.srcElement;

                console.log('At ' + formatDate(new Date()) +
                            ' For ' + current.tagName + '#' + current.id +
                            ' target is ' + target.tagName + '#' + target.id);
            }
        })(elements[i]);
    }
}


/*
要阻止事件的传播，在现代浏览器中可以调用 Event 实例的 stopPropagation() 方法
在旧的 IE 浏览器中可以设置 Event 实例的 cancelBubble 属性为 true 实现，现在很多新的浏览器也提供了该属性，尽管
这不是 W3C 标准（我觉得这个实践中还是不用的好，知道作用就好）
有些事件是默认动作，比如 form 的 submit，要取消这些语义动作，在新的浏览器调用 Event 实例的 preventDefault() 方法。旧的
IE 中没有此方法，设置 returnValue 属性的值为 false；另一种方法是处理器代码返回 false
<form name="myForm" onsubmit="return false;" ... >
*/

/*
被页面的 onsubmit 属性引用，但没有成功阻止默认的 submit 动作
*/
function doSubmit(){
    return false;
}


/*
阻止了默认的 submit 动作
*/
function prevent(){
    event = event || window.event;
    event.preventDefault();
}


/*
DOM Level 2 event model
DOM Level 0 event model 的缺点是每个元素每次只能注册一种特定类型的事件处理器，主要是因为属性用来存储
事件处理器函数的引用
DOM Level 2 event model 就是为了解决上面的问题而建立的。这里的事件处理器通过标准的元素方法而不是元素属性赋值
来实现，每个 DOM 元素都实现了一个 addEventListener() 方法。
addEventListener(eventType, listener, useCapture)
eventType: 要处理的事件类型，DOM 0 中使用的事件，比如 click
listener：表示元素事件处理器的函数
useCapture：布尔值
*/
var multipleButton = document.getElementById('multipleButton');

/*
这个 multipleButton 按钮在下面代码增加事件处理器之前，上面的代码中增加了 click 事件是处理函数，从结果可以看出，
这个处理函数有被保留，而且是作为第一个触发
event.stopPropagation() 随便写在哪个处理函数中效果都一样，不会事件冒泡到父元素
*/
multipleButton.addEventListener('click', function(event){
    console.log('At ' + formatDate(new Date()) + ' BOOM once!');
    //event.stopPropagation();
});

multipleButton.addEventListener('click', function(event){
    console.log('At ' + formatDate(new Date()) + ' BOOM twice!');
    //event.stopPropagation();
});

multipleButton.addEventListener('click', function(event){
    console.log('At ' + formatDate(new Date()) + ' BOOM thrice!');
    event.stopPropagation();
});

 

/*
DOM Level 2 event model 中的事件传播
事件首先从 DOM 树根结点向目标元素传播，然后从目标元素向 DOM 根节点冒泡传播。前面的阶段成为捕获阶段，后者
是冒泡阶段

addEventListener(eventType, listener, useCapture) 方法中的 useCapture 是用来标记函数作为何种处理器使用的，false 为
冒泡阶段处理器，true 为捕获阶段处理器，默认为 false
*/

/*function eventLog(curElement, event){
    event = event || window.event;
    console.log('At ' + formatDate(new Date()) +
    ' Capture for ' + curElement.tagName + '#' + curElement.id ) +
    ' target is ' + event.target.tagName + '#' +  event.target.id;
}*/

var firstLevel = document.getElementById('firstLevel');
var secondLevel = document.getElementById('secondLevel');
var testButton = document.getElementById('testButton');

firstLevel.onclick = function(){};
secondLevel.onclick = function(){};
testButton.onclick = function(){};

//捕获阶段运行
firstLevel.addEventListener('click', function(event){
    console.log('At ' + formatDate(new Date()) +
    ' Capture for ' + this.tagName + '#' + this.id ) +
    ' target is ' + event.target.tagName + '#' +  event.target.id;
}, true);

firstLevel.addEventListener('click', function(event){
    console.log('At ' + formatDate(new Date()) +
    ' Bubble for ' + this.tagName + '#' + this.id ) +
    ' target is ' + event.target.tagName + '#' +  event.target.id;
}, false);

secondLevel.addEventListener('click', function(event){
    console.log('At ' + formatDate(new Date()) +
    ' Capture for ' + this.tagName + '#' + this.id ) +
    ' target is ' + event.target.tagName + '#' +  event.target.id;
}, true);

secondLevel.addEventListener('click', function(event){
    console.log('At ' + formatDate(new Date()) +
    ' Bubble for ' + this.tagName + '#' + this.id ) +
    ' target is ' + event.target.tagName + '#' +  event.target.id;
}, false);

testButton.addEventListener('click', function(event){
    console.log('At ' + formatDate(new Date()) +
    ' Capture for ' + this.tagName + '#' + this.id ) +
    ' target is ' + event.target.tagName + '#' +  event.target.id;
}, true);

testButton.addEventListener('click', function(event){
    console.log('At ' + formatDate(new Date()) +
    ' Bubble for ' + this.tagName + '#' + this.id ) +
    ' target is ' + event.target.tagName + '#' +  event.target.id;
}, false);
