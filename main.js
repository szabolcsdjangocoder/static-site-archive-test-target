var myimg = document.createElement('img');
myimg.src = '/150.png'
document.getElementById('myimages').appendChild(myimg);

var myrequest = new XMLHttpRequest();
myrequest.open('GET', 'items.json');
myrequest.onload = function () {
  console.log(JSON.parse(myrequest.responseText));
};
myrequest.send();
