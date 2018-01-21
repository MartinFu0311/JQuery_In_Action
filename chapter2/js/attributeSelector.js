//属性 href 值以 http:// 开头
var $externalLinks = $('a[href^="http://"]');
console.log('选择器 "a[href^=\"http://\"]" 结果:')
console.log($externalLinks);

//属性 href 值不等于 http://jquery.com
var $externalNotEqualLinks = $('a[href!="http://jquery.com"]');
console.log('选择器 "a[href^=\"http://jquery.com\"" 结果:')
console.log($externalNotEqualLinks);

/*  不能识别。。。书上讲错了？？？
//属性 href 值不以 http:// 开头
var $notExternalLinks = $('a[href!^="http://"]');
console.log('选择器 "a[href!^=\"http://\"]" 结果:')
console.log($notExternalLinks);
*/

//属性 src 值以 .jpg 结尾
var $endMatch = $('[src$=".jpg"');
console.log('选择器 "[src$=\".jpg\"" 结果:');
console.log($endMatch);

//属性 href 值包含 jquery
var $includeMatch = $('[href*="jquery.com"]');
console.log('选择器 "[href*=\"jquery.com\"" 结果:');
console.log($includeMatch);

//属性 id 包含前缀 tiger (包含 tiger 本身)
var $includePrefixMatch = $('[class|="my"]');
console.log('选择器 "[class|=\"my\"]" 结果:');
console.log($includePrefixMatch);

//满足两个条件
var $doubleMatch = $('input[type="checkbox"][checked]');
console.log('选择器 "input[type|=\"checkbox\"][checked]" 结果:');
console.log($doubleMatch);