/*
被勾选的复选框
*/
var checkedCheckBox1 = $('input[type="checkbox"][checked]'); //通过属性进行匹配的方式只能检查控件的初始化状态值
var checkedCheckBox2 = $('input[type="checkbox"]:checked');  //伪样式类 :checked 可以匹配被勾选的元素
var checkedCheckBox3 = $('input:checkbox:checked');  // :checkbox 可以标识所有的复选框元素
console.log('选中的复选框："input:checkbox:checked"');
console.log(checkedCheckBox3);

/*
:disabled,  :enabled, :file, :focus, :image, :input, :password, :radio, :reset, :submit, :text
:selected：选取被选择的 <option> 元素（下拉列表）。
*/

var selectedElement = $('input:selected');
console.log('处于选中状态的列表元素："input:selected"');
console.log(selectedElement);


/*
内容过滤器
根据内容并不是说只根据文本内容，也可能是子元素
*/
var $hasDiv = $('div:has(img[src*="1.jpg"])');
console.log('包含 src 中含有 1.jpg 的img 元素的 div 元素："input:selected"');
console.log($hasDiv);

var $emptyElement = $('input:empty');
console.log('没有子元素的元素（包括文本）："input:empty"');
console.log($emptyElement);

var $parentElement = $(':parent');
console.log('包含至少有一个子节点的元素（子节点是文本或者元素）：":parent"');
console.log($parentElement);

var $containsElement = $('p:contains("nice")');
console.log('包含特定文本的元素（直接包含在文本中的元素，或者被包含在子元素中）："p:contains(\"nice\")"');
console.log($containsElement);

var $containsElement2 = $('ul:contains("CSS1")');
console.log('包含特定文本的元素（直接包含在文本中的元素，或者被包含在子元素中）："ul:contains(\"CSS1\")"');
console.log($containsElement2);


/*
其他过滤器
*/
/*
:not 选择器
*/
var $notElement = $('img:not(img[src$="1.jpg"])');
console.log('src 不是 1.jpg 结尾的 img 元素："img:not(img[src$=\"1.jpg\"])');
console.log($notElement);

/*
:visible, :hidden, :root, :target, :lang(language)
*/

/*
:header   <h1> - <h6>
*/
var $headerElement = $(':header');
console.log('头元素：":header');
console.log($headerElement);



/*
自定义过滤器
*/
$.expr[':'].requiredLevel = $.expr.createPseudo(function(filterParam){
    return function(element, context, isXml){
        return element.getAttribute('data-level') > 2 &&
            element.getAttribute('data-points') > 100;
    };
});

$.expr[':'].pointsHigerThan = $.expr.createPseudo(function(filterParam){
    var points = parseInt(filterParam, 10);
    return function(element, context, isXml){
        return element.getAttribute('data-points') > points;
    }
});

var $higerElement = $('ul.levels li:pointsHigerThan(50)');
console.log('自定义选择器： ul.levels li:pointsHigerThan(50)');
console.log($higerElement);

/*
使用上下文增强性能
给 $() 函数传递第二个参数 context，这个参数根据使用的选择器来限制筛选 DOM 子元素的范围，这个参数在页面有大量元素的情况下
非常有用，当忽略该参数时，默认为整个 document
*/
var $spansInDiv = $('span', 'div'); //等同于 $('div span')
console.log('增加了选择上下文的选择器： "span", "div"');
console.log($spansInDiv);
