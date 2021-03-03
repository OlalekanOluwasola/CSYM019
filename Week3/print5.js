function print5() {
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
}
print5();
print5();

function myClickFunction() {
var element = document.getElementById('pageheading');
element.firstChild.nodeValue = 'New Heading';
}

document.addEventListener('click', myClickFunction);