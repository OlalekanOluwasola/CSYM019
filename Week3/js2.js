function myClickFunction() {
var element = document.getElementById('pageheading');
element.firstChild.nodeValue = 'New Heading';
var element = document.getElementById('paragraph');
element.firstChild.nodeValue = 'New paragraph text';
}
function myLoadFunction() {
var element = document.getElementById('pageheading');
element.addEventListener('click', updateH1);

var element = document.getElementById('paragraph');
element.addEventListener('click', updateParagraph);
}
document.addEventListener('DOMContentLoaded', myLoadFunction);