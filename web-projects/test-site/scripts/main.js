var myHeading = document.querySelector('h1');
myHeading.innerHTML = 'Hello world!';
a="bbbbbbb"

function multiply(num1,num2) {
  var result = num1 * num2;
  return result;
}

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.jpg') {
      myImage.setAttribute ('src','images/firefox2.jpg');
    } else {
      myImage.setAttribute ('src','images/firefox-icon.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('输入你的名字.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}
myButton.onclick=setUserName