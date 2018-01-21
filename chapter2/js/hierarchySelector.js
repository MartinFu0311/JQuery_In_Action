//直接子元素
var $aDirectChild = $('ul.my-list > li > a');
console.log('层次选择器直接子元素 "ul.my-list > li > a" 结果：')
console.log($aDirectChild);

//子元素
var $aChild = $('ul.my-list li a');
console.log('层次选择器子元素 "ul.my-list li a" 结果：')
console.log($aChild);

//紧邻同级元素
var $siblingDirect = $('ul+table');
console.log('层次选择器紧邻同级 "ul+table" 结果：');
console.log($siblingDirect);

//同级元素
var $siblingNotDirect = $('ul~table');
console.log('层次选择器同级 "ul~table" 结果：');
console.log($siblingNotDirect);