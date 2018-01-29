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



/*
使用关系获取集合
*/
/*
返回集合中所有元素的祖先，既包含直接父节点也包含更高层的祖先节点，但是不包含文档根节点（document），但选中的祖先节点只会出现一次
*/
var $parents = $('#hibiscus').parents();
console.log('id为 #hibiscus 的所有祖先节点：');
console.log($parents);

/*
通过 parents(selector) 对返回的祖先节点进行筛选
*/
$parents = $('#hibiscus').parents('div');
console.log('id为 #hibiscus 的所有祖先节点且节点标签为 div：');
console.log($parents);

/*
返回集合中所有元素的直接父节点元素，重复的父节点元素只返回一次
*/
var $parent = $('img, li').parent();
console.log('"img, li" 的父元素：');
console.log($parent);

/*
返回集合中所有元素的子元素，参数 selector 可以用于筛选
返回的是直接子元素
*/
var $bodyChildren = $('body').children();
console.log('body 的所有子元素，不包括文本节点：')
console.log($bodyChildren);

/*
children() 方法不返回文本节点，要处理文本节点使用 contents() 方法，参数 selector 可以用于筛选
*/
var $bodyContent = $('body').contents();
console.log('body 的所有子元素，包括文本节点：')
console.log($bodyContent);

/*
搜索遍历集合中的所有元素的子节点（深度优先算法）
*/
var $set = $('#sample-dom').find('[title]');
console.log('find() 方法深度优先搜索：');
console.log($set);

/*
返回集合中的直接兄弟节点
如果是最后一个节点，那么返回的集合长度为0
*/
var $nextImg = $('#hibiscus').next();
console.log('next() 方法返回集合中的直接兄弟节点：');
console.log($nextImg);

var $nextAllImg = $('#hibiscus').nextAll();
console.log('nextAll() 方法返回集合中的所有兄弟节点：');
console.log($nextAllImg);

/*
返回集合中的前直接兄弟节点
如果是第一个节点，那么返回的集合长度为0
*/
var $prevImg = $('#cozmo').prev();
console.log('prev() 方法返回集合中的前直接兄弟节点：');
console.log($prevImg);

/*
返回的集合可以注意下顺序，是从下往上
*/
var $prevAllImg = $('#cozmo').prevAll();
console.log('prevAll() 方法返回集合中的前所有兄弟节点：');
console.log($prevAllImg);

/*
返回集合中元素的兄弟节点
*/
var $siblings = $('#cozmo').siblings();
console.log($siblings);


/*
集合中添加新元素
add(selector[, context]): selector 参数可以是包含选择器的字符串、HTML 片段、DOM 元素、DOM 元素数组或者 jQuery 对象
*/
$('img[alt]').addClass('red-border').add('img[title]').addClass('opaque');

/*
删除集合元素
使用 not() 方法链式调用选择器来剔除某些元素
not(selector)：创建不包含选择器 selecotr 参数匹配元素的新集合，注意这里是把符合条件的筛选去掉了
*/
var $not = $('img[title]').not('[title*="puppy"]');  //等同的单个选择器  img[title]:not([title*='puppy'])
console.log('not 方法：');
console.log($not);

/*
not() 方法中传入函数，用于复杂的或者无法用单个选择器表达式描述的情况
符合函数条件的会被筛选掉
*/
var $notWithFunction = $('div').not(function(index){
    return $(this).children().length > 2 && index % 2 === 0;
});
console.log('not() 方法中传入函数：');
console.log($notWithFunction);


/*
filter(selector) 方法和 not(selector) 方法相反，符合条件的会被筛选出来
*/
var $filtered = $('td').filter(function(){
    return this.innerHTML.match(/^\d+$/);
});
console.log('filter() 方法返回只包含纯数字的 td ：');
console.log($filtered);

/*
slice(start[, end])
start：首元素位置为0
end：返回元素的最后位置，如果为负数，则表示偏移从末尾开始
*/
var $slice = $('*').slice(0, 4);
console.log('slice() 方法获取前4个元素：');
console.log($slice);

/*
has(selector)
测试所有 jQuery 集合中的子元素，返回只包含匹配 selector 选择器的子元素的新集合
*/
var $has = $('div').has('img[alt]');
console.log('has() 方法返回匹配 selector 选择器的子元素的新集合：');
console.log($has);

/*
map(callback)
需要转换集合的元素，根据一个集合计算出另一个集合
在集合中的每个元素上调用 callback 函数，然后返回值到一个 jQuery 对象中
函数传递两个参数，第一个是集合中元素的索引，第二个是元素本身，元素本身作为函数的上下文（this）
*/
var $allIds = $('div').map(function(){
    return this.id;
});
console.log('map() 方法得到元素的 id 的集合：');
console.log($allIds);

/*
each(iterator)
遍历集合中的所有元素，为每个元素调用 iterator 函数
函数传递两个参数，第一个是集合中元素的索引，第二个是元素本身，元素本身作为函数的上下文（this)
返回的集合是原来的 jQuery 集合
*/
var $imgAlts = $('img').each(function(i){
    this.alt = 'This is image[' + i + '] with an id of ' + this.id;
});
console.log('each() 方法修改 img 元素的 alt：');
console.log($imgAlts);

/*
is(selector)
确定集合中是否有元素匹配给定的选择器
有匹配的返回 true，没有返回 false
*/
var hasImage = $('*').is('img');
console.log('is() 方法判断全文元素中是否包含 img 元素：');
console.log(hasImage);

/*
end()
在 jQuery 链式调用中使用该方法，在当前调用链中结束最近的过滤操作，然后返回匹配元素的集合到之前的状态
jQuery 对象维护了一个内部栈来保存针对匹配元素集合的修改
*/
$('img').filter('[title]').hide().end().addClass('my-class');

/*
addBack([selector])
把栈上前一个元素集合的元素添加到当前集合里
*/
$('div').addClass('my-class').find('img').addClass('red-border').addBack().addClass('opaque');
