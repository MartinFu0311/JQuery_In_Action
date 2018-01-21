/*
jQuery 允许把 jQuery 集合当做 JavaScript 数组进行处理，所以可以用简单的数组索引来读取集合中的元素。
*/
var $imgAlt = $('img[alt]');
console.log('数组长度为：' + $imgAlt.length);
var firstImgAlt = $('img[alt]')[0];  //获取到的是一个原始的 DOM 元素
console.log('返回第一个元素：');
console.log(firstImgAlt);

/*
使用 get([index]) 方法
*/
var imageElement = $('img[alt]').get(0);  //和上面的用索引读取的代码效用一致
/*
使用负数做索引，就会从集合尾部开始计算。-1 查找倒数第一个元素
*/
var lastImageElement = $('img[alt]').get(-1);
console.log('返回最后一个元素：');
console.log(lastImageElement);
/*
没有索引参数，那么返回的就是 JavaScript 数组
*/
var imageArray = $('img[alt]').get();
console.log(imageArray);

/*
想获得一个包含特定元素的 jQuery 对象，而不是原始对象
*/
console.log('获取同一个特定元素（作为 jQuery 对象而不是原始对象）的三种写法的结果：');
var $obj1 = $($('img[alt]').get(2));
console.log($obj1 instanceof jQuery);  //判断是否为 jQuery 对象
console.log($obj1);
var $obj2 = $('img[alt]:eq(2)');
console.log($obj2);
var $obj3 = $('img[alt]').eq(2);  //推荐使用这种方法，使用 eq() 方法的性能比使用 :eq 筛选器的性能高，返回包含一个或多个元素的 jQuery 集合
console.log($obj3);

/*
first() 函数，对比 :first 筛选器
*/
var $firstObj = $('img[alt]').first();
console.log('first() 函数：');
console.log($firstObj);

/*
last() 函数，对比 :last 筛选器
*/
var $lastObj = $('img[alt]').last();
console.log('last() 函数：');
console.log($lastObj);

/*
作为数组返回 DOM 元素的集合
*/
var allPUL = $('p + ul').toArray();  //返回 ul 标签，且 ul 标签紧邻的兄弟节点为 p 标签
console.log('toArray 返回 DOM 元素数组集合：')
console.log(allPUL);

/*
index() 函数，获取索引，索引从 0 开始
*/
var index = $('.levels > li').index($('#li2'));
console.log('#li2 的索引是（以对应的 jQuery 对象作为参数）： ' + index);
index = $('.levels > li').index(document.getElementById('li2'));
console.log('#li2 的索引是（以对应的 JavaScript 对象作为参数）： ' + index);
index = $('.levels > li').index('#li2');
console.log('#li2 的索引是（以对应的 selector 作为参数）： ' + index);  //结果为 -1，传 selector 字符串作为参数不可以吗？？？

index = $('#li3').index();
console.log('无参 index() 方法返回的 #li3 的 index：' + index);

index = $('.levels > li[data-level=4]').index();
console.log('无参 index() 方法返回的.leves > li[data-level=4] 的 index：' + index);